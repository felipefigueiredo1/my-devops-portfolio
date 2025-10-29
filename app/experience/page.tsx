export default function Experience() {
  const experiences = [
    {
      company: "Grupo SGCOR",
      role: "Desenvolvedor Back-End",
      period: "Jul 2022 – Atual",
      duration: "2 anos+",
      color: "blue",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      responsibilities: [
        "Desenvolvimento com PHP orientado a objetos (MVC), Docker, Bootstrap, jQuery, MySQL e Nginx",
        "Configuração de ambientes Docker, versionamento e otimização de aplicações internas",
        "Integração de sistemas legados em containers e automação de builds"
      ],
      technologies: ["PHP", "Docker", "MySQL", "Nginx", "Bootstrap"]
    },
    {
      company: "Freelancer / Autônomo",
      role: "Desenvolvedor e DevOps",
      period: "2020 – Atual",
      duration: "4 anos+",
      color: "green",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      responsibilities: [
        "Desenvolvimento de aplicações com Node.js, Laravel e Python em arquiteturas monolíticas e de microsserviços",
        "Estruturação e manutenção de ambientes AWS (EC2, S3, RDS, Lambda)",
        "Configuração de servidores Apache e Nginx",
        "Criação de automações com Python e Shell Script",
        "Configuração de firewalls e pipelines de CI/CD para deploy contínuo",
        "Automações e testes com Selenium",
        "Otimizações de performance de APIs"
      ],
      technologies: ["AWS", "Node.js", "Laravel", "Python", "CI/CD", "Docker"]
    },
    {
      company: "VITA Tecnologia",
      role: "Desenvolvedor Full Stack",
      period: "Dez 2021 – Mai 2022",
      duration: "6 meses",
      color: "purple",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      responsibilities: [
        "Desenvolvimento com Laravel, Vue.js e MySQL",
        "Aplicação de padrões SOLID, Clean Code e TDD",
        "Suporte à infraestrutura e configuração de ambientes",
        "Criação de pipelines de integração e implantação de features"
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "TDD", "Clean Code"]
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
      cardBg: "from-blue-50/80 to-blue-100/80 dark:from-blue-900/30 dark:to-blue-800/30",
      border: "border-blue-300 dark:border-blue-600",
      text: "text-blue-600 dark:text-blue-400",
      iconBg: "bg-blue-100 dark:bg-blue-900/50"
    },
    green: {
      bg: "bg-gradient-to-br from-green-500 to-green-600",
      cardBg: "from-green-50/80 to-green-100/80 dark:from-green-900/30 dark:to-green-800/30",
      border: "border-green-300 dark:border-green-600",
      text: "text-green-600 dark:text-green-400",
      iconBg: "bg-green-100 dark:bg-green-900/50"
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
      cardBg: "from-purple-50/80 to-purple-100/80 dark:from-purple-900/30 dark:to-purple-800/30",
      border: "border-purple-300 dark:border-purple-600",
      text: "text-purple-600 dark:text-purple-400",
      iconBg: "bg-purple-100 dark:bg-purple-900/50"
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Experiência Profissional
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Trajetória de desenvolvimento e infraestrutura construindo soluções escaláveis e robustas
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 via-green-300 to-purple-300 dark:from-blue-700 dark:via-green-700 dark:to-purple-700" />

            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const colors = colorClasses[exp.color as keyof typeof colorClasses];
                const isLeft = index % 2 === 0;
                
                return (
                  <div key={index} className={`relative md:flex md:items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br ${colors.bg} border-4 border-white dark:border-gray-900 shadow-lg z-10" />
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className={`backdrop-blur-sm bg-gradient-to-br ${colors.cardBg} p-8 rounded-2xl shadow-xl border-2 ${colors.border} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-start space-x-4">
                            <div className={`${colors.iconBg} p-3 rounded-xl ${colors.text}`}>
                              {exp.icon}
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                {exp.role}
                              </h2>
                              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                                {exp.company}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Period & Duration */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${colors.bg} text-white shadow-md`}>
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600">
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {exp.duration}
                          </span>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-3 mb-6">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start text-gray-700 dark:text-gray-200">
                              <svg className={`w-5 h-5 ${colors.text} mr-3 flex-shrink-0 mt-1`} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              <span className="leading-relaxed text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-white/80 dark:bg-gray-800/80 rounded-lg text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600 shadow-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Educação Section */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Educação
            </h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Bacharelado em Análise e Desenvolvimento de Sistemas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  Universidade Estácio de Sá
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">2022 – 2024</p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Curso de Programação PHP e Node.js
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">DevMedia</p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">2021 – 2022</p>
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Certificações e Cursos Complementares
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Curso de Programação PHP e Node.js – DevMedia (2022)",
                "AWS Cloud Practitioner (em andamento)",
                "Docker Essentials & Kubernetes – Udemy (2023)",
                "Terraform e Ansible na Prática – Udemy (2024)",
                "Linux Server Administration – Coursera (2024)"
              ].map((cert, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-4 rounded-lg border border-cyan-200 dark:border-cyan-700 flex items-start"
                >
                  <svg
                    className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mr-3 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-200">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 