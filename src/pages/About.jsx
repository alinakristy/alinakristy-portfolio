import myLogoImg from '../assets/img/my_img.jpg';

function About() {
    return <section id="about" className="about">
        <div className="container">

            <div className="section-title my-3">
                <h2>About</h2>
            </div>

            <div className="row">
                <div className="col-lg-4">
                    <img src={myLogoImg} className="img-fluid" alt="my image" />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content my-2">
                    <h3>Web Developer // Alina-Cristi Osipov</h3>
                    <div className="row my-3">
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Github 📚:</strong> <a href="https://github.com/alinakristy">@alinakristy</a></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Linkedin 📱:</strong> <a href="https://www.linkedin.com/in/alina-cristi-osipov/">@alina-cristi-osipov</a></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Location 📍:</strong> <a href="https://maps.app.goo.gl/wXaY9Y1svtopTUVR6">Newcastle upon Tyne, UK</a></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Email ✉️:</strong> <a href="mailto:alina.cristi12@gmail.com">alina.cristi12@gmail.com</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul>
                                <li><i className="bi bi-chevron-right"></i> <strong>Degree 🏫:</strong> <span>Bachelor degree</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Freelance 🛠️:</strong> <span>Available ✅</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Work 💻:</strong> <span>Ready to start ASAP</span></li>
                                <li><i className="bi bi-chevron-right"></i> <strong>Work Type 🖥️:</strong> <span>Remote or On-Site</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center my-3">
                        <a className="btn btn-primary btn-lg" href="https://github.com/alinakristy/alinakristy-portfolio/blob/main/src/assets/pdf/Alina%20-%20CV%20-%20Frontend-Dev.pdf">Click to view my CV</a>
                    </div>

                    <p>I am a graduate of the:</p>
                    <ol>
                        <li>Center of Excellence in Informatics and Informational Technologies(CEITI college) in Accounting.</li>
                        <li>University of European Studies(USEM) in Finance and Banks, Chisinau, Republic of Moldova.</li>
                    </ol>

                    <p>After graduating the college and university, I worked for 6 years in B.C Victoriabank S.A Chisinau, Moldova. During these working years I had the opportunity to work in different departments: department of transactions between natural persons , the department of bank cards, the department of deposits and savings accounts, the department of accounting and the department of legal entities. I loved my job but I also like challenges, so I decided to try something new and change my profession to Frontend Dev.
                    </p>
                </div>
            </div>

        </div>
    </section>
}

export default About;