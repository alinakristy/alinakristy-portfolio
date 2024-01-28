import { useParams, Navigate } from 'react-router-dom'
import projects from '../data/projects.json';

function Project() {
    const { id } = useParams();
    const project = projects.find(project => project.id == id)

    if (project == undefined) {
        return <Navigate to='/not-found' replace />;
    }

    return <section id="project">
        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <img src={project.image} className="img-fluid" alt="my image" />
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 content my-2">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="d-flex justify-content-center my-3">
                        <a className="btn btn-primary btn-lg mx-2" href={project.deployed_url}>View Demo</a>
                        <a className="btn btn-primary btn-lg mx-2" href={project.github_url}>Source Code</a>
                    </div>
                </div>
            </div>

        </div>
    </section>
}

export default Project;