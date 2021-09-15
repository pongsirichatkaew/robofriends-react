import React from 'react';
// import CounterButton from './CounterButton';
// const Header = () => {
//   console.log('Header rendered');
//   return <h1>RoboFrineds</h1>;
// };

class Header extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    return (
      <div>
        <h1>RoboFrineds</h1>
        {/*<CounterButton color={'red'} />*/}
      </div>
    );
  }
}

export default Header;
