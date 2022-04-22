/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}


module.exports = nextConfig
