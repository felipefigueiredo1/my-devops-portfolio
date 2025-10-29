export default function Projects() {
  const projects = [
    {
      title: "Infraestrutura AWS com Terraform",
      description: "Provisionamento automatizado de infraestrutura AWS usando Terraform, incluindo EC2, RDS, S3 e VPC com alta disponibilidade.",
      tags: ["AWS", "Terraform", "IaC", "DevOps"],
      color: "blue",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: "Pipeline CI/CD com GitHub Actions",
      description: "Implementação de pipelines de integração e entrega contínua automatizados com testes, análise de código e deploy em múltiplos ambientes.",
      tags: ["CI/CD", "GitHub Actions", "Docker", "Automation"],
      color: "green",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Orquestração de Containers",
      description: "Configuração e gerenciamento de clusters Docker com Compose e Kubernetes, incluindo monitoramento e escalabilidade automática.",
      tags: ["Docker", "Kubernetes", "Containers", "Orchestration"],
      color: "purple",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Automação com Ansible",
      description: "Playbooks Ansible para configuração automatizada de servidores Linux, deploy de aplicações e gerenciamento de configurações.",
      tags: ["Ansible", "Automation", "Linux", "Configuration"],
      color: "orange",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "API REST com Laravel",
      description: "Desenvolvimento de APIs escaláveis e seguras com Laravel, incluindo autenticação JWT, cache Redis e documentação Swagger.",
      tags: ["Laravel", "PHP", "API", "MySQL"],
      color: "red",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Sistema de Monitoramento",
      description: "Implementação de stack de observabilidade com Prometheus, Grafana e alertas automatizados para sistemas em produção.",
      tags: ["Monitoring", "Prometheus", "Grafana", "SRE"],
      color: "cyan",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-700",
      cardBg: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
    },
    green: {
      bg: "from-green-500 to-green-600",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-700",
      cardBg: "from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20"
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-700",
      cardBg: "from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
    },
    orange: {
      bg: "from-orange-500 to-orange-600",
      text: "text-orange-600 dark:text-orange-400",
      border: "border-orange-200 dark:border-orange-700",
      cardBg: "from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
    },
    red: {
      bg: "from-red-500 to-red-600",
      text: "text-red-600 dark:text-red-400",
      border: "border-red-200 dark:border-red-700",
      cardBg: "from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20"
    },
    cyan: {
      bg: "from-cyan-500 to-cyan-600",
      text: "text-cyan-600 dark:text-cyan-400",
      border: "border-cyan-200 dark:border-cyan-700",
      cardBg: "from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20"
    }
  };

  return (
    <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900 dark:text-white">
            Projetos & Realizações
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Soluções desenvolvidas e implementadas em DevOps, SRE e Desenvolvimento
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const colors = colorClasses[project.color as keyof typeof colorClasses];
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colors.cardBg} p-6 rounded-xl shadow-lg border ${colors.border} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className={`${colors.text} mb-4`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-200 text-sm rounded-full border border-gray-300 dark:border-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interessado em colaborar?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Estou sempre aberto a novos projetos e oportunidades. Vamos conversar!
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}