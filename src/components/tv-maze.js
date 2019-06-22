import React from 'react';
import axios from "axios";
import { messaging } from "../init-fcm";

export default class Tvmaze extends React.Component
{
    constructor () {
        super ();
        this.state = {
            infos: [],
            seek: ''
        }
        this.handleSeekingChange = this.handleSeekingChange.bind (this);
    }

    handleSeekingChange(event) {
        this.setState({seek: event.target.value});
        console.log(this.state.seek);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.seek !== prevState.seek) {
            axios
                .get('https://api.tvmaze.com//search/shows?q=' + this.state.seek)
                .then(
                    response => response.data
                    )
                .then((data) => {
                    console.log('data : ', data)
                    this.setState({infos: data})
                })
            messaging.requestPermission()
                .catch(function(err) {
                    console.log("Unable to get permission to notify.", err);
                });

            navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
        }
    }
    
    render () {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" value={this.state.seek} onChange={this.handleSeekingChange} />
                </label>
                { this.state.infos.map((info) =>
                        <div>
                            <h4>{ info.show.name }</h4>
                            { info.show.image === null ? 'no picture' : <img src={ info.show.image.medium } alt={ info.show.name } />}
                            <article dangerouslySetInnerHTML={{ __html: info.show.summary }}></article>
                        </div>
                    )}
            </form>
        )
    }
}