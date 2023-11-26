import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsList}) {
  return (
    <ul className="cards">
      {plantsList.map((plant)=>
      
        <PlantCard key={plant.id} name={plant.name} image={plant.image} price={plant.price}/>
     
      )}
      {/* render PlantCards components in here */}
      </ul>
  );
}

export default PlantList;
