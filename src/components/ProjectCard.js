import { Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
const ProjectCard = ({ project }) => {
  return (
    <Link to={project.path} target="_blank" style={{ textDecoration: "none" }}>
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
  );
};

export default ProjectCard;
