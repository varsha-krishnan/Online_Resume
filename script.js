// About Me
document.getElementById("name").textContent = "Karpagam Gopalakrishnan";
document.getElementById("photo").src = "my_photo.jpeg";
document.getElementById("description").textContent = "I am a full stack developer turned data analyst with a strong background in mathematics. During my career transition, I developed a passion for working with data and leveraging it to drive meaningful insights and decision-making. As a data analyst, I have experience in data cleaning, data visualization, statistical analysis, and creating data-driven reports. I am skilled in programming languages like Python and SQL, and have expertise in tools such as Excel, Tableau, and Power BI. I am constantly eager to learn and apply new techniques and technologies to extract valuable information from complex datasets.";

// Experience
const experienceList = document.getElementById("experience-list");
const experienceData = [
  {
    title: "Data Analyst",
    company: "Arcadia",
    location: "Chennai, TamilNadu",
    date: "2023 - Present",
    responsibilities: [
      "Perform data cleaning and preprocessing tasks to ensure data quality and accuracy.",
      "Develop interactive dashboards and visualizations to present data insights using Tableau and Power BI.",
      "Conduct statistical analysis on large datasets to identify patterns and trends.",
      "Automate Root Cause Analysis (RCA) for Zendesk tickets to identify underlying issues and improve ticket resolution time.",
      "Collaborate with cross-functional teams to deliver data-driven solutions and recommendations."
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Ahaguru Education Technology",
    location: "Chennai, TamilNadu",
    date: "2021 - 2023",
    responsibilities: [
      "Developed and maintained web applications using HTML, CSS, JavaScript, and React.js.",
      "Implemented RESTful APIs to facilitate data exchange between the front-end and back-end.",
      "Collaborated with the design team to create user-friendly interfaces and responsive layouts.",
      "Participated in code reviews and performed debugging and testing to ensure application reliability and performance."
    ]
  }
];

experienceData.forEach((experience) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <h3>${experience.title}</h3>
    <p>${experience.company}, ${experience.location}</p>
    <p>${experience.date}</p>
  `;

  const responsibilitiesList = document.createElement("ul");
  experience.responsibilities.forEach((responsibility) => {
    const responsibilityItem = document.createElement("li");
    responsibilityItem.textContent = responsibility;
    responsibilitiesList.appendChild(responsibilityItem);
  });

  listItem.appendChild(responsibilitiesList);
  experienceList.appendChild(listItem);
});

// Education
const educationList = document.getElementById("education-list");
const educationData = [
  {
    degree: "Bachelor of Science in Mathematics",
    university: "MOP Vaishnav College For Women",
    location: "Chennai",
    date: "2016 - 2019"
  },
  {
    degree: "Masters in Mathematics",
    university: "Ethiraj College For Women",
    location: "Chennai",
    date: "2019 - 2021"
  },
  {
    degree: "Executive Diploma in Business Analytics",
    university: "Loyola Institute of Business Administration",
    location: "Chennai",
    date: "2021 - 2022"
  }
];

educationData.forEach((education) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <h3>${education.degree}</h3>
    <p>${education.university}, ${education.location}</p>
    <p>${education.date}</p>
  `;
  educationList.appendChild(listItem);
});

// Certifications
const certificationsList = document.getElementById("certifications-list");
const certificationsData = [
  {
    name: "Google Advanced Data Analytics - Coursera",
    link: "https://coursera.org/share/c4cd2033d6bce413ff946419bed5ca87"
  },
  {
    name: "Google Data Analytics - Coursera",
    link: "https://coursera.org/share/c83d0cd361521cb87390ed97dc1e091d"
  },
  {
    name: "SQL for Data Analysis",
    link: "https://www.udemy.com/certificate/UC-cd3c8e51-8dc7-4d29-91c0-fa036a3b2f3b/"
  },
  {
    name: "Full Stack Development with Django",
    link: "https://www.udemy.com/certificate/UC-a258e968-559e-4011-8213-cc71379cb0e0/"
  },
  {
    name: "Python for Data Science and Machine Learning Bootcamp",
    link: "https://www.udemy.com/certificate/UC-59b7a44d-3378-4c30-b654-80f8325b1e93/"
  }
];

certificationsData.forEach((certification) => {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.href = certification.link;
  link.target = "_blank";
  link.textContent = certification.name;
  listItem.appendChild(link);
  certificationsList.appendChild(listItem);
});

// Skills
const skillsList = document.getElementById("skills-list");
const skillsData = [
  "Data Analysis",
  "Data Visualization",
  "Statistical Analysis",
  "Python",
  "SQL",
  "Tableau",
  "Power BI",
  "HTML",
  "CSS",
  "JavaScript",
  "React.js"
];

skillsData.forEach((skill) => {
  const listItem = document.createElement("li");
  listItem.textContent = skill;
  skillsList.appendChild(listItem);
});

// Hobbies
const hobbiesList = document.getElementById("hobbies-list");
const hobbiesData = [
  "Coding and Exploring new AI technologies",
  "Badminton",
  "Cricket"
];

hobbiesData.forEach((hobby) => {
  const listItem = document.createElement("li");
  listItem.textContent = hobby;
  hobbiesList.appendChild(listItem);
});

  