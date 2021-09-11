import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchField: '',
  //   };
  // }

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  // const [count, setCount] = useState(0);
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => this.setState({ robots: users }));
  // }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
    // console.log('count,', count);
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return !robots.length ? (
    <h1 className='tc'>Loading</h1>
  ) : (
    <div className='tc'>
      <h1>RoboFrineds</h1>
      <SearchBox searchChange={onSearchChange} />
      {/*<button onClick={() => setCount(count + 1)}>Click Me!</button>*/}
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
