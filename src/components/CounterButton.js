import React, { PureComponent } from 'react';

class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (this.state.count !== nextState.count) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //     // console.log('nextProps', nextProps, nextState);
  //     // return true;
  //   }

  updateCount = () => {
    // this.setState({ count: this.state.count + 1 });
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };
  render() {
    console.log('CounterButton render');
    return (
      <button id='counter' color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
