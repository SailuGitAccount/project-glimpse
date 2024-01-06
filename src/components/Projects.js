import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Main.css";

const projectsData = [
  {
    id: 1,
    title: "Digital Timer",
    description:
      "Digital timer showing time in hours, minutes, seconds and milliseconds. It has start, stop and reset functionalities incorporated.",
    path: "https://sailugitaccount.github.io/digital-timer/",
  },
  {
    id: 2,
    title: "Theater SeatSelection App",
    description: "This app allows us to select seats in a movie theater",
    path: "https://SailuGitAccount.github.io/movie-seats-app",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <Container>
        <Typography variant="h4" component="div" sx={{ marginTop: 2 }}>
          My Projects
        </Typography>
        <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
          Here are some of the projects I have worked on. Click on each project
          to learn more.
        </Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {projectsData.map((project) => (
            <Grid item key={project.id} xs={12} sm={6} md={4}>
              <Link to={project.path} target="_blank" rel="noreferrer">
                <Card>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>Description:</b>
                        <br />
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Projects;
