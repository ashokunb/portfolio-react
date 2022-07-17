import React from 'react';


function Projects() {
    return (
        <section id="projects-me" className="container pt-6">
            <article>
                <h2 className="title">Projects</h2>

                <div className="columns is-flex-wrap-wrap is-justify-content-center has-text-black">
                    <div className=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Act like you know it</p>
                        <a href='https://ashokunb.github.io/Act-LikeU-Been-There/'>
                        <img
                            src={require(`../../Assets/Images/Project images/act like you been there.jpg`)}
                            alt="project 1"
                            className="image-box img-resize"
                        /></a>
                    </div>
                    <div className=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Work Day Schedular</p>
                        <a href='https://ashokunb.github.io/Day-schedular-html-css-java/'>
                        <img
                            src={require(`../../Assets/Images/Project images/Work day schedular.jpg`)}
                            alt="project 1"
                            className="image-box img-resize"
                        /></a>

                    </div>
                    <div className=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Run Buddy</p>
                        <a href='https://ashokunb.github.io/run-buddy/'>
                        <img
                            src={require(`../../Assets/Images/Project images/Run buddy.jpg`)}
                            alt="project 1"
                            className="image-box img-resize"
                        /></a>
                    </div>
                    <div className=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Weaather Dashboard</p>
                        <a href='https://ashokunb.github.io/weather-dashbord-h-c-java-api/'>
                        <img
                            src={require(`../../Assets/Images/Project images/Weather Dashboard.jpg`)}
                            alt="project 1"
                            className="image-box img-resize"
                        /></a>
                    </div>
                    <div className=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>Password Generator</p>
                        <a href='https://ashokunb.github.io/password-generator-java/'>
                        <img
                            src={require(`../../Assets/Images/Project images/password generator.jpg`)}
                            alt="project 1"
                            className="image-box img-resize"
                        /></a>
                    </div>
                    <div className=" column is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2">
                        <p>ChatApp Live</p>
                        <a href='https://livechat-app-1.herokuapp.com/'>
                        <img
                            src={require(`../../Assets/Images/Project images//ChatApp Live.jpg`)}
                            alt="project 1"
                            className="image-box img-resize"
                        /></a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Projects;