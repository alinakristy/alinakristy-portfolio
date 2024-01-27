import { NavLink } from "react-router-dom";

function Home() {
    return <div class="p-5 bg-body-tertiary rounded-3 jumbotron">
        <div class="container-fluid py-5 jumbotron-text">
            <h1 class="fs-1 fw-bold text-decoration-underline text-end text-white">Aspiring Web Dev</h1>
            <p class="col-md-12 fs-4 text-end text-white">Let's build something together</p>
            <NavLink className="btn btn-primary btn-lg jumbotron-button" to="/projects-gallery" end>View my Projects</NavLink>
        </div>
    </div>
}

export default Home;