"use strict";

class IpSearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

// ---

  render() {
    return (
      <div id="ip-search-container">
        <input id="ip-search-input" name="ip-search-input" type="text"
        placeholder="Search for any IP address or domain" aria-label="IP search input" />

        <button id="ip-search-button" aria-label="IP search button"></button>
      </div>
    );
  }
}
