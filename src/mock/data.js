import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tarius Bray', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
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
    'Hi, My name is Tarius Bray and I recently found a passion for building web applications. Im comfortable working with front end technologies such as ReactJS, HTML, CSS, and JS. I have also been using java for 3+ years professionaly.',
  paragraphTwo:
    'I have worked as a QA engineer for 4 years, mostly writing automation test suites using java.',
  paragraphThree:
    'Check out some of my latest work below. Please dont hesitate to reach out if my skills align with your business needs.',
  // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'NBA cards Application ',
    info:
      'In my spare time I really enjoy watching NBA Basketball, So I decided to start working on this NBA Cards application to make it easier for me to keep up with my favorite teams. The application fetches NBA data from an external api and displays the data as cards.',
    info2: 'Tech Stack- ReactJS(Hooks, functional components, axios), JSX, CSS, GIT',
    url: 'https://nba-cards.netlify.app',
    repo: 'https://github.com/tbray1/NBA_Cards',
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Wikipedia Search App ',
    info:
      'This application takes user input and fetches data from Wikipedia api based on the given input.',
    info2: 'Tech Stack- ReactJS(Functional Components, Hooks, JSX), SASS, GIT',
    url: 'https://wikipedia-searchapp.netlify.app',
    repo: 'https://github.com/tbray1/WikipediaSearch', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Portfolio Project',
    info:
      'For this portfolio project i used a gatsby starter built using react, i tweaked the styling to suit my personal needs',
    info2: 'gatsby, sass, git',
    url: 'tariusbray.com',
    repo: 'https://github.com/tbray1/MyPortfolio', // if no repo, the button will not show up
  },
];

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
