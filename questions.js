/**
 * QUESTIONS - NS CheckList Situacional CME v1
 * Estrutura completa de perguntas do checklist
 */

const questions = [
    // ===== SEÇÃO: QUALIDADE E ACREDITAÇÃO =====
    {
        id: 1,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "C4",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "A CME possui procedimentos operacionais padrão (POPs) atualizados para os processos críticos do setor?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 2,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "C4",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "Os documentos da CME estão versionados, aprovados e com controle formal de revisão?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 3,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "C1",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "Existe política institucional ou diretriz formal de qualidade aplicável à CME?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 4,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "C4",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "A CME mantém registros organizados e facilmente recuperáveis para apresentação em auditorias?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 5,
        section: "Qualidade e Acreditação",
        module: "Rastreabilidade",
        category: "C3",
        type: "score",
        weight: 1.2,
        evidenceRequired: true,
        question: "Existe rastreabilidade dos produtos para saúde processados na CME?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 6,
        section: "Qualidade e Acreditação",
        module: "Rastreabilidade",
        category: "C3",
        type: "score",
        weight: 1.2,
        evidenceRequired: true,
        question: "A rastreabilidade permite identificar carga, ciclo, equipamento, data e profissional responsável?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 7,
        section: "Qualidade e Acreditação",
        module: "Rastreabilidade",
        category: "C3",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "Os registros dos processos críticos são completos, legíveis e recuperáveis quando necessário?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 8,
        section: "Qualidade e Acreditação",
        module: "Rastreabilidade",
        category: "C6",
        type: "score",
        weight: 1.1,
        evidenceRequired: true,
        question: "Há controle formal de não conformidades relacionadas ao processamento e à liberação de materiais?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 9,
        section: "Qualidade e Acreditação",
        module: "Indicadores",
        category: "P5",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "A CME acompanha indicadores operacionais e de qualidade definidos formalmente?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 10,
        section: "Qualidade e Acreditação",
        module: "Indicadores",
        category: "P5",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "Os resultados dos indicadores são analisados periodicamente pela liderança do setor?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 11,
        section: "Qualidade e Acreditação",
        module: "Indicadores",
        category: "C2",
        type: "score",
        weight: 1.2,
        evidenceRequired: true,
        question: "Há monitoramento documentado dos controles físicos, químicos e biológicos dos processos de esterilização?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 12,
        section: "Qualidade e Acreditação",
        module: "Indicadores",
        category: "P5",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "Desvios identificados em indicadores geram plano de ação com acompanhamento de efetividade?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 13,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "C6",
        type: "score",
        weight: 1.2,
        evidenceRequired: true,
        question: "Existe avaliação sistemática de riscos nos processos críticos da CME?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 14,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "C6",
        type: "score",
        weight: 1.2,
        evidenceRequired: true,
        question: "Eventos adversos, falhas de processo ou quase falhas são registrados, analisados e tratados?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 15,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "C6",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "O setor participa das ações institucionais relacionadas à segurança do paciente?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 16,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "C8",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "Existe comunicação estruturada entre a CME e outros setores críticos, como centro cirúrgico e unidades assistenciais?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 17,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "P1",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "A equipe da CME recebe treinamento periódico sobre processos críticos e requisitos de qualidade?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 18,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "P1",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "Há registro formal dos treinamentos realizados e das competências avaliadas?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 19,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "P1",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "Novos colaboradores passam por integração e capacitação estruturada antes de atuarem de forma autônoma?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 20,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "I1",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "A CME possui plano de melhoria contínua com prioridades definidas, responsáveis e prazos?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 21,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "I1",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "As ações de melhoria implementadas são reavaliadas quanto à sua efetividade?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    },
    {
        id: 22,
        section: "Qualidade e Acreditação",
        module: "Governança",
        category: "I1",
        type: "score",
        weight: 1,
        evidenceRequired: true,
        question: "O setor participa de metas institucionais relacionadas à qualidade, segurança e eficiência operacional?",
        options: ["0", "1", "2", "3", "4", "N/A"]
    }
];

function getQuestionsByModule(moduleName) {
    return questions.filter(q => q.module === moduleName);
}

function getQuestionsByCategory(categoryCode) {
    return questions.filter(q => q.category === categoryCode);
}

function getQuestionsBySection(sectionName) {
    return questions.filter(q => q.section === sectionName);
}

function getQuestionById(questionId) {
    return questions.find(q => q.id === questionId);
}

function getTotalWeightByModule(moduleName) {
    return getQuestionsByModule(moduleName).reduce((total, q) => total + (q.weight || 1), 0);
}

function getSections() {
    return [...new Set(questions.map(q => q.section))];
}
