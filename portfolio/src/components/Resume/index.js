import React from 'react';

function Resume() {


    return (
        <article id="resume-me" class=" p-6 has-background-light">
            <div class="has-text-centered mb-6"><h2 class="title ">Resume</h2></div>

            <div class="columns is-flex-wrap-wrap is-justify-content-center card has-text-centered block">
                <div class=" column is-one-thirds is-half-tablet is-12-mobile">
                    <p class="block has-text-weight-semibold is-size-5">Education</p>
                        <dl><dt>Rice University Coding Boot-camp</dt>
                            <dd>-Web Dev (August 2022)</dd></dl>
                        <br></br>
                        <dl><dt>Texas Tech University</dt>
                            <dd>-Mathematics (December 2020)</dd></dl>                
                </div>

                <div class=" column is-one-thirds is-half-tablet is-12-mobile">
                    <p class="block has-text-weight-semibold is-size-5">Technologies</p>
                    <ul>
                        <li class="mb-1">-HTML</li>
                        <li class="mb-1">-CSS</li>
                        <li class="mb-1">-JavaScript</li>
                    </ul>
                </div>   
            </div>
        </article>
    );
}

export default Resume;
