import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {

  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/toys')
    .then(res => res.json())
    .then(data => setToys(data))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function renderingNewToy(newData) {
    setToys([...toys, newData])
  }  

  function deletingToy(data) {
    setToys(toys.filter((toy) => toy.id !== data.id))
  }

  function renderNewLikes(data) {
    setToys(toys.map((toy) => {
      if (toy.id === data.id) {
        return data
      } else {return toy}
    }))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm renderingNewToy={renderingNewToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys} 
        deletingToy={deletingToy}
        renderNewLikes={renderNewLikes}
      />
    </>
  );
}

export default App;
