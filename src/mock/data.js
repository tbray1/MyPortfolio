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
    "Hi, My name is Tarius Bray and I'm currently seeking software developement oppurtunitites.I'm comfortable working with front end technologies such as HTML, CSS, JS, ReactJS, and NextJS. I also have foundational knowledge of server side technologies such as NodeJS, Express, and SpringBoot, ",
  paragraphTwo:
    'I have over 4 years of industy experience at a fortune 50 healthcare company as a QA engineer on an Agile Scrum team , writing Behavior driven(BDD) automation test suites using java(selenium,restassured, Junit), SQL and cucumber to perform front and back end testing for complex web applications .',
  paragraphThree:
    "In my spare time I'm easy going, I enjoy spending time with family, playing video games and watching sports. Please check out some of my latest work below and dont hesitate to reach out if you are looking for a team first, self-starting, even-keeled developer to join your team",
  // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nextSports.png',
    title: 'Next Sports ',
    info:
      'Next Sports is an app made for sports fans, With help of NextJS and TailwindCSS the app serves as a simple and efficient way for fans to keep up with their favorite teams on any device . The app features teams from professional american sports leagues(NBA, NFL, NHL, MLB, MLS). Users can select their favorite team to see valuable info such as there recent games, upcoming games and the team roster which is all fetched from the sports db api. ',
    info2: 'Tech Stack- NextJS(SSR), TailwindCSS, Vercel, GIT',
    url: 'https://next-sports-ten.vercel.app/',
    repo: 'https://github.com/tbray1/NextSports',
  },
  {
    id: nanoid(),
    img: 'coach.png',
    title: 'Coach Office ',
    info:
      ' Full Stack MERN App that allows basketball coaches to register and manage their roster on the go',
    info2: 'Tech Stack- ReactJS(Hooks, Context, Router),NodeJS, Express, MongoDB, CSS, GIT',
    url: 'https://desolate-citadel-76015.herokuapp.com/',
    repo: 'https://github.com/tbray1/CoachOffice',
  },
  {
    id: nanoid(),
    img: 'winewithamber.png',
    title: 'Wine With Amber ',
    info:
      'This website was developed for wine tasting host to showcase her services as well as book new clients ',
    info2: 'Tech Stack- HTML, TailwindCSS, JavaScript',
    url: 'https://winewithamber.com',
    repo: '',
  },

  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Wikipedia Search App ',
    info:
      'This application takes user input and fetches data from Wikipedia api based on the given input.',
    info2: 'Tech Stack- ReactJS(Functional Components, Hooks, JSX, SASS, GIT',
    url: 'https://wikipedia-searchapp.netlify.app',
    repo: 'https://github.com/tbray1/WikipediaSearch', // if no repo, the button will not show up
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
