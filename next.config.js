/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
};

module.exports = {
  ...nextConfig,
  experimental: {
    optimizePackageImports: [
      '@mui/icons-material',
      '@mui/material'
    ],
  },
};