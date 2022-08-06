import React, {useState} from "react";

function ToyCard({toy, deletingToy, renderNewLikes}) {
  const [likes, setLikes] = useState(toy.likes)

  function handleDel() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"}
    }).then(() => deletingToy(toy))
  }

  function handleLike() {
    setLikes(likes + 1)

    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        "likes": likes
      })
    }).then(res => res.json())
      .then(data => renderNewLikes(data))
  }

  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDel}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
