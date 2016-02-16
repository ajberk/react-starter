require('babel-polyfill');
const Bootstrap = require('../bootstrap');
const React = require('react');
const types = React.PropTypes;

class Square extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="square">

      </div>
    );
  }
}

module.exports = Square;
