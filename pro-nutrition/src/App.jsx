import React from "react";
import { useState } from "react";
import FoodData from "./FoodData";
import Search from "./components/Search";
import Food from "./components/Food";

function App(){
  const [search, setSearch] = useState("")

  const filteredSearch = FoodData.filter((e)=>{
    return e.name.toLowerCase().includes(search.toLowerCase())
  })



  return (
    <>
      <Search setSearch = {setSearch}/>
      {
        filteredSearch.length <= 0 ? (
          <h3>No data found</h3>
        ) : (
          filteredSearch.map((e, i)=>(
             <Food key={i} ele = {e} index= {i} />
          ))
        )
      }

    </>
  )
}

export default App;