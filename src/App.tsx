import React, { useEffect, useState } from 'react';

import { AllPokemonName, AllNature, allItems } from "./richieste/pokemon";
import { Aggiungi } from './component/Aggiungi';
import { NuovoPokemon } from './component/NuovoPokemon';

import style from "./stile/App.module.css";

export type Risposta = Array<{ name: string; url: string }>;

function App() {
  const [nomiPok, setNomi] = useState<Risposta>();
  const [naturePok, setNature] = useState<Risposta>();
  const [items, setItems] = useState<Risposta>([]);

  const [squadraPokemon, setSquadra] = useState<string[]>(['https://pokeapi.co/api/v2/pokemon/1/']);

  useEffect(() => {
    const prendiNomi = async () => {
      const listaNomi = await AllPokemonName();
      setNomi(listaNomi);
      const listaNature = await AllNature();
      setNature(listaNature);
      const listaStrumenti = await allItems();
      setItems(listaStrumenti);
    }
    prendiNomi();
  }, [])

  const aggiungiPokemon = (url: string) => {
    setSquadra(state => [...state, url]);
  }

  const rimuoviPokemon = (index: number) => {
    setSquadra(state => {
      let copy = [...state];
      copy = [...copy.slice(0, index), ...copy.slice(index + 1, copy.length)];
      return copy;
    })
  }


  return (
    <div>
      {nomiPok && naturePok && items.length > 0 && squadraPokemon.length < 6 ?
        <div>
          <Aggiungi nomi={nomiPok} aggiungi={aggiungiPokemon} />

        </div>
        : squadraPokemon.length < 6 ? <div>Loading</div> : <div>La tua squadra e' piena</div>}

      {
        nomiPok && naturePok && items.length > 0 ?
          <div className={style.boxPokemon}>
            {
              squadraPokemon.map((url, index) => (
                <NuovoPokemon key={`NuovoPokemon:${index}`} indice={index} url={url} items={items} naturaList={naturePok} rimuovi={rimuoviPokemon} />
              ))
            }
          </div> : null
      }
    </div>
  );
}

export default App;
