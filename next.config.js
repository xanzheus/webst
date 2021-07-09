module.exports = {
  async redirects() {
    return [
      {
        source: '/invite',
        destination: 'https://discord.com/oauth2/authorize?client_id=772497789561208872&permissions=1916267615&scope=bot',
        permanent: true,
    },
    {
        source: "/support",
        destination: 'https://discord.gg/u4RRQxxhkM',
        permanent: true,
     }
    ]
  },
}