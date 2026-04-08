import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/field-work/",
  cleanUrls: false,
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
  markdown: {
    image: {
      lazyLoading: true,
    },
  },
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "Search",
                buttonAriaLabel: "Search documentation",
              },
            },
          },
          cn: {
            translations: {
              button: {
                buttonText: "搜索",
                buttonAriaLabel: "搜索文档",
              },
            },
          },
        },
        miniSearch: {
          options: {
            tokenize: (text: string) => {
              const lower = (text || "").toLowerCase();
              const wordTokens = lower
                .split(/[\s\p{P}\p{S}]+/gu)
                .filter(Boolean);
              const cjkTokens = Array.from(lower).filter((ch) =>
                /[\u4e00-\u9fff]/.test(ch)
              );
              return [...wordTokens, ...cjkTokens];
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: "English",
      link: "/",
      lang: "en-US",
      title: "Field Work Manual",
      description: "Debugging work instruction steps",
      themeConfig: {
        siteTitle: "Field Work Manual",
        nav: [
          {
            text: "Work Steps",
            link: "/manuals/steps/examination-of-the-appearance-and-structure.html",
            activeMatch: "^/manuals/steps/",
          },
        ],
        sidebar: {
          "/manuals/": [
            {
              text: "Work Steps",
              collapsed: false,
              items: [
                {
                  text: "1. Examination of the appearance and structure",
                  link: "/manuals/steps/examination-of-the-appearance-and-structure.html",
                },
                {
                  text: "2. Turn on the battery pack",
                  link: "/manuals/steps/turn-on-the-battery-pack.html",
                },
                {
                  text: "3. Start the inverter",
                  link: "/manuals/steps/start-the-inverter.html",
                },
                {
                  text: "4. Turn on all circuit breakers",
                  link: "/manuals/steps/turn-on-all-circuit-breakers.html",
                },
                {
                  text: "5. EMS deployment (1)",
                  link: "/manuals/steps/ems-deployment-1.html",
                },
                {
                  text: "6. EMS deployment (2)",
                  link: "/manuals/steps/ems-deployment-2.html",
                },
              ],
            },
          ],
        },
      },
    },
    cn: {
      label: "简体中文",
      link: "/cn/",
      lang: "zh-CN",
      title: "现场作业指导手册",
      description: "调试作业步骤说明",
      themeConfig: {
        siteTitle: "现场作业指导手册",
        nav: [
          {
            text: "作业步骤",
            link: "/cn/manuals/steps/wai-guan-jie-gou-jian-cha.html",
            activeMatch: "^/cn/manuals/steps/",
          },
        ],
        sidebar: {
          "/cn/manuals/": [
            {
              text: "现场作业指导手册",
              collapsed: false,
              items: [
                {
                  text: "1. 外观结构检查",
                  link: "/cn/manuals/steps/wai-guan-jie-gou-jian-cha.html",
                },
                {
                  text: "2. 开启电池包",
                  link: "/cn/manuals/steps/kai-qi-dian-chi-bao.html",
                },
                {
                  text: "3. 开启逆变器",
                  link: "/cn/manuals/steps/kai-qi-ni-bian-qi.html",
                },
                {
                  text: "4. 打开所有断路器",
                  link: "/cn/manuals/steps/da-kai-suo-you-duan-lu-qi.html",
                },
                {
                  text: "5. EMS部署 (1)",
                  link: "/cn/manuals/steps/ems-bu-shu-1.html",
                },
                {
                  text: "6. EMS部署 (2)",
                  link: "/cn/manuals/steps/ems-bu-shu-2.html",
                },
              ],
            },
          ],
        },
      },
    },
  },
});
