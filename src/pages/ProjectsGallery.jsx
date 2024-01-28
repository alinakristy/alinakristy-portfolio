import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects.json';

function ProjectsGallery() {
    return <div className="container">
        <div className="row">
            <div className="d-flex justify-content-center flex-wrap">
                {projects.map((project) => {
                    return <ProjectCard key={project.id} id={project.id} title={project.title} description={project.description} image={project.image} url={project.deployed_url} />;
                })}
            </div>
        </div>
    </div>
}

export default ProjectsGallery;