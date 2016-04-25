import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';


const API_KEY = "AIzaSyClrx85fvWgJ9gjKTtflZH6mpg4fHLSv7k";




// Create a new component and this will produce some html

//const meaning final value of it.
class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('surfboards')

    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo : videos[0]
            })
            // this.setState({videos:videos})
        })
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)
        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch} />
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos = {this.state.videos} />
            </div>
        );
    }
}



// Take generated HTML and put to DOM
ReactDOM.render(<App />, document.querySelector(".container"));
