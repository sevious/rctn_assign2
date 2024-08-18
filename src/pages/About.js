import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class About extends Component {
    render() {
        return (
            <div className="title_pad">
                <h1 style={{marginBottom:"0px", fontSize:"60px"}}><b>LOREM<span style={{color:"#D35400"}}>IPSUM</span></b></h1>
                <p><b>+62-0123456789<span style={{color:"#D35400"}}> LOREMIPSUM@GMAIL.COM</span></b></p>
                <br />
                <p><b>I am an opensource contributor and have contributed to Zulip, Hasura, Fossasia, Publiclab and many other projects. My tech stack includes Python and Javascript. Python for server side and scripting and Javascript for the frontend. I use Django framework for the server side development and React for the frontend development. I have also worked with GraphQL. I am a GitHub Campus Expert at my institute where I am responsible for building on campus community. I am the lead organizer of Hack in The North Hackathon and the co founder of Pragma Conference held at IIIT Allahabad.</b></p>
                <br></br>
                <div class="social-icons">
                    <a href="https://linkedin.com" class="icon linkedin">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com" class="icon github">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        )
    }
}

export default About;
