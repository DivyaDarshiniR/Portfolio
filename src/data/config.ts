const config = {
  title: "Divya Darshini R | Full-Stack Developer",
  description: {
    long: "Portfolio of Divya Darshini R, a software engineering student and full-stack developer building secure, production-style web applications with React, Node.js, Python, and FastAPI.",
    short:
      "Divya Darshini R is a full-stack developer focused on thoughtful, secure web applications and AI-powered tools.",
  },
  keywords: [
    "Divya Darshini R",
    "full-stack developer",
    "software engineering student",
    "React",
    "Node.js",
    "Python",
    "FastAPI",
    "AI",
    "portfolio",
  ],
  author: "Divya Darshini R",
  email: "divyadarshiniramesh44@gmail.com",
  // Set NEXT_PUBLIC_SITE_URL in Vercel to your production URL.
  site: process.env.NEXT_PUBLIC_SITE_URL || "https://divyadarshiniram.github.io",

  githubUsername: "DivyaDarshiniR",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/divya-darshini-ramesh-253694327/",
    github: "https://github.com/DivyaDarshiniR",
  },
};
export { config };
