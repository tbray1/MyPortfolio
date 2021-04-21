import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tarius Bray', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tarius Bray',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 't.jpg',
  paragraphOne:
    'Hi, My name is Tarius Bray and I enjoy building high-quality web applications . Im comfortable working with a range of web technologies such as JavaScript, ReactJS, Java, HTML, HTML, and CSS.',
  paragraphTwo:
    'I have a deep engineering background as ive been working professionaly as a QA engineer for 5+ years testing complex enterprise web applications. I also have a masters degree in Software Engineering from Kennesaw State University(2020)',
  paragraphThree:
    'Check out some of my latest work below. Please dont hesitate to reach out if my skills align with your business needs.',
  // if no resume, the button will not show up
};
export const projectsData = [
  {
    id: nanoid(),
    img: 'sneaks.png',
    title: 'Sneaks Shopify Development Store ',
    info: 'password - 123',
    url: 'https://4ep34ey1sjym7tf7-56178868394.shopifypreview.com/',
  },
  {
    id: nanoid(),
    img: 'winewithamber.png',
    title: 'Website for Handcrafted Wine Maker ',
    info: 'Tech Stack- HTML, JS and Tailwind CSS ',
    url: 'https://winewithamber.com',
    repo: 'https://github.com/tbray1/WineWithAmber', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Wikipedia Search App ',
    info: 'Tech Stack- ReactJS, SASS, GIT',
    url: 'https://wikipedia-searchapp.netlify.app',
    repo: 'https://github.com/tbray1/WikipediaSearch', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'corona.png',
    title: 'Covid Tracker Project',
    info: 'Tech Stack- Angular, HTML, CSS',
    info2: '',
    url: 'https://covid-19ng.netlify.app/',
    repo: 'https://github.com/tbray1/Ng_CovidTracker/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'NBA cards Application ',
    info: '',
    info2: 'Tech Stack- ReactJS, JSX, CSS, GIT',
    url: 'https://nba-cards.netlify.app',
    repo: 'https://github.com/tbray1/NBA_Cards',
  },
];
// PROJECTS DATA

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tariusbray06@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tarius-bray-jr-325242100/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tbray1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
