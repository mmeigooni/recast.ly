import App from './components/App.js';
import VideoPlayer from './components/VideoPlayer.js';
import exampleVideoData from './data/exampleVideoData.js';

// TODO: Render the `App` component to the DOM
ReactDOM.render(<App />, document.getElementById('app'));

ReactDOM.render(<VideoPlayer video={exampleVideoData[0]}/>, document.getElementsByClassName('videoPlayer')[0]);
