var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
        <div><h5><em>search</em> test test test</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7 videoPlayer">
        <div><h5><em>videoPlayer</em> view goes here</h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em> view goes here</h5></div>
      </div>
    </div>
  </div>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


// ## Hierarchy
// * App - The top level container for the entire application. This is the component that will be rendered to the DOM
//   * Search - Responsible for knowing and communicating information about the search input field
//   * VideoList - A container component responsible for populating video list entry components
//     * VideoListEntry - A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be played in the VideoPlayer component
//   * VideoPlayer - Responsible for playing a single video and displaying information about it
