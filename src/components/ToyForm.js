import React, {useState} from "react";

function ToyForm({renderingNewToy}) {
  const [newToy, setNewToy] = useState({
    "name": "",
    "image": ""
  })

  function handleChange(e) {
    setNewToy({...newToy, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventdefault()
    fetch('http://localhost:3001/toys', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newToy)
    }).then(res => res.json)
      .then(newData => renderingNewToy(newData))
    e.target.reset()
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={e => handleChange(e)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
