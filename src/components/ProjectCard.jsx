import { NavLink } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {

    function getProjectUrl() {
        return "/project/" + props.id;
    }

    return (
        <Card className="my-3 mx-3">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Body className="w-100">
                <NavLink className="btn btn-primary btn-lg w-100" to={getProjectUrl()} end>More info</NavLink>
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;