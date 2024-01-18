import React from "react";
import ProjectsList from "./ProjectsList";
import "./Main.css";

const projectsData = [
  {
    id: 1,
    title: "Digital Timer",
    description:
      "Digital timer showing time in hours, minutes, seconds and milliseconds. It has start, stop and reset functionalities incorporated.",
    path: "https://sailugitaccount.github.io/digital-timer/",
    githubPath: "https://github.com/SailuGitAccount/digital-timer",
  },
  {
    id: 2,
    title: "Theater SeatSelection App",
    description: "This app allows us to select seats in a movie theater",
    path: "https://SailuGitAccount.github.io/movie-seats-app",
    githubPath: "https://github.com/SailuGitAccount/movie-seats-app",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <ProjectsList projectsData={projectsData} />
    </div>
  );
};

export default Projects;
