/**
 * MÓDULOS - NS CheckList Situacional CME v1
 * Define os 10 módulos de avaliação
 */

const modules = ["Recepção", "Expurgo", "Limpeza", "Preparo", "Embalagem", "Esterilização", "Armazenamento", "Distribuição", "Governança", "Tecnologia", "Indicadores", "Integração CC", "Água", "Sustentabilidade", "Consignados", "Rastreabilidade"];

const modulesMetadata = {
    "Recepção": { bloco: "BLOCO 1: Processos Operacionais", ordem: 1, cor: "#D32F2F", descricao: "Recepção e conferência de materiais contaminados", submodulos: ["Recepção"], icone: "📥" },
    "Expurgo": { bloco: "BLOCO 1: Processos Operacionais", ordem: 2, cor: "#D32F2F", descricao: "Área de expurgo e limpeza inicial", submodulos: ["Expurgo"], icone: "🧹" },
    "Limpeza": { bloco: "BLOCO 1: Processos Operacionais", ordem: 3, cor: "#D32F2F", descricao: "Processo de limpeza de instrumentais", submodulos: ["Limpeza"], icone: "💧" },
    "Preparo": { bloco: "BLOCO 1: Processos Operacionais", ordem: 4, cor: "#D32F2F", descricao: "Preparo e inspeção de materiais", submodulos: ["Preparo"], icone: "🔍" },
    "Embalagem": { bloco: "BLOCO 1: Processos Operacionais", ordem: 5, cor: "#D32F2F", descricao: "Embalagem de materiais para esterilização", submodulos: ["Embalagem"], icone: "📦" },
    "Esterilização": { bloco: "BLOCO 1: Processos Operacionais", ordem: 6, cor: "#D32F2F", descricao: "Processo de esterilização de materiais", submodulos: ["Esterilização"], icone: "🔥" },
    "Armazenamento": { bloco: "BLOCO 1: Processos Operacionais", ordem: 7, cor: "#D32F2F", descricao: "Armazenamento de materiais esterilizados", submodulos: ["Armazenamento"], icone: "📦" },
    "Distribuição": { bloco: "BLOCO 1: Processos Operacionais", ordem: 8, cor: "#D32F2F", descricao: "Distribuição de materiais esterilizados", submodulos: ["Distribuição"], icone: "🚚" },
    "Governança": { bloco: "BLOCO 2: Governança", ordem: 9, cor: "#FBC02D", descricao: "Governança, estrutura física e recursos humanos", submodulos: ["Governança", "Estrutura", "RH"], icone: "⚙️" },
    "Tecnologia": { bloco: "BLOCO 3: Gestão e Inovação", ordem: 10, cor: "#0066CC", descricao: "Sistemas informatizados e rastreabilidade", submodulos: ["Tecnologia"], icone: "💻" },
    "Indicadores": { bloco: "BLOCO 3: Gestão e Inovação", ordem: 11, cor: "#0066CC", descricao: "Indicadores de desempenho e monitoramento", submodulos: ["Indicadores"], icone: "📊" },
    "Integração CC": { bloco: "BLOCO 3: Gestão e Inovação", ordem: 12, cor: "#0066CC", descricao: "Integração com centro cirúrgico", submodulos: ["Integração"], icone: "🔗" },
    "Água": { bloco: "BLOCO 3: Gestão e Inovação", ordem: 13, cor: "#0066CC", descricao: "Qualidade da água e insumos", submodulos: ["Água"], icone: "💧" },
    "Sustentabilidade": { bloco: "BLOCO 3: Gestão e Inovação", ordem: 14, cor: "#0066CC", descricao: "Sustentabilidade e eficiência operacional", submodulos: ["Sustentabilidade"], icone: "🌱" },
    "Consignados": { bloco: "BLOCO 3: Gestão e Inovação", ordem: 15, cor: "#0066CC", descricao: "OPME e materiais consignados", submodulos: ["Consignados"], icone: "📋" },
    "Rastreabilidade": { bloco: "BLOCO 3: Gestão e Inovação", ordem: 16, cor: "#0066CC", descricao: "Rastreabilidade e segurança do paciente", submodulos: ["Rastreabilidade"], icone: "🔐" }
};

function getModuleColor(moduleName) {
    return modulesMetadata[moduleName]?.cor || "#999999";
}

function getModuleDescription(moduleName) {
    return modulesMetadata[moduleName]?.descricao || "Módulo não descrito";
}

function getModuleBloco(moduleName) {
    return modulesMetadata[moduleName]?.bloco || "Bloco desconhecido";
}

function getModuleOrdem(moduleName) {
    return modulesMetadata[moduleName]?.ordem || 999;
}

function getModuleIcon(moduleName) {
    return modulesMetadata[moduleName]?.icone || "📋";
}

function getModulesOrderedByBloco() {
    return modules.slice().sort((a, b) => getModuleOrdem(a) - getModuleOrdem(b));
}

function getModulesByBloco(blocoName) {
    return modules.filter(module => getModuleBloco(module) === blocoName);
}

function getBlocos() {
    return ["BLOCO 1: Processos Operacionais", "BLOCO 2: Governança", "BLOCO 3: Gestão e Inovação"];
}

function getModuleQuestionCount(moduleName) {
    return questions.filter(q => q.module === moduleName).length;
}

function getTotalQuestionsInBloco(blocoName) {
    const modulesInBloco = getModulesByBloco(blocoName);
    return modulesInBloco.reduce((total, module) => total + getModuleQuestionCount(module), 0);
}

function getModuleSubmodules(moduleName) {
    return modulesMetadata[moduleName]?.submodulos || [];
}

function isModuleComplete(moduleName, answers) {
    const moduleQuestions = questions.filter(q => q.module === moduleName);
    const answeredQuestions = answers.filter(a => {
        const question = questions.find(q => q.id === a.questionId);
        return question && question.module === moduleName && a.response !== "N/A";
    });
    return answeredQuestions.length === moduleQuestions.length;
}

function getModuleProgress(moduleName, answers) {
    const moduleQuestions = questions.filter(q => q.module === moduleName);
    if (moduleQuestions.length === 0) return 0;
    const answeredQuestions = answers.filter(a => {
        const question = questions.find(q => q.id === a.questionId);
        return question && question.module === moduleName && a.response !== "N/A";
    });
    return Math.round((answeredQuestions.length / moduleQuestions.length) * 100);
}

function getModuleScore(moduleName, answers) {
    const moduleQuestions = questions.filter(q => q.module === moduleName);
    const answeredQuestions = answers.filter(a => {
        const question = questions.find(q => q.id === a.questionId);
        return question && question.module === moduleName && a.response !== "N/A";
    });
    if (answeredQuestions.length === 0) return 0;
    let totalScore = 0;
    answeredQuestions.forEach(answer => {
        const response = parseInt(answer.response);
        if (!isNaN(response)) {
            totalScore += response;
        }
    });
    return Math.round((totalScore / (answeredQuestions.length * 4)) * 100);
}

function getModuleClassification(moduleName, answers) {
    const score = getModuleScore(moduleName, answers);
    const progress = getModuleProgress(moduleName, answers);
    if (score >= 85 && progress === 100) {
        return "Conforme";
    } else if (score >= 60 && progress >= 75) {
        return "Alerta";
    } else {
        return "Crítico";
    }
}

function getModuleClassificationColor(classification) {
    const colors = {
        "Conforme": "#4CAF50",
        "Alerta": "#FBC02D",
        "Crítico": "#D32F2F"
    };
    return colors[classification] || "#999999";
}

function getModuleRecommendations(moduleName, answers) {
    const classification = getModuleClassification(moduleName, answers);
    const recommendations = {
        "Conforme": "Manutenção e auditorias periódicas recomendadas.",
        "Alerta": "Implementar plano de ação para os pontos identificados em até 90 dias.",
        "Crítico": "Ação corretiva urgente necessária. Implementação em até 30 dias."
    };
    return recommendations[classification] || "Verifique a classificação do módulo.";
}
