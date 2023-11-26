import React,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsList,setPlantsList]=useState([]);
  const[searchVal,setSearchVal]=useState("");
  useEffect(()=>
  {
    fetch("http://localhost:6001/plants")
    .then((res)=>res.json())
    .then((plants)=>setPlantsList(plants))

  }
  ,[]);
  const plantsToDisplay = plantsList.filter((plant) => {
    return plant.name.toLowerCase().includes(searchVal.toLowerCase());
  });
  function addNewPlant(newPlant)
  {
    const newPlantList= [...plantsList,newPlant];
    setPlantsList(newPlantList);

  }
  return (
    <main>
      <NewPlantForm onPlantAdd={addNewPlant}/>
      <Search setSearchVal={setSearchVal} searchVal={searchVal}/>
      <PlantList plantsList={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
