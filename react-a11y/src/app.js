var a11y = require('react-a11y');
var React = require('react');

a11y(React);

var btnStyle = {
    backgroundColor: '#DB762D',
    display: 'inline-block',
    borderRadius: 2,
    color: '#fafafa',
    fontSize: 24,
    fontFamily: 'sans-serif',
    border: '4px solid rgba(0, 0, 0, 0.15)',
    boxSizing: 'border-box',
    width: 240,
    height: 76,
    textAlign: 'center',
    margin: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    lineHeight: '70px'
};

var Button = React.createClass({

  getInitialState() {

    return { title: 'I\'m a button!' };
  },

  _onClick() {

    this.setState({ title: 'That\'s right' });
  },

  render() {

    return <div className='button' style={btnStyle}
                onClick={this._onClick}>{this.state.title}</div>;
  }
});

React.render(<Button />, document.body);
