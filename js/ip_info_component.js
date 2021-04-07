"use strict";

class IpInfoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

// ---

  render() {
    return (
      <div id="ip-info-container">
        <div id="ip-info-container-inner">
          <div className="ip-info-tile">
            <h2>IP Address</h2>
            <p>192.212.174.101</p>
          </div>
          <div className="ip-info-tile">
            <h2>Location</h2>
            <p>Brooklyn, NY 10001</p>
          </div>
          <div className="ip-info-tile">
            <h2>Timezone</h2>
            <p>UTC - 05:00</p>
          </div>
          <div className="ip-info-tile">
            <h2>ISP</h2>
            <p>SpaceX Starlink</p>
          </div>
        </div>
      </div>
    );
  }
}
