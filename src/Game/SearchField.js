import React, {Component} from 'react';
import './SearchField.css';
import Predictions from "./Predictions";
import PropTypes from "prop-types";

class SearchField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      valueCurrentPos: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.searchWord !== nextProps.searchWord) {
      this.setInputValue(nextProps.searchWord)
    }
  }

  setInputValue(newWord) {
    if(this.inputRef) {
      this.inputRef.focus();
    }

    this.setState({
      valueCurrentPos: 0,
      value: "",
    });

    const interval = setInterval(() => {
      console.log("POW");
      if(this.state.valueCurrentPos > newWord.length) {
        this.setState({
          value: newWord + " ",
          valueCurrentPos: this.state.valueCurrentPos + 1,
        });

        clearInterval(interval);
      } else {
        this.setState({
          value: newWord.substring(0, this.state.valueCurrentPos),
          valueCurrentPos: this.state.valueCurrentPos + 1,
        });
      }
    }, 125);
  }

  render() {
    const {
      value
    } = this.state;

    const {
      searchWord
    } = this.props;

    return (
        <div className="SearchField">
          <input
              ref={ref => {
                this.inputRef = ref;
              }}
              value={value}
              className="input-field"
              type="text"
          />
          <Predictions
            searchWord={searchWord}
            predictions={["hjelp", "fugl", "fisk"]}
          />
        </div>
    );
  }
}

SearchField.propsTypes = {
  searchWord: PropTypes.string,
};

SearchField.defaultProps = {
  searchWord: null,
};

export default SearchField;
