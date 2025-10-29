export default function Experience() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Experiência Profissional</h1>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">DevOps Engineer | Freelancer</h2>
        <p className="text-gray-600">6 meses</p>
        <ul className="list-disc list-inside">
          <li>Configuração de pipelines CI/CD com GitHub Actions e GitLab CI</li>
          <li>Infraestrutura em AWS (EC2, S3, CloudFront, Route53)</li>
          <li>Containerização com Docker e orquestração com Kubernetes</li>
          <li>Monitoramento e logging de aplicações</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">Desenvolvedor Backend | Pleno</h2>
        <p className="text-gray-600">4 anos</p>
        <ul className="list-disc list-inside">
          <li>Desenvolvimento em PHP (Laravel), Python e JavaScript</li>
          <li>Criação de APIs REST e GraphQL</li>
          <li>Otimização de banco de dados MySQL/PostgreSQL</li>
        </ul>
      </div>
    </div>
  );
}