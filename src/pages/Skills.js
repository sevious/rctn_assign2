import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

class Skills extends Component {
    render() {
        return (
            <div className="title_pad">
                <h1 className="title_font"><b>SKILLS</b></h1>
                <br></br>
                <h4 className="gray_font"><b>PROGRAMMING LANGUAGES & TOOLS</b></h4>
                <div class="row">
                    <div class="col-sm-6 pt-2">
                        <div class="row mb-3">
                            <div class="col-sm-1"><div class="icon2 skills"><FontAwesomeIcon icon={faCheck} /></div></div>
                            <div class="col-sm-11"><p className="mb-0"><b>HTML5</b></p></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-1"><div class="icon2 skills"><FontAwesomeIcon icon={faCheck} /></div></div>
                            <div class="col-sm-11"><p className="mb-0"><b>Javascript</b></p></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-1"><div class="icon2 skills"><FontAwesomeIcon icon={faCheck} /></div></div>
                            <div class="col-sm-11"><p className="mb-0"><b>Nodejs</b></p></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-1"><div class="icon2 skills"><FontAwesomeIcon icon={faCheck} /></div></div>
                            <div class="col-sm-11"><p className="mb-0"><b>Django</b></p></div>
                        </div>
                    </div>
                    <div class="col-sm-6" style={{textAlign:"end"}}>
                        <div class="row mb-3">
                            <div class="col-sm-1"><div class="icon2 skills"><FontAwesomeIcon icon={faCheck} /></div></div>
                            <div class="col-sm-11" style={{textAlign:"left"}}><p className="mb-0"><b>CSS3</b></p></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-1"><div class="icon2 skills"><FontAwesomeIcon icon={faCheck} /></div></div>
                            <div class="col-sm-11" style={{textAlign:"left"}}><p className="mb-0"><b>React</b></p></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-1"><div class="icon2 skills"><FontAwesomeIcon icon={faCheck} /></div></div>
                            <div class="col-sm-11" style={{textAlign:"left"}}><p className="mb-0"><b>Python</b></p></div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-sm-1"><div class="icon2 skills"><FontAwesomeIcon icon={faCheck} /></div></div>
                            <div class="col-sm-11" style={{textAlign:"left"}}><p className="mb-0"><b>Ember</b></p></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;
