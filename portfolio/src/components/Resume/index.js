import React from 'react';

function Resume() {


    return (
        <article id="resume-me" className=" p-6 has-background-light ">
            <div className="has-text-centered mb-6"><h2 className="title ">Resume</h2></div>

            <div className="columns is-flex-wrap-wrap is-justify-content-center card has-text-centered block">
                <div className=" column is-one-thirds is-half-tablet is-12-mobile">
                    <p className="block has-text-weight-semibold is-size-5">Education</p>
                        <dl><dt>Rice University Coding Boot-camp</dt>
                            <dd>-Web Dev (August 2022)</dd></dl>
                        <br></br>
                        <dl><dt>Texas Tech University</dt>
                            <dd>-Mathematics (December 2020)</dd></dl>                
                </div>

                <div className=" column is-one-thirds is-half-tablet is-12-mobile">
                    <p className="block has-text-weight-semibold is-size-5">Technologies</p>
                    <ul>
                        <li className="mb-1">-HTML</li>
                        <li className="mb-1">-CSS</li>
                        <li className="mb-1">-SQL</li>
                        <li className="mb-1">-MongoDB</li>
                        <li className="mb-1">-GraphQL</li>
                    </ul>
                </div>   
            </div>
        </article>
    );
}

export default Resume;
