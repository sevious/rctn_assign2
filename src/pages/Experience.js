import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div style={{padding:"120px 0"}} >
                <h1 className="title_font"><b>EXPERIENCE</b></h1>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <h4><b>GITHUB CAMPUS EXPERT</b></h4>
                        <h4 className="gray_font"><b>GITHUB</b></h4>
                        <br></br>
                        <p><b>Responsible for building the on campus community with the support of Github.</b></p>
                    </div>
                    <div class="col-sm-4" style={{textAlign:"end"}}>
                        <p style={{color:"#D35400"}}><b>August 2018 - Present</b></p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <h4><b>OPENSOURCE DEVELOPER INTERN</b></h4>
                        <h4 className="gray_font"><b>FOSSASIA</b></h4>
                        <br></br>
                        <p><b>Contributing to Fossasia's open event server and frontend as an intern. Resolved numerous bugs and added new features to the event platform.</b></p>
                    </div>
                    <div class="col-sm-4" style={{textAlign:"end"}}>
                        <p style={{color:"#D35400"}}><b>June 2019 - Present</b></p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <h4><b>SOFTWARE DEVELOPER INTERN</b></h4>
                        <h4 className="gray_font"><b>HASURA</b></h4>
                        <br></br>
                        <p><b>Worked on Hasura's GrapghQL engine and added new features in it.</b></p>
                    </div>
                    <div class="col-sm-4" style={{textAlign:"end"}}>
                        <p style={{color:"#D35400"}}><b>December 2018 - January 2019</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;
