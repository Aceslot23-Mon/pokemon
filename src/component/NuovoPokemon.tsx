import React, { useEffect, useState, JSXElementConstructor } from "react";
import axios from "axios";
import styles from "../stile/nuovopokemon.module.css";

import { Pokemon } from "../interface/Pokemon2";
import { trasformaBene, elemento } from "../richieste/pokemon";
import { Risposta } from "../App";

type Props = { indice: number, url: string; items: Risposta; naturaList: Risposta; rimuovi: (index: number) => void }

export const NuovoPokemon: React.FC<Props> = ({ indice, url, items, naturaList, rimuovi }) => {

    const [listaAbilita, setListaAbilita] = useState<Array<elemento>>([]);
    const [mosseLista, setListaMosse] = useState<Array<elemento>>([]);
    
    const [sprite, setSprite] = useState<string>('');
    const [strumento, setStrumento] = useState("strumenti");
    const [abilita, setAbilita] = useState<string>('');
    const [mosse, setMosse] = useState<string[]>([]);
    const [natura, setNatura] = useState(naturaList[0].name);

    useEffect(() => { items.push({ name: " ", url: "" }) }, []);

    useEffect(() => {
        axios({ method: "GET", url: url, timeout: 2000 })
            .then(response => response.data)
            .then((data: Pokemon) => {
                let mosseBelle = data.moves.map(mossa => {
                    return { ...mossa.move };
                })

                mosseBelle.unshift({ name: "Mossa", url: "" });
                mosseBelle.push({ name: " ", url: "" });

                mosseBelle = trasformaBene(mosseBelle, "move");

                let abilitaBelle = data.abilities.map(abilita => {
                    return { ...abilita.ability };
                })

                abilitaBelle = trasformaBene(abilitaBelle, "ability");

                setAbilita(abilitaBelle[0].name);

                setListaAbilita(() => abilitaBelle);
                setListaMosse(() => mosseBelle);
                setSprite(() => data.sprites.other["official-artwork"].front_default);
            })
            .catch((error: Error) => {
                console.log(error.name);
                rimuovi(indice);
            });
    }, [url]);

    if (listaAbilita.length < 1 || mosseLista.length < 1 || !sprite) {
        return <div>Loading...</div>;
    }

    let visualizzaMosse: Array<JSX.Element> = [];
    for (let i = 0; i < 4; i++) {
        visualizzaMosse.push(
            <select key={`Select:${i}`} value={mosse[i] || mosseLista[0].name} onChange={(e) => {
                const value = e.target.value;

                setMosse((mosse) => {
                    let copia = [...mosse];
                    copia[i] = value;
                    return copia;
                })
            }}>
                {mosseLista.map((mossa, index) => (
                    <option value={mossa.name} key={`Mossa:${i},${index}`}>{mossa.name}</option>
                ))}
            </select>
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.pokemonContainer}>
                <img src={sprite}></img>
            </div>

            <div className={styles.inserimentoDati}>
                <select value={strumento} onChange={(e) => setStrumento(e.target.value)} >
                    <option value={"strumenti"}>Strumenti</option>
                    {
                        items?.map((item, index) => (
                            <option key={`Strumento:${index}`} value={item.name}>{item.name}</option>
                        ))
                    }
                </select>
                <select value={abilita || listaAbilita[0].name} onChange={e => setAbilita(e.target.value)}>
                    {
                        listaAbilita.map((abilita, index) => (
                            <option key={`Abilita:${index}`} value={abilita.name}>{abilita.name}</option>
                        ))
                    }
                </select>

                <select value={natura} onChange={e => setNatura(e.target.value)} >
                    {
                        naturaList.map((natura: elemento, index: number) => (
                            <option key={`Naura:${indice}:${index}`} value={natura.name}>{natura.name}</option>
                        ))
                    }
                </select>

                <div>
                    {visualizzaMosse}
                </div>
                <button id={styles.buttonRimuovi} onClick={() => rimuovi(indice)}>Rimuovi</button>
            </div>
        </div>
    )
}