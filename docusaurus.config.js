module.exports = {
  title: "Ajuda com TI",
  tagline:
    "Tutoriais e dicas de computação/filmagem/internet para nossos professores, educadores e profissionais em geral que precisam ministrar suas aulas na quarentena e no futuro",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  projectName: "ajuda-com-ti",
  themeConfig: {
    navbar: {
      title: "Ajuda com TI",
      logo: {
        alt: "Ajuda com TI",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Tutoriais",
          position: "left",
        },
        { to: "blog", label: "Artigos", position: "left" },
        {
          href: "https://github.com/josecatalani/ajuda-com-ti",
          label: "Contribua!",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Sobre",
              to: "docs/",
            },
            {
              label: "Celular",
              to: "docs/celular/",
            },
          ],
        },
        {
          title: "Comunidade",
          items: [
            {
              label: "Github",
              href: "https://github.com/josecatalani/ajuda-com-ti",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/ajuda-com-ti",
            },
          ],
        },
        {
          title: "Mais",
          items: [
            {
              label: "Neto Virtual",
              href: "https://www.facebook.com/virtualneto/",
            },
          ],
        },
      ],
      copyright: `Direitos abertos. Criado com Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "comecando",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
