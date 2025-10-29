export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              Felipe Figueiredo
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              DevOps Engineer / SRE
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Teixeira de Freitas - BA, Brasil
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="mailto:felipefigueiredosal@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
              >
                Entre em Contato
              </a>
              <a
                href="https://linkedin.com/in/felipegueiredo5"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resumo Técnico */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Resumo Técnico
            </h2>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                Profissional com experiência em desenvolvimento e infraestrutura, atuando como DevOps Engineer e SRE. 
                Possuo sólidos conhecimentos em <span className="font-semibold text-blue-600 dark:text-blue-400">Docker, Terraform, Ansible, AWS, Linux, CI/CD, Nginx, Apache</span> e 
                automação de ambientes. Tenho background em <span className="font-semibold text-blue-600 dark:text-blue-400">PHP, Python e JavaScript</span>, 
                o que me permite compreender todo o ciclo de desenvolvimento, desde o código até a entrega contínua e observabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resumo Estratégico */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
              Resumo Estratégico
            </h2>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                Sou um profissional apaixonado por automação, confiabilidade e performance de sistemas. 
                Atuo como DevOps Engineer / SRE, conectando desenvolvimento e operações para garantir entregas contínuas, 
                seguras e escaláveis. Meu foco é a construção de sistemas resilientes, sustentáveis e fáceis de manter, 
                aplicando infraestrutura como código, containers e observabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
            Competências Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-blue-200 dark:border-blue-700">
              <h3 className="text-xl font-bold mb-4 text-blue-900 dark:text-blue-300">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Terraform', 'Ansible', 'CI/CD', 'GitHub Actions', 'Nginx', 'Apache', 'Linux'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-green-200 dark:border-green-700">
              <h3 className="text-xl font-bold mb-4 text-green-900 dark:text-green-300">Linguagens</h3>
              <div className="flex flex-wrap gap-2">
                {['PHP', 'Python', 'JavaScript', 'Node.js', 'Bash'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-purple-200 dark:border-purple-700">
              <h3 className="text-xl font-bold mb-4 text-purple-900 dark:text-purple-300">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Laravel', 'Vue.js', 'React', 'Tailwind', 'Redis', 'PostgreSQL', 'MySQL', 'MongoDB'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-orange-200 dark:border-orange-700 md:col-span-2 lg:col-span-3">
              <h3 className="text-xl font-bold mb-4 text-orange-900 dark:text-orange-300">Princípios & Métodos</h3>
              <div className="flex flex-wrap gap-2">
                {['Scrum', 'Kanban', 'SOLID', 'Clean Code', 'TDD', 'IaC', 'Observabilidade', 'Automação'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-orange-600 text-white text-sm rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}