require('babel-polyfill');
const Bootstrap = require('../bootstrap');
const React = require('react');
const Square = require('./square');
const types = React.PropTypes;
const useStore = require('./use_store');

class Application extends React.Component {
  static propTypes = {
    store: types.object
  };

  constructor(props, context) {
    super(props, context);
  };



  render() {
    const squares = []
     for (let i of Array(500).keys()) {
      squares.push((<Square/>))
    }
    return (
      <div className="pui-react-starter">
        {squares}
      </div>
    );
  }
}

Bootstrap.init(useStore(Application));

module.exports = useStore(Application);
