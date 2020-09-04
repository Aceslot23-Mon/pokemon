import React, { useState } from "react";

import { Risposta } from "../App";

type Props = { nomi: Risposta; aggiungi: (url: string) => void};

export const Aggiungi: React.FC<Props> = (props) => {
    const { nomi, aggiungi } = props;
    const [pokemonSelezionato, setPokemon] = useState(nomi[0].url);

    return (
        <div>
            <select value={pokemonSelezionato} onChange={e => setPokemon(e.target.value)}>
                {
                    nomi.map((pokemon, indx) => (
                        <option key={indx} value={pokemon.url}>
                            {pokemon.name}
                        </option>))
                }
            </select>
            <button onClick={() => aggiungi(pokemonSelezionato)}>Aggiungi</button>
        </div>
    )

}