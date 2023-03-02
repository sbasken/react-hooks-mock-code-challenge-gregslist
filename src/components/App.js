import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [ items, setItems ] = useState([])
  const [ keyword, setKeyword ] = useState("")
  

  const submitSearch = ( searchQuery) => {
    setKeyword(searchQuery)
  }
  const filteredItems = items.filter(item => (keyword === "") ? items : item.description.toLowerCase().includes(keyword.toLowerCase()))  
  

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems)
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(setItems)
  }, [])

  return (
    <div className="app">
      <Header onSubmit={submitSearch}/>
      <ListingsContainer items={filteredItems} onDeleteItem={deleteItem} />
    </div>
  );
}

export default App;
