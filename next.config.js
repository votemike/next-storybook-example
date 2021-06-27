module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/styleguide",
        destination: "/styleguide/index.html",
      },
    ];
  },
}
