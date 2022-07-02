import subsSS from "./subsSS.png";
import anime from "./anime.png";
import ourweb from "./ourweb.jpeg";
import cocktails from "./cocktails.png";
import ScheduleDemo from "./ScheduleDemo.png";

export const projectInfo = [
  {
    projectNo: "project 1",
    commits: "37 Commits",
    name: "OurWeb - Personal Blog",
    img: ourweb,
    description:
      "OurWeb is my personal blog website which I made from scratch. I share valuable articles on topics that I come across during my coding journey. This site is fully SEO optimized with tons of features.",
    listDescription: [
      "Static Site Rendering",
      "Fully SEO Optimized",
      "Markdown and Syntax Highlighting (Using mdx and rehype)",
      "NextJs, Tailwind, MDX, Cloudinary, Mail Chimp",
    ],
    featuresImplemented: [
      "Static site rendering using NextJS.",
      "Serving optimized images via cloudnary CDN.",
      "Keeping Mailing list to send updated via mail to the subscribers",
      "Share blog to social media like Twitter, Facebook, Whatsapp, LinkedIn, Reddit.",
      "Added Sitemap at https://www.ourweb.blog/sitemap.xml",
      "Added robots.txt at https://www.ourweb.blog/robots.txt",
      "Custom SEO component with all the important meta tags.",
      "Content clustering by implementing related post components.",
      "Markdown using React Markdown.",
      "Code syntax highlighting.",
      "Debouncing for the searchBlog Component.",
      "Light and Dark mode switch.",
      "Structured Data for JSON-LD",
      "Integrated Google Analytics",
    ],
    techUsed: [
      "NextJS",
      "Tailwind",
      "MDX",
      "Cloudinary",
      "Mailchimp",
      "Fuse.js",
      "Rehype Plugins",
    ],
    redmeUrl: "https://github.com/DurgeshKr2242/personal-blog#readme",
    githubUrl: "https://github.com/DurgeshKr2242/personal-blog",
    liveUrl: "https://ourweb.vercel.app/",
  },
  {
    projectNo: "project 2",
    commits: "9 Commits",
    name: "Schedule a Demo",
    img: ScheduleDemo,
    description:
      "This is a Custom Schedule Calendar component for scheduling a demo. We may choose a date and time, then enter our personal details and book our demo. This project primarily displays a custom calendar component that I created from scratch using just logic and, of course, javascript. This data is not saved anywhere, and this project is purely for demonstration purposes.",
    listDescription: [
      "Custom calendar component from scratch",
      "Time picker",
      "Personal info input with validation check",

      "NextJs, Tailwind",
    ],
    featuresImplemented: [
      "Custom calendar component from scratch. No external libraries are used.",
      "Separate section to choose a specific time span for demo.",
      "Input validation for Name, Email, and Password field. (Note: Any validation can be used. Here I have used standard regex validation for email and password.)",
    ],
    techUsed: ["NextJS", "Tailwind"],
    redmeUrl:
      "https://github.com/DurgeshKr2242/custom-schedule-calendar#readme",
    githubUrl: "https://github.com/DurgeshKr2242/custom-schedule-calendar",
    liveUrl: "https://custom-schedule-calendar.vercel.app/",
  },
  {
    projectNo: "project 3",
    commits: "26 Commits",
    name: "Subscription Tracker",
    img: subsSS,
    description:
      "SUBS (short for Subscription) is a progressive web app that lets you track all your subscriptions. You can even keep a track of all the people you shared your subscriptions with.",
    listDescription: [
      "Progressive Web App",
      "Perfect lighthouse score",
      "Dark/Light mode switch",
      "MERN, NextJs, Tailwind, Framer and Firebase",
    ],
    featuresImplemented: [
      "Light/dark mode toggle using TailwindCSS",
      "Progressive Web App - Can be installed as a native app on any device.",
      "Perfect Lighthouse Score of 100",
      "Offline Support",
      "Live previews",
      "Fullscreen mode",
      "Cross platform",
    ],
    techUsed: [
      "NextJS",
      "Tailwind",
      "NodeJs",
      "Express Js",
      "Mongoose",
      "MongoDB Atlas",
      "Firebase",
      "Framer Motion",
      "Axios",
      "React Toastify",
    ],
    redmeUrl: "https://github.com/DurgeshKr2242/Subscription-Tracker#readme",
    githubUrl: "https://github.com/DurgeshKr2242/Subs-Tracker-Backend",
    liveUrl: "https://subscriptions-tracker.vercel.app/",
  },
  {
    projectNo: "project 4",
    commits: "21 Commits",
    name: "Hold My Anime",
    img: anime,
    description:
      "Why hold my beer when you can Hold My Anime! Social media for all the Anime lovers out there. You can post reviews on your latest watch along with your rating, your fav character, your favourite quote and many more.",
    listDescription: [
      "Realtime CRUD application",
      "Integration of comments feature",
      "MERN, MUI, Firebase and JikanAPI",
    ],
    featuresImplemented: [
      "Proper Authentication (Will be adding Google SignIn option soon)",

      "Can create a post.",

      "Can delete and edit the post created by you.",

      "Can comment on the post (only when you are logged in)",

      "Right Sidebar shows all the top anime. You can select from the different categories (Popularity, Upcoming, Airing, OVA, Movie and Many More). You can also select the total number of results to show for each category (ranges from 0 - 50 for each category)",

      "Seperate route where you can search for any anime out there with range slider and pagination",
    ],
    techUsed: [
      "CSS Flex-box & Grid",
      "React Hooks",
      "React Router",
      "MUI",
      "React Icons",
      "Jikan Api",
      "Axios",
      "Firebase Firestore",
      "Firebase Storage",
      "Firebase Authentication",
      "Deployed on Netlify",
    ],
    redmeUrl: "https://github.com/DurgeshKr2242/hold-my-anime/tree/dev#readme",
    githubUrl: "https://github.com/DurgeshKr2242/hold-my-anime/tree/dev",
    liveUrl: "https://holdmyanime.netlify.com/",
  },
  // {
  //   projectNo: "project 5",
  //   commits: "129 Commits",
  //   name: "Cocktails Website",
  //   img: cocktails,
  //   description:
  //     "Cocktails website to display list of all the cocktails along with their details. Developed using cocktails DB api. ",
  //   listDescription: [
  //     "Api integration with Error handling",
  //     "Loading spinner ",
  //     "ReactJS, React Router, Context API",
  //   ],
  //   featuresImplemented: [
  //     "Static site rendering using NextJS.",
  //     "Serving optimized images via cloudnary CDN.",
  //     "Keeping Mailing list to send updated via mail to the subscribers",
  //     "Share blog to social media like Twitter, Facebook, Whatsapp, LinkedIn, Reddit.",
  //     "Added Sitemap at https://www.ourweb.blog/sitemap.xml",
  //     "Added robots.txt at https://www.ourweb.blog/robots.txt",
  //     "Custom SEO component with all the important meta tags.",
  //     "Content clustering by implementing related post components.",
  //     "Markdown using React Markdown.",
  //     "Code syntax highlighting.",
  //     "Debouncing for the searchBlog Component.",
  //     "Light and Dark mode switch.",
  //     "Structured Data for JSON-LD",
  //     "Integrated Google Analytics",
  //   ],
  //   techUsed: [
  //     "NextJS",
  //     "Tailwind",
  //     "MDX",
  //     "Cloudinary",
  //     "Mailchimp",
  //     "Fuse.js",
  //     "Rehype Plugins",
  //   ],
  //   redmeUrl: "https://github.com/DurgeshKr2242/cocktails#readme",
  //   githubUrl: "https://github.com/DurgeshKr2242/cocktails",
  //   liveUrl: "https://cocktails-11.netlify.app/",
  // },
];
