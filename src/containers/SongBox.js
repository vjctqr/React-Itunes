import React, {Component} from 'react';

class SongBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs
        };
    }

    componentsDidMount() {
        const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

        fetch(url)
        .then(res => res.json())
        .then(data =>this.setState({songs: data}))
    }
}