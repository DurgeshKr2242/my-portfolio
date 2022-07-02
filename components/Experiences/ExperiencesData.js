const getMonthDifference = (startDate, endDate = "") => {
  startDate = new Date(startDate);
  endDate = endDate != "" ? new Date(endDate) : new Date();
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
};

export const EXPERIENCE_DATA = [
  {
    type: "Education",
    date: "2020 - 2024",
    position: "Computer Science and Engineering",
    company: "Kaling Institute Of Industrial Technology",
    details: ["Current CGPA : 9.1"],
  },
  {
    type: "Society",
    date: `Aug 2021 - Present · ${getMonthDifference("1 Aug 2021")} mos`,
    position: "Executive",
    company: "KIIT E-CELL",
    details: [
      "Developed the front-end of payment page for I-Camp(Internship Camp) -2022 and also aided in making the Student and Company dashboard.",
      "Worked with a team to develop the website for KSK (KIIT Startup Conclave) which is one of the flagship events of our college.",
      "As a Front-end React Developer currently redesigning the whole KIIT E-CELL website with a team in a very professional atmosphere.",
      "Worked as the coordinator aiding in the recruitment for new candidates for the E-Cell Tech team",
    ],
  },
  {
    type: "Programs",
    date: `Jan 2022 - Jun 2022 · ${getMonthDifference(
      "9 Jan 2022",
      "9 Jun 2022"
    )} mos`,
    position: "Developer Champ",
    company: "SAWO Labs",
    details: [
      "SAWO is the only user-authentication tool that your developers would crave for. Our APIs are fast, reliable, integrate onto any platform, and speak many languages. SAWO SDK acts as a hidden layer between your user and your platform, it's a magic layer which after a very fast integration is able to give you unmatched performance, you may wish to know about how this all flows from few lines of code to all solutions, thus let us take you through the journey.",
    ],
  },

  {
    type: "Programs",
    date: `Dec 2021 - Present · ${getMonthDifference("1 Dec 2021")} mos`,
    position: "Postman Student Expert",
    company: "Postman",
    details: [
      "Postman Student Experts are proficient in the essential skills involved in building and testing API requests in Postman.",
      "Build and successfully send requests in Postman using a variety of methods including GET, POST, PUT, and DELETE. Include query and path parameters, authorization, and body data in request.",
      "Added documentation for a collection.",
      "Wrote a basic test assertion script.",
    ],
  },

  {
    type: "Society",
    date: `Nov 2021 - Jun 2022 · ${getMonthDifference(
      "9 Nov 2021",
      "9 Jun 2022"
    )} mos`,
    position: "Web Developer",
    company: "DSC KIIT",
  },

  {
    type: "Internship",
    date: `Oct 2021 - Dec 2021 · ${getMonthDifference(
      "1 Oct 2021",
      "1 Jan 2022"
    )} mos`,
    position: "Web Developer",
    company: "Think Act Rise Foundation · Internship",
    details: [
      "Developed the entire backend for a web app using MongoDB Atlas, ExpressJs, and NodeJs. ",
      "Developed session-based authentication and authorization using JWT.",
      "Used Firebase Storage to store Images.",
      " Assisted the frontend team with conditional rendering in React.",
    ],
  },
  {
    type: "Society",
    date: `Sep 2021 - Feb 2022 · ${getMonthDifference(
      "7 Sep 2021",
      "8 Feb 2022"
    )} mos`,
    position: "Project Member (Web Developer)",
    company: "Microsoft Learn Student Ambassadors KiiT",
    details: [
      "Working together with a team of 7 individuals to develop a Chrome Extension that would make a REST API call, do NLP, and provide a summary of any YouTube video along with some useful insights.",
      "Tech Stack used : React Js, HTML, CSS, JavaScript, Mui, Python, Flask, NLP, SAWO Api",
    ],
  },
];
