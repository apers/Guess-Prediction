import React, {Component} from 'react';
import PropTypes from "prop-types";
import './Predictions.css';

class Predictions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }
  render() {
    const {
      searchWord,
      predictions,
    } = this.props;

    if(predictions.length <= 0) {
      return null;
    }

    const predictionJsx = predictions.map((prediction) => {
      return <div key={prediction}>{searchWord} {prediction}</div>
    });

    return (
        <div className="Predictions">
          {predictionJsx}
        </div>
    );
  }
}

Predictions.propsTypes = {
  searchWord: PropTypes.string,
  predictions: PropTypes.array,
};

Predictions.defaultProps = {
  searchWord: null,
  predictions: [],
};


export default Predictions;
