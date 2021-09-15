import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  console.log('Searhbox render');
  return (
    <input
      className='pa3 ba b--green bg-lightest-blue'
      type='search'
      placeholder='search robots'
      onChange={searchChange}
    />
  );
};

export default SearchBox;
