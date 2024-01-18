import ProjectCard from "./ProjectCard";
import { Container, Typography, Grid } from "@mui/material";

const ProjectsList = ({ projectsData }) => {
  return (
    <Container>
      <Typography variant="h4" component="div" sx={{ marginTop: 2 }}>
        My Projects
      </Typography>
      <Typography variant="body1" component="div" sx={{ marginTop: 2 }}>
        Here are some of the projects I have worked on. Click on each project to
        learn more.
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {projectsData.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectsList;
