// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching Assistant experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is my CV in html form. If you prefer, you can download the pdf version above.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-no-regret-algorithms-in-non-truthful-auctions-with-budget-and-roi-constraints-accepted-to-www-2025",
          title: 'No-Regret Algorithms in non-Truthful Auctions with Budget and ROI Constraints accepted to WWW...',
          description: "",
          section: "News",},{id: "news-starting-this-semester-i-will-be-a-part-time-student-researcher-at-google-research",
          title: 'Starting this semester I will be a part-time Student Researcher at Google Research!...',
          description: "",
          section: "News",},{id: "news-online-resource-sharing-better-robust-guarantees-via-randomized-strategies-accepted-to-ijcai-2025",
          title: 'Online Resource Sharing: Better Robust Guarantees via Randomized Strategies accepted to IJCAI 2025!...',
          description: "",
          section: "News",},{id: "news-beyond-worst-case-online-allocation-via-dynamic-max-min-fairness-accepted-to-ec-2025",
          title: 'Beyond Worst-Case Online Allocation via Dynamic Max-min Fairness accepted to EC 2025!',
          description: "",
          section: "News",},{id: "news-learning-in-budgeted-auctions-with-spacing-objectives-accepted-to-ec-2025",
          title: 'Learning in Budgeted Auctions with Spacing Objectives accepted to EC 2025!',
          description: "",
          section: "News",},{id: "news-robust-equilibria-in-shared-resource-allocation-via-strengthening-border-s-theorem-accepted-to-soda-2026",
          title: 'Robust Equilibria in Shared Resource Allocation via Strengthening Border’s Theorem accepted to SODA...',
          description: "",
          section: "News",},{id: "news-robust-resource-allocation-via-competitive-subsidies-accepted-to-itcs-2026",
          title: 'Robust Resource Allocation via Competitive Subsidies accepted to ITCS 2026!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%67%66%69%6B%69%6F%72%69%73@%63%73.%63%6F%72%6E%65%6C%6C.%65%64%75", "_blank");
        },
      },{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/264/9493.html", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/GiannisFikioris", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-4920-478X", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=I7CqjFsAAAAJ", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/1693183038", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
