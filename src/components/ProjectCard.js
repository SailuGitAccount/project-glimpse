import { Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Link to={project.path} style={{ textDecoration: "none" }}>
            <Typography gutterBottom variant="h6" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <b>Description:</b>
              <br />
              {project.description}
            </Typography>
          </Link>
          <Link
            to={project.githubPath}
            target="_blank"
            style={{ textDecoration: "none", display: "block" }}
          >
            <Typography variant="body2" color="text.secondary">
              <b>GitHub Link</b>
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
