/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_INTERNAL_API_TIMEOUT: process.env.NEXT_PUBLIC_INTERNAL_API_TIMEOUT,
  },
}
