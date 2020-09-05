import React, { useEffect, useState } from "react";
import styles from "../stile/nuovopokemon.module.css";

import { RicercaPokemon } from "../richieste/Pokemon";

import { elemento } from "../richieste/TutteLeListe";
import { Risposta } from "../App";
import { Selezione, SelezionaMossa } from "./Selezione";

type Props = { indice: number, url: string; items: Risposta; naturaList: Risposta; rimuovi: (index: number) => void }

export const NuovoPokemon: React.FC<Props> = ({ indice, url, items, naturaList: listNature, rimuovi }) => {
    const [listaAbilita, setListaAbilita] = useState<Array<elemento>>([]);
    const [mosseLista, setListaMosse] = useState<Array<elemento>>([]);

    const [sprite, setSprite] = useState<string>('');
    const [strumento, setStrumento] = useState("strumenti");
    const [abilita, setAbilita] = useState<string>('');
    const [mosse, setMosse] = useState<string[]>([]);
    const [natura, setNatura] = useState(listNature[0].name);
    const [livello, setLivello] = useState<number>(1);

    const [livelloMinimo, setMinimo] = useState<number>();

    useEffect(() => { items.push({ name: " ", url: "" }) }, [items]);

    useEffect(() => {
        RicercaPokemon(url, setAbilita, setListaAbilita, setListaMosse, setSprite, setMinimo, setLivello, rimuovi, indice);
    }, [url, indice, rimuovi]);

    if (listaAbilita.length < 1 || mosseLista.length < 1 || !sprite || !livelloMinimo) {
        return (
            <div style={{ display: "grid", placeItems: "center" }}>
                <img className={styles.loading} style={{ height: "40vh" }} src={require('../immagini/pngegg.png')} />
            </div>
        )
    }

    let visualizzaMosse: Array<JSX.Element> = [];
    for (let i = 0; i < 4; i++) {
        visualizzaMosse.push(
            <SelezionaMossa key={`SelezionaMossa:${i}`} lista={mosseLista} index={i} value={mosse[i]} setValue={setMosse} />
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.pokemonContainer}>
                <img className={styles.img} src={sprite}></img>
            </div>

            <div className={styles.inserimentoDati}>
                <div className={styles.quattroItem}>
                    <Selezione lista={items} value={strumento} setValue={setStrumento} nome={"Strumento"} />
                    <Selezione lista={listaAbilita} value={abilita} setValue={setAbilita} nome={"Abilita"} />
                    <Selezione lista={listNature} value={natura} setValue={setNatura} nome={"Natura"} />
                    <input style={{ width: "80%", textAlign: "center", fontSize: "18px" }} type="number" min={livelloMinimo} max="99" value={livello} onChange={(e) => setLivello(parseInt(e.target.value))} />
                </div>
                <div>
                    {visualizzaMosse}
                </div>
                <button id={styles.buttonRimuovi} onClick={() => rimuovi(indice)}>Rimuovi</button>
            </div>
        </div>
    )
}