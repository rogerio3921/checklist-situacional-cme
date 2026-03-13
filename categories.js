/**
 * CATEGORIAS - NS CheckList Situacional CME v1
 * Define as categorias de conformidade e suas características
 */

const categories = {
    // ===== COMPLIANCE (C1-C8) =====
    C1: { name: "Conformidade Básica", color: "#D32F2F", description: "Requisito essencial para funcionamento" },
    C2: { name: "Monitoramento", color: "#D32F2F", description: "Controle e verificação contínua" },
    C3: { name: "Rastreabilidade", color: "#D32F2F", description: "Registro e rastreamento de processos" },
    C4: { name: "Documentação", color: "#D32F2F", description: "Registros e documentos formais" },
    C5: { name: "Validação", color: "#D32F2F", description: "Qualificação e validação de equipamentos" },
    C6: { name: "Segurança", color: "#D32F2F", description: "Controle de riscos e eventos adversos" },
    C7: { name: "Gestão Ambiental", color: "#D32F2F", description: "Resíduos e impacto ambiental" },
    C8: { name: "Integração", color: "#D32F2F", description: "Comunicação com outros setores" },
    
    // ===== PERFORMANCE (P1-P5) =====
    P1: { name: "Recursos Humanos", color: "#FBC02D", description: "Dimensionamento e capacitação" },
    P2: { name: "Processos Eficientes", color: "#FBC02D", description: "Otimização de fluxos" },
    P3: { name: "Gestão Financeira", color: "#FBC02D", description: "Custos e despesas operacionais" },
    P4: { name: "Consumo de Recursos", color: "#FBC02D", description: "Água, energia e insumos" },
    P5: { name: "Indicadores", color: "#FBC02D", description: "Métricas de desempenho" },
    
    // ===== INTELLIGENCE (I1-I3) =====
    I1: { name: "Planejamento Estratégico", color: "#0066CC", description: "Visão de futuro e planos" },
    I2: { name: "Automação e Inovação", color: "#0066CC", description: "Tecnologia e sistemas" },
    I3: { name: "Análise de Dados", color: "#0066CC", description: "Inteligência e insights" }
};

/**
 * Calcula a cor da barra de progresso baseado na camada
 */
function getCategoryColor(layer) {
    const colors = {
        'C': '#D32F2F',  // Vermelho
        'P': '#FBC02D',  // Amarelo
        'I': '#0066CC'   // Azul
    };
    return colors[layer] || '#999999';
}

/**
 * Obtém descrição da categoria
 */
function getCategoryDescription(categoryCode) {
    return categories[categoryCode]?.description || 'Categoria desconhecida';
}

/**
 * Obtém nome da categoria
 */
function getCategoryName(categoryCode) {
    return categories[categoryCode]?.name || categoryCode;
}

/**
 * Distribuição esperada de categorias
 */
const categoryDistribution = {
    C1: { count: 45, weight: 0.25 },
    C2: { count: 20, weight: 0.10 },
    C3: { count: 25, weight: 0.15 },
    C4: { count: 25, weight: 0.15 },
    C5: { count: 10, weight: 0.08 },
    C6: { count: 20, weight: 0.12 },
    C7: { count: 8, weight: 0.05 },
    C8: { count: 10, weight: 0.10 },
    P1: { count: 8, weight: 0.15 },
    P2: { count: 15, weight: 0.30 },
    P3: { count: 5, weight: 0.10 },
    P4: { count: 8, weight: 0.15 },
    P5: { count: 15, weight: 0.30 },
    I1: { count: 8, weight: 0.30 },
    I2: { count: 8, weight: 0.30 },
    I3: { count: 8, weight: 0.40 }
};
