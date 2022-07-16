import React from 'react';

function Projects() {
    return (
        <section id="projects-me" class="container pt-6">
            <article>
                <h2 class="title">Projects</h2>

                <div class="columns is-flex-wrap-wrap is-justify-content-center">
                    <div class=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Act like you know it</p>
                        <img
                            src={require(`../../Assets/Images/Project images/act like you been there.jpg`)}
                            alt="project 1"
                            className="image-box"
                        />
                    </div>
                    <div class=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Work Day Schedular</p>
                        <img
                            src={require(`../../Assets/Images/Project images/Work day schedular.jpg`)}
                            alt="project 1"
                            className="image-box"
                        />

                    </div>
                    <div class=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Run Buddy</p>
                        <img
                            src={require(`../../Assets/Images/Project images/Run buddy.jpg`)}
                            alt="project 1"
                            className="image-box"
                        />

                    </div>
                    <div class=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Weaather Dashboard</p>
                        <img
                            src={require(`../../Assets/Images/Project images/Weather Dashboard.jpg`)}
                            alt="project 1"
                            className="image-box"
                        />
                    </div>
                    <div class=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Password Generator</p>
                        <img
                            src={require(`../../Assets/Images/Project images/password generator.jpg`)}
                            alt="project 1"
                            className="image-box"
                        />
                    </div>
                    <div class=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Password Generator</p>
                        <img
                            src={require(`../../Assets/Images/Project images//ChatApp Live.jpg`)}
                            alt="project 1"
                            className="image-box"
                        />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Projects;