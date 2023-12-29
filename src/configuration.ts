import profile from "./assets/me.jpg";

export const personal = {
  name: "Damián Pumar",
  profile: profile,
  titles: [
    "🏗️ Software Architect ~ 🧮 Software Engineer",
    "🥋 Software Craftsman ~ 🎤 Speaker",
  ],
  bio: {
    first: `
    I'm a <span class="underline">Software Architect</span> and <span class="underline">Sr. software developer</span> with more than <span class="underline">13 years</span> of experience
    in the industry I started to work professionally at 2010. I'm a passionate about software development and I love
    sharing my knowledge with others. I'm a big fan of open source and I
    contribute to different projects in my free time. I love to learn new things and I'm always looking for new challenges, mostly related to design patterns, dependency injection, software design with TDD and love write clean code.`,
    second: `I started my career as a fullstack developer <a href="https://neoris.com/" class="underline" target="_blank">@Neoris</a> after that I worked as a Software Craftsman <a href="https://www.codurance.com/" class="underline" target="_blank">@Codurance</a>`,
    third: `Today, I'm mainly focussed on frontend architecture designing components to make more easy, reusable and scalable the development of web applications like <a href="https://github.com/damianpumar/ts-injecty" class="underline" target="_blank">ts-injecty</a> and also as speaker in different conferences`,
  },
  live: {
    where: "Spain",
    image: "🇪🇸",
  },
  born: {
    where: "Argentina",
    image: "🇦🇷",
  },
  doing: [
    { name: "Ts-injecty", url: "https://github.com/damianpumar/ts-injecty" },
    { name: "R2wc", url: "https://github.com/damianpumar/r2wc" },
    { name: "Nuxt", url: "https://nuxt.com/" },
    { name: "Node", url: "https://nodejs.org/" },
    { name: "Typescript", url: "https://www.typescriptlang.org/" },
    { name: "React", url: "https://reactjs.org/" },
    { name: "Qwik", url: "https://qwik.builder.io/" },
    { name: "Next", url: "https://nextjs.org/" },
    { name: "Go", url: "https://go.dev/" },
    { name: "Vue", url: "https://vuejs.org/" },
    { name: "Azure", url: "https://azure.microsoft.com" },
    { name: "Docker", url: "https://www.docker.com" },
    { name: "Vite", url: "https://vitejs.dev/" },
    { name: "Playwright", url: "https://playwright.dev/" },
  ],
};

export const work = [
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
];

export const navigationItems = [
  { name: "Home", url: "/" },
  // { name: "Blog", url: "/blog/" },
  { name: "Events", url: "/events/" },
];

export const social = [
  {
    name: "GitHub",
    url: "https://github.com/damianpumar",
    icon: "i-uil-github",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/damianpumar",
    icon: "i-uil-twitter",
  },
  { name: "RSS", url: "/feed.xml", icon: "i-uil-rss" },
];
