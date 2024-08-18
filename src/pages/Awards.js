import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

class Awards extends Component {
    render() {
        return (
            <div className="title_pad">
                <h1 className="title_font"><b>AWARDS</b></h1>
                <br></br>
                <div class="row">
                    <p><b><FontAwesomeIcon icon={faAward} style={{color:"#F4A261"}}/><span class="px-3">Hack 36 3rd prize winner.</span></b></p>
                    <p><b><FontAwesomeIcon icon={faAward} style={{color:"#F4A261"}}/><span class="px-3">Mentor OpenCode'19.</span></b></p>
                    <p><b><FontAwesomeIcon icon={faAward} style={{color:"#F4A261"}}/><span class="px-3">Started North Indonesia First Student Design and Developer Conference.</span></b></p>
                </div>
            </div>
        );
    }
}

export default Awards;
