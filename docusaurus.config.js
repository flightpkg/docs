/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const [latestVersion] = require("./versions.json");

module.exports = {
  title: "flightpkg",
  tagline: "The only package manager you will ever need.",
  url: "https://flightpkg.js.org/",
  baseUrl: "/",
  favicon: "https://github.com/flightpkg.png",
  organizationName: "flightpkg",
  projectName: "flight",
  themeConfig: {
    navbar: {
      title: "flightpkg",
      logo: {
        alt: "flightpkg Logo",
        src: "/img/logo-white.svg"
      },
      items: [
        {
          to: "versions",
          label: `v${latestVersion}`,
          position: "left",
          style: {
            whiteSpace: "nowrap",
            padding: "0.25rem 0.5rem 0.2rem 0.25rem",
            fontSize: "calc(0.9 * var(--ifm-font-size-base))",
            textDecoration: "underline"
          }
        },
        {
          to: "docs/introduction/getting-started",
          label: "Docs",
          position: "left"
        },
        {
          href: "https://www.npmjs.com/package/@flightpkg/cli",
          label: "Npm",
          position: "right"
        },
        {
          href: "https://github.com/flightpkg/flight",
          label: "Github",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      // logo: { alt: "Open Source Logo", src: "/static/img/open-source.svg" },
      copyright: `Copyright © ${new Date().getFullYear()} flightpkg.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
        },
        theme: {
          customCss: require.resolve("./src/styles/global.css")
        }
      }
    ]
  ]
};
