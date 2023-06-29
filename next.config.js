module.exports = {
  async rewrites() {
    return [
      {
        source: "/learn/:id",
        destination: "/learn?id=:id",
      },
      {
        source: "/shop/:id",
        destination: "/shop?id=:id",
      },
    ];
  },
};
