import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
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
    'Hi, My name is Tarius Bray and i recently found a passion for building web applications. Im comftorable working with front end technologies such as HTML, CSS, and JS(Typescript). I have also been using java for 3+ years professionaly.',
  paragraphTwo:
    'I have worked as a QA engineer for 4 years, mostly writing automation test suites using java. Currently im seeking to leaverage my strong knowledge/experience in quality and user experience to develop high quality software. Check out some of my latest work below. ',
  paragraphThree:
    'Check out some of my latest work below. Please dont hesitate to reach out if my skills align with your business needs.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Angular NBA cards Application ',
    info:
      'In my spare time i really enjoy watching NBA Basketball, So i decided to start working on this NBA Cards application. The application fetches NBA data from an external api and displays the data as cards.',
    info2: 'Tech Stack- Angular(HttpClientModule), HTML, CSS, GIT',
    url: 'https://nbacards-ng.netlify.app',
    repo: 'https://github.com/tbray1/NBACards_AngularApp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Angular Covid-19 Application ',
    info:
      'Unfortunately coronavirus has had a profound impact on the lives of hundreds of millions of people, while learning Angular i decided to build this application that provides the latest covid-19 statisitcs globally as well as nationally. The data is fetched from an external API and displayed in charts and graphs.',
    info2: 'Tech Stack- Angular(HttpClientModule, Angular Router), HTML, CSS, GIT',
    url: 'https://covid-19ng.netlify.app/',
    repo: 'https://github.com/tbray1/Ng_CovidTracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'Portfolio Project',
    info:
      'For this portfolio project i used a gatsby starter built using react, i tweaked the styling to suit my personal needs',
    info2: 'gatsby, sass, git',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
