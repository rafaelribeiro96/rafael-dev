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
    if (!isServer) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[path][name].[hash:8].[ext]'
          },
        },
      });
    }

    return config;
  },
};

module.exports = nextConfig;
