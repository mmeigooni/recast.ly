import App from './components/App.js';
import VideoPlayer from './components/VideoPlayer.js';
import exampleVideoData from './data/exampleVideoData.js';
import VideoList from './components/VideoList.js';

// TODO: Render the `App` component to the DOM
ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<VideoPlayer video={exampleVideoData[0]}/>, document.getElementsByClassName('video-player')[0]);

ReactDOM.render(<VideoList />, document.getElementsByClassName('video-list')[0]);

// we are currently using the same class name for video player container and the video player itself

// render videoListEntry with prop.type = video, must be dynamic (not zero indexed)
// render videoList to use videoListEntry as children