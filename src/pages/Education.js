import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div className="title_pad">
                <h1 className="title_font"><b>EDUCATION</b></h1>
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <h4><b>LOREMIPSUM INSTITUTE OF INFORMATION TECHNOLOGY</b></h4>
                        <h4 className="gray_font"><b>BACHELOR OF TECHNOLOGY</b></h4>
                        <br></br>
                        <p><b>12.34</b></p>
                    </div>
                    <div class="col-sm-4" style={{textAlign:"end"}}>
                        <p style={{color:"#D35400"}}><b>August 2016 - Present</b></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;
