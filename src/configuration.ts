import profile from "./assets/me.jpg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/damianpumar",
    icon: "i-github",
    header: true,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/damianpumar",
    icon: "i-twitter",
    header: true,
  },
  {
    name: "Blsky",
    url: "https://bsky.app/profile/damianpumar.hf.co",
    icon: "i-bsky",
    header: true,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/damianpumar/",
    icon: "i-linkedin",
    header: true,
  },
  {
    name: "Sessionize",
    url: "https://sessionize.com/damianpumar",
    icon: "i-sessionize",
    header: false,
  },
  { name: "RSS", url: "/feed.xml", icon: "i-rss", header: false },
];

export const personal = {
  name: "Damián Pumar",
  profile: profile,
  email: "pumar@duck.com",
  titles: [
    "🏗️ Software Architect ~ 🧮 Software Engineer",
    "🥋 Software Craftsman ~ 🎤 Speaker",
  ],
  work: [
    {
      name: "Technical coach",
      at: "@CodeScouts",
      web: "https://codescouts.academy/",
    },
    {
      name: "Building 🤖 AI tools",
      at: "@Hugging Face",
      web: "https://huggingface.co/",
    },
  ],
  location: "🇦🇷 Argentinean based in 🇪🇸 Spain",
  bio: `I'm a <span class="underline">Software Architect</span> and <span class="underline">Senior Software Developer</span> with over <span class="underline">15 years</span> of experience in the industry. My professional journey began in 2010. I am deeply passionate about software development and enjoy sharing my knowledge with others.  

I started my career as a Full-Stack Developer at <a href="https://neoris.com/" class="underline" target="_blank">@Neoris</a> and later worked as a Software Craftsman at <a href="https://www.codurance.com/" class="underline" target="_blank">@Codurance</a>.  

Currently, my primary focus is on <span class="underline">frontend architecture</span>, where I design components that enhance the simplicity, reusability, and scalability of web applications, such as <a href="https://github.com/damianpumar/ts-injecty" class="underline" target="_blank">ts-injecty</a>. I am also an active speaker at various conferences and meetups.`,
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

};

export const navigationItems = [
  { name: "Home", url: "/", mobile: false },
  { name: "Events", url: "/events/", mobile: true },
  { name: "Courses", url: "/courses/", mobile: true },
  { name: "Blog", url: "/blog/", mobile: false },
  { name: "Contact", url: `mailto:${personal.email}`, mobile: false },
];
