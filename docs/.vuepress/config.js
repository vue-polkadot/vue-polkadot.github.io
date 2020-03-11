module.exports = {
  base: '/',
  title: 'KodaDot',
  description: 'VueJS utilities, libraries and Vue components in use across Polkadot and Substrate projects',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: 'Follow us on Twitter', link: 'https://twitter.com/KodaDot' },
      { text: 'Project family', link: 'https://polkadot.js.org/' },
      {
        text: 'Documentation',
        items: [
          { text: 'API Reference', link: 'https://polkadot.js.org/api/' },
          { text: 'Utility Reference', link: 'https://polkadot.js.org/common/' },
          { text: 'UI Libs Reference', link: 'https://polkadot.js.org/ui/' },
          { text: 'VueJS Libs Reference', link: 'https://vue-polkadot.js.org/vue-ui/' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/vue-polkadot/vue-polkadot.github.io' }
    ],
    search: false,
    sidebar: [
      ['/','Apps'],
      ['/apps/Explorer/', 'Explorer'],
      ['/apps/Accounts/', 'Accounts'],
      ['/apps/Addressbook/', 'Addressbook'],
      ['/apps/Democracy/', 'Democracy'],
      ['/apps/Extrinsics/', 'Extrinsics'],
      ['/apps/Settings/', 'Settings'],
    ]
  }
};
