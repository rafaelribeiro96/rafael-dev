const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'scontent.cdninstagram.com', 'imgcentauro-a.akamaihd.net'],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  generateBuildId: async () => {
    return new Date().getTime().toString();
  },
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      // Configurações específicas para o lado do servidor (Node.js)
    } else {
      // Configurações específicas para o lado do cliente (Browser)
    }

    return config;
  },
};

module.exports = nextConfig;
