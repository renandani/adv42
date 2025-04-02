
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permite exportação estática
  images: {
    unoptimized: true, // Evita problemas com otimização de imagens
    domains: ['balaminut.com.br', 'www.balaminut.com.br', 'api-newsgc.s3.sa-east-1.amazonaws.com'],
  },
};

module.exports = nextConfig;




