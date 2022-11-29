import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type="search"
          placehodler={this.props.placehodler}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
