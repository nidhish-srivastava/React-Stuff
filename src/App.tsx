import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Pokemon, getAll, getByName } from "./API";


// adding more types to the interface by extending

interface PokemonWithPower extends Pokemon{
  power : number
}

const calculatePower = (pokemon: Pokemon) =>
  pokemon.hp +
  pokemon.attack +
  pokemon.defense +
  pokemon.special_attack +
  pokemon.special_defense +
  pokemon.speed;

  let tableRender = 0
const PokemonTable: React.FunctionComponent<{
  // pokemon: Pokemon[];
  pokemon: PokemonWithPower[];
}> = ({ pokemon }) => {
  console.log(`Table Render`,tableRender++);
  
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Type</td>
          <td colSpan={6}>Stats</td>
          {/* Adding additional column */}
          <td>Power</td>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>{p.type.join(",")}</td>
            <td>{p.hp}</td>
            <td>{p.attack}</td>
            <td>{p.defense}</td>
            <td>{p.special_attack}</td>
            <td>{p.special_defense}</td>
            <td>{p.speed}</td>
            <td>{p.power}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const MemoedPokemonTable = React.memo(PokemonTable)

let appRender = 0
export default function App() {
  console.log(`app render ${appRender++}`);
  
  const [pokemon,setPokemon] = useState<Pokemon[]>([])
  const [threshold,setThreshhold] = useState(0)
  const [search,setSearch] = useState("")
  
  const onSetSearch = useCallback((evt : React.ChangeEvent<HTMLInputElement>)=> setSearch(evt.target.value),[])

  const onSetThreshold = (evt : React.ChangeEvent<HTMLInputElement>) => 
  setThreshhold(parseInt(evt.target.value,10))

  // useEffect(()=>{
  //   getAll().then(setPokemon)
  // },[])

  useEffect(()=>{
    getByName(search).then(setPokemon)
  },[search])

  const pokemonWithPower = useMemo(()=> pokemon.map((p)=>({
    ...p,
    power : calculatePower(p)
    }
    )),[pokemon])

  const countOverThreshold = useMemo(()=>
  pokemonWithPower.filter(
    (p) => p.power > threshold
  ).length
  ,[pokemonWithPower,threshold])
  return (
    <div>
      <div className="top-bar">
        <div>Search</div>
        <input type="text" value={search} onChange={onSetSearch} ></input>
        <div>Power threshold</div>
        <input type="text" value={threshold} onChange={onSetThreshold} ></input>
        <div>Count over threshold: {countOverThreshold} </div>
      </div>
      <div className="two-column">
        {/* <PokemonTable pokemon={pokemon} /> */}
        <PokemonTable pokemon={pokemonWithPower} />
        {/* <MemoedPokemonTable pokemon={pokemonWithPower} /> It wont improve the scene coz of referential equality,everytime it checks the array,both have diff reference so it re renders */}
        <div>
          <div>Min: </div>
          <div>Max: </div>
        </div>
      </div>
    </div>
  );
}