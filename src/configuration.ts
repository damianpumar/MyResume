import profile from "./assets/me.jpg";

export const personal = {
  name: "Damián Pumar",
  profile: profile,
  email: "pumar@duck.com",
  titles: [
    "🏗️ Software Architect ~ 🧮 Software Engineer",
    "🥋 Software Craftsman ~ 🎤 Speaker",
  ],
  bio: `I'm a <span class="underline">Software Architect</span> and <span class="underline">Sr. software developer</span> with more than <span class="underline">13 years</span> of experience
    in the industry. I started to work professionally at 2010. I'm a passionate about software development and I love
    sharing my knowledge with others.
    I started my career as a fullstack developer <a href="https://neoris.com/" class="underline" target="_blank">@Neoris</a> after that I worked as a Software Craftsman <a href="https://www.codurance.com/" class="underline" target="_blank">@Codurance</a>.
    Today, I'm mainly focussed on <span class="underline">frontend architecture</span> designing components to make more easy, reusable and scalable web applications like <a href="https://github.com/damianpumar/ts-injecty" class="underline" target="_blank">ts-injecty</a>. I'm also Speaker in different conferences and meetups.`,
  live: {
    where: "Spain",
    image: "🇪🇸",
  },
  born: {
    where: "Argentina",
    image: "🇦🇷",
  },
  love: {
    topics: [
      { name: "Software Architecture" },
      { name: "Design patterns" },
      { name: "TDD" },
    ],
    technologies: [
      { name: "Nuxt", url: "https://nuxt.com/" },
      { name: "Node", url: "https://nodejs.org/" },
      { name: "Typescript", url: "https://www.typescriptlang.org/" },
      { name: "React", url: "https://reactjs.org/" },
      { name: "Qwik", url: "https://qwik.builder.io/" },
      { name: "Next", url: "https://nextjs.org/" },
      { name: "Go lang", url: "https://go.dev/" },
      { name: "Vue", url: "https://vuejs.org/" },
      { name: "Azure", url: "https://azure.microsoft.com" },
      { name: "Docker", url: "https://www.docker.com" },
      { name: "Vite", url: "https://vitejs.dev/" },
      { name: "Playwright", url: "https://playwright.dev/" },
    ],
    openSource: [
      { name: "Argilla", url: "https://github.com/argilla-io/argilla" },
      { name: "Ts-injecty", url: "https://github.com/damianpumar/ts-injecty" },
      { name: "Svelte", url: "https://github.com/sveltejs/svelte" },
      { name: "R2wc", url: "https://github.com/damianpumar/r2wc" },
    ],
  },
  work: [
    {
      name: "Technical coach",
      at: "@CodeScouts",
      web: "https://www.codescouts.academy/",
    },
    {
      name: "Lead Frontend Engineer",
      at: "@Argilla",
      web: "https://argilla.io/",
    },
  ],
};

export const navigationItems = [
  { name: "Home", url: "/", mobile: false },
  { name: "Blog", url: "/blog/", mobile: true },
  { name: "Events", url: "/events/", mobile: true },
  { name: "Contact", url: `mailto:${personal.email}`, mobile: false },
];
