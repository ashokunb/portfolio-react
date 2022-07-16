import React from 'react';

function About() {
    return (
        <div>
            <section >
                <div className="columns my-height is-vcentered has-text-white">
                    <section className="column has-text-centered is-half m-5">
                        <div>
                            <h1 className="mb-4 has-text-weight-bold is-size-1">Houston, TX</h1>
                            <h2 className="mb-4 has-text-weight-semibold is-size-4 style">Full Stack Developer</h2>

                            <p className="mb-2 is-size-5 has-text-weight-semibold">About me</p>
                            <p className="mt-5 mb-2">My name is Ambrose Shokunbi, welcome to my full stack portfolio.</p>
                            <p>I am currently in a Full-stack developer Bootcamp at Rice. My goal is to work at an innovative company with a focus on front-end development.
                                My focus is applying my analytical and problem-solving abilities to for new designs and alternative configurations.
                                My current skill set includes.....
                            </p>
                        </div>
                    </section>
                    <div className=" columns is-two-thirds is-half-tablet is-12-mobile p-5 image-is-2by2 m-1">
                        <img
                            src={require(`../../Assets/Images/Site images/profile image.jpg`)}
                            alt="project 1"
                            className='tile'/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
