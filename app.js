/**
 * APP - NS CheckList Situacional CME v1
 * Lógica principal da aplicação
 */

let currentModule = null;
let currentQuestionIndex = 0;
let evaluationHeader = null;
let evaluationAnswers = [];

function initApp() {
    const savedHeader = localStorage.getItem('evaluationHeader');
    const savedAnswers = localStorage.getItem('evaluationAnswers');
    if (savedHeader) {
        evaluationHeader = JSON.parse(savedHeader);
        evaluationAnswers = JSON.parse(savedAnswers).answers;
        showMainApp();
        showModulesMenu();
    } else {
        showSetupForm();
    }
}

function showSetupForm() {
    document.getElementById('setupForm').style.display = 'flex';
    document.getElementById('mainApp').style.display = 'none';
    document.getElementById('institutionForm').addEventListener('submit', saveInstitution);
}

function showMainApp() {
    document.getElementById('setupForm').style.display = 'none';
    document.getElementById('mainApp').style.display = 'flex';
    document.getElementById('institutionDisplay').textContent = `${evaluationHeader.institutionName} - ${evaluationHeader.city}/${evaluationHeader.state}`;
}

function saveInstitution(e) {
    e.preventDefault();
    evaluationHeader = {
        evaluationId: generateUUID(),
        institutionName: document.getElementById('institutionName').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        type: document.getElementById('institutionType').value,
        surgicalRooms: parseInt(document.getElementById('surgicalRooms').value),
        autoclaves: parseInt(document.getElementById('autoclaves').value),
        responsibleName: document.getElementById('responsibleName').value,
        role: document.getElementById('role').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        createdAt: new Date().toISOString()
    };
    evaluationAnswers = questions.map(q => ({
        questionId: q.id,
        response: "N/A",
        observation: ""
    }));
    localStorage.setItem('evaluationHeader', JSON.stringify(evaluationHeader));
    localStorage.setItem('evaluationAnswers', JSON.stringify({ answers: evaluationAnswers }));
    showMainApp();
    showModulesMenu();
}

function showModulesMenu() {
    document.getElementById('modulesMenu').style.display = 'block';
    document.getElementById('questionsSection').style.display = 'none';
    document.getElementById('moduleAnalysis').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    renderModulesList();
    updateProgressBar();
}

function renderModulesList() {
    const container = document.getElementById('modulesList');
    container.innerHTML = '';
    const uniqueModules = [...new Set(questions.map(q => q.module))];
    uniqueModules.forEach(module => {
        const moduleQuestions = questions.filter(q => q.module === module);
        const answeredQuestions = evaluationAnswers.filter(a => {
            const question = questions.find(q => q.id === a.questionId);
            return question && question.module === module && a.response !== "N/A";
        });
        const progress = Math.round((answeredQuestions.length / moduleQuestions.length) * 100);
        const analysis = generateModuleAnalysis(module, evaluationAnswers);
        const card = document.createElement('div');
        card.className = 'module-card';
        if (progress === 100) {
            card.classList.add('completed');
        } else if (progress > 0) {
            card.classList.add('in-progress');
        }
        card.innerHTML = `<h3>${module}</h3><div class="module-meta">${answeredQuestions.length}/${moduleQuestions.length}</div><div class="module-progress-mini"><div class="module-progress-bar"><div class="module-progress-fill" style="width: ${progress}%"></div></div><span class="module-percentage">${progress}%</span></div><span class="module-classification ${analysis.classification.toLowerCase()}">${analysis.classification}</span>`;
        card.addEventListener('click', () => selectModule(module));
        container.appendChild(card);
    });
}

function selectModule(moduleName) {
    currentModule = moduleName;
    currentQuestionIndex = 0;
    showQuestionsSection();
}

function showQuestionsSection() {
    document.getElementById('modulesMenu').style.display = 'none';
    document.getElementById('questionsSection').style.display = 'block';
    document.getElementById('moduleAnalysis').style.display = 'none';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('currentModuleTitle').textContent = currentModule;
    const moduleQuestions = questions.filter(q => q.module === currentModule);
    currentQuestionIndex = 0;
    renderQuestion(moduleQuestions[currentQuestionIndex]);
    updateQuestionCounter(moduleQuestions.length);
    updateProgressBar();
}

function renderQuestion(question) {
    const container = document.getElementById('questionsList');
    const answer = evaluationAnswers.find(a => a.questionId === question.id);
    const layerLabel = { 'C': 'Compliance', 'P': 'Performance', 'I': 'Inteligência' }[question.layer];
    const layerClass = { 'C': 'compliance', 'P': 'performance', 'I': 'intelligence' }[question.layer];
    container.innerHTML = `<div class="question-item active"><div class="question-header"><div class="question-number">Pergunta ${question.id}</div><span class="question-layer ${layerClass}">${question.layer} - ${layerLabel}</span></div><div class="question-text">${question.text}</div><div class="response-options"><div class="response-option"><input type="radio" id="resp1" name="response" value="1" ${answer.response === '1' ? 'checked' : ''}><label for="resp1">1 - Não</label></div><div class="response-option"><input type="radio" id="resp2" name="response" value="2" ${answer.response === '2' ? 'checked' : ''}><label for="resp2">2 - Parcial</label></div><div class="response-option"><input type="radio" id="resp3" name="response" value="3" ${answer.response === '3' ? 'checked' : ''}><label for="resp3">3 - Sim</label></div><div class="response-option"><input type="radio" id="resp4" name="response" value="4" ${answer.response === '4' ? 'checked' : ''}><label for="resp4">4 - Excelente</label></div><div class="response-option"><input type="radio" id="respNA" name="response" value="N/A" ${answer.response === 'N/A' ? 'checked' : ''}><label for="respNA">N/A</label></div></div><div class="observation-input"><textarea placeholder="Observações/Evidências..." id="observation">${answer.observation}</textarea></div></div>`;
    document.querySelectorAll('input[name="response"]').forEach(input => {
        input.addEventListener('change', () => {
            const selectedResponse = document.querySelector('input[name="response"]:checked').value;
            saveAnswer(question.id, selectedResponse, document.getElementById('observation').value);
        });
    });
    document.getElementById('observation').addEventListener('change', (e) => {
        const selectedResponse = document.querySelector('input[name="response"]:checked').value;
        saveAnswer(question.id, selectedResponse, e.target.value);
    });
}

function saveAnswer(questionId, response, observation) {
    const answerIndex = evaluationAnswers.findIndex(a => a.questionId === questionId);
    evaluationAnswers[answerIndex].response = response;
    evaluationAnswers[answerIndex].observation = observation;
    localStorage.setItem('evaluationAnswers', JSON.stringify({ answers: evaluationAnswers }));
    updateProgressBar();
}

function nextQuestion() {
    const moduleQuestions = questions.filter(q => q.module === currentModule);
    if (currentQuestionIndex < moduleQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion(moduleQuestions[currentQuestionIndex]);
        updateQuestionCounter(moduleQuestions.length);
        document.getElementById('questionsList').scrollTop = 0;
    } else {
        showModuleAnalysis(currentModule);
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        const moduleQuestions = questions.filter(q => q.module === currentModule);
        renderQuestion(moduleQuestions[currentQuestionIndex]);
        updateQuestionCounter(moduleQuestions.length);
        document.getElementById('questionsList').scrollTop = 0;
    }
}

function updateQuestionCounter(total) {
    document.getElementById('questionCounter').textContent = `${currentQuestionIndex + 1} de ${total}`;
}

function showModuleAnalysis(moduleName) {
    const analysis = generateModuleAnalysis(moduleName, evaluationAnswers);
    document.getElementById('modulesMenu').style.display = 'none';
    document.getElementById('questionsSection').style.display = 'none';
    document.getElementById('moduleAnalysis').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('analysisPercentage').textContent = analysis.percentage.toFixed(1) + '%';
    document.getElementById('analysisPercentage').className = `metric-value ${analysis.classification.toLowerCase()}`;
    document.getElementById('analysisClassification').textContent = analysis.classification;
    document.getElementById('analysisClassification').className = `metric-value ${analysis.classification.toLowerCase()}`;
    document.getElementById('analysisText').textContent = analysis.miniAnalysis;
    if (areAllModulesComplete(evaluationAnswers)) {
        const btnContinue = document.querySelector('.module-analysis .btn-primary');
        if (btnContinue) {
            btnContinue.textContent = 'Ver Dashboard';
            btnContinue.onclick = () => showDashboard();
        }
    }
}

function backToModules() {
    showModulesMenu();
}

function showDashboard() {
    document.getElementById('modulesMenu').style.display = 'none';
    document.getElementById('questionsSection').style.display = 'none';
    document.getElementById('moduleAnalysis').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    const progressPercentage = getOverallProgress(evaluationAnswers);
    renderFullDashboard(evaluationAnswers, progressPercentage);
}

function updateProgressBar() {
    const progressPercentage = getOverallProgress(evaluationAnswers);
    document.getElementById('progressFill').style.width = progressPercentage + '%';
    document.getElementById('progressText').textContent = progressPercentage + '%';
}

function editInstitution() {
    if (confirm('Tem certeza que deseja editar os dados da instituição? Isso pode resetar o progresso.')) {
        resetApp();
    }
}

function resetApp() {
    if (confirm('Tem certeza? Todos os dados serão perdidos.')) {
        localStorage.removeItem('evaluationHeader');
        localStorage.removeItem('evaluationAnswers');
        evaluationHeader = null;
        evaluationAnswers = [];
        currentModule = null;
        location.reload();
    }
}

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getOverallProgress(answers) {
    if (answers.length === 0) return 0;
    const answeredQuestions = answers.filter(a => a.response !== "N/A");
    return Math.round((answeredQuestions.length / answers.length) * 100);
}

function generateModuleAnalysis(moduleName, answers) {
    const moduleQuestions = questions.filter(q => q.module === moduleName);
    const answeredQuestions = answers.filter(a => {
        const question = questions.find(q => q.id === a.questionId);
        return question && question.module === moduleName && a.response !== "N/A";
    });
    const percentage = (answeredQuestions.length / moduleQuestions.length) * 100;
    let totalScore = 0;
    answeredQuestions.forEach(answer => {
        const response = parseInt(answer.response);
        if (!isNaN(response)) {
            totalScore += response;
        }
    });
    const averageScore = answeredQuestions.length > 0 ? totalScore / answeredQuestions.length : 0;
    let classification = "Crítico";
    let miniAnalysis = "Conformidade crítica. Ações corretivas urgentes necessárias.";
    if (averageScore >= 3.5 && percentage === 100) {
        classification = "Conforme";
        miniAnalysis = "Módulo em conformidade com excelência. Manutenção recomendada.";
    } else if (averageScore >= 2.5 && percentage >= 75) {
        classification = "Alerta";
        miniAnalysis = "Existem pontos de atenção. Plano de ação recomendado.";
    } else if (averageScore >= 1.5 || percentage >= 50) {
        classification = "Crítico";
        miniAnalysis = "Existem pontos de atenção crítica. Ação corretiva necessária.";
    }
    return { module: moduleName, percentage: percentage, score: averageScore, classification: classification, miniAnalysis: miniAnalysis, questionsAnswered: answeredQuestions.length, totalQuestions: moduleQuestions.length };
}

function areAllModulesComplete(answers) {
    const uniqueModules = [...new Set(questions.map(q => q.module))];
    return uniqueModules.every(module => {
        const moduleQuestions = questions.filter(q => q.module === module);
        const answeredQuestions = answers.filter(a => {
            const question = questions.find(q => q.id === a.questionId);
            return question && question.module === module && a.response !== "N/A";
        });
        return answeredQuestions.length === moduleQuestions.length;
    });
}

document.addEventListener('DOMContentLoaded', initApp);
