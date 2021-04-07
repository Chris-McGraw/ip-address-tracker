"use strict";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

// ---

  render() {
    return (
      <div id="app-container">
        <div id="background-img-container">
          <h1 id="main-header">IP Address Tracker</h1>
          <IpSearchComponent />
          <IpInfoComponent />
        </div>

        <MapComponent />
      </div>
    );
  }
}

const reactContainer = document.querySelector("#react-container");
ReactDOM.render(<AppContainer />, reactContainer);
