// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'introduction' }
      ]
    },
    {
      type: 'category',
      label: 'Admin',
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'admin' }
      ]
    },
    {
      type: 'category',
      label: 'Sessions',
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'sessions' }
      ]
    },
    {
      type: 'category',
      label: 'Events',
      collapsed: false,
      items: [
        { type: 'autogenerated', dirName: 'events' }
      ]
    },
  ],

  proposalsSidebar: [
    { type: 'autogenerated', dirName: 'proposals' }
  ]
};

module.exports = sidebars;
