import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import { useSelector, useDispatch } from 'react-redux';
import { requestRobots } from '../redux/robots/robots.action';
function App() {
  const [searchField, setSearchField] = useState('');
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robots.users);

  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

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
      <Header />
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
