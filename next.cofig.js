
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://178.253.42.15:path*' // Прокси к стороннему API
        },
      ]
    },
  }