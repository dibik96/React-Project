import React from 'react'
import '../App.css';

const SearchComponents = ({searchitem,setSearchItem}) => {

  const searchSubmit = (e)=> {
    e.preventDefault();

  }

  return (
    <form onSubmit={searchSubmit}>
      <input type="text" placeholder="Search" required='required' tabIndex={0} onChange={(event) => setSearchItem(event.target.value)} value={searchitem} />
      <button id="search" type='submit'>Search</button>
    </form>
  )

}

export default SearchComponents