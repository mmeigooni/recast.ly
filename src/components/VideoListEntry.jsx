// import App from './App.js';
import VideoPlayer from './VideoPlayer.js';
// import updateVideo from './updateVideo.js';

var VideoListEntry = (props) => {

  var title = props.video.snippet.title;
  var desc = props.video.snippet.description;
  var imgSource = props.video.snippet.thumbnails.default.url;

  // var onVideoItemClick = () => {
  //   // debugger;
  //   // updateVideo(props.video);
  //   console.log(props.update());
  //   // console.log(event.target);
  //   // console.log(this);
  //   // ReactDOM.render( <VideoPlayer video={props.video} key={props.video.id.videoId}/> );
  // };

  return (
    <div className="video-list-entry media" onClick={() => props.update(props.video)}>
      <div className="media-left media-middle">
        <img className="media-object" src={imgSource} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">{title}</div>
        <div className="video-list-entry-detail">{desc}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;


// Need to enable clicking the entire component to display the video in the videoPlayer