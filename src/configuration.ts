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
      { name: "Learning and Improving skills" },
      { name: "Cleaning code" },
      { name: "Refactoring" },
      { name: "Transpiling 🧉 to ⌨️" },
    ],
    technologies: [
      { name: "Rust", url: "https://github.com/rust-lang/rust" },
      { name: "Go", url: "https://github.com/golang/go" },
      { name: "Typescript", url: "https://github.com/microsoft/TypeScript" },
      { name: "C#", url: "https://github.com/dotnet/csharplang" },
      { name: "Node", url: "https://github.com/nodejs/node" },
      { name: "Qwik", url: "https://github.com/QwikDev/qwik" },
      { name: "React", url: "https://github.com/facebook/react" },
      { name: "Next", url: "https://github.com/vercel/next.js" },
      { name: "Vue", url: "https://github.com/vuejs/core" },
      { name: "Nuxt", url: "https://github.com/nuxt/nuxt" },
      { name: "Playwright", url: "https://github.com/microsoft/playwright" },
    ],
    openSource: [
      { name: "Argilla 🤖", url: "https://github.com/argilla-io/argilla" },
      {
        name: "Ts-injecty 💉",
        url: "https://github.com/damianpumar/ts-injecty",
      },
      { name: "Svelte ⏳", url: "https://github.com/sveltejs/svelte" },
      { name: "R2wc ⚛️", url: "https://github.com/damianpumar/r2wc" },
      { name: "Hono 🚀", url: "https://github.com/damianpumar/hono" },
    ],
  },
  work: [
    {
      name: "Technical coach",
      at: "@CodeScouts",
      web: "https://www.codescouts.academy/",
    },
    {
      name: "Building Argilla at 🤗",
      at: "HuggingFace",
      web: "https://huggingface.co",
    },
    {
      name: "Lead Frontend Engineer at 🚀",
      at: "Argilla",
      web: "https://argilla.io/",
    },
  ],
};

export const navigationItems = [
  { name: "Home", url: "/", mobile: false },
  { name: "Events", url: "/events/", mobile: true },
  { name: "Courses", url: "/courses/", mobile: true },
  { name: "Blog", url: "/blog/", mobile: false },
  { name: "Contact", url: `mailto:${personal.email}`, mobile: false },
];
