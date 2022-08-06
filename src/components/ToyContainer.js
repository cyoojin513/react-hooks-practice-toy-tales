import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, deletingToy, renderNewLikes}) {
  return (
    <div id="toy-collection">{toys.map((toy) => <ToyCard
        key={toy.id} 
        toy={toy} 
        deletingToy={deletingToy}
        renderNewLikes={renderNewLikes}
      />)}
    </div>
  );
}

export default ToyContainer;
