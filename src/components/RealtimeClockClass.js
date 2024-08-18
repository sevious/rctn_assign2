import React from 'react';

export default class RealtimeClockClass extends React.Component {
    constructor() {
        super()
        this.state = {
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <br></br>
                <h6 className='pt-5' style={{opacity:"0.8", color: "white", textAlign:"center"}}>Indonesia East Zone</h6>
                <hr className='mb-2' style={{opacity:"0.8", color: "white"}}></hr>
                <h6 style={{opacity:"0.8", color: "white"}}>Realtime : {this.state.date.toLocaleTimeString()}</h6>
            </div>
        );
    }
}