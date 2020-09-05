import axios from "axios";
import { Pokemon } from "../interface/Pokemon2";
import { trasformaBene, elemento } from "./TutteLeListe";
import { Specie } from "../interface/Specie";
import { Catena } from "../interface/CatenaEvolutiva";

type SetString = React.Dispatch<React.SetStateAction<string>>;
type SetNumber = React.Dispatch<React.SetStateAction<number>>;
type SetLista = React.Dispatch<React.SetStateAction<elemento[]>>;
type SetMinimo = React.Dispatch<React.SetStateAction<number | undefined>>;

export async function RicercaPokemon(url: string, setAbilita: SetString, setListaAbilita: SetLista,
    setListaMosse: SetLista, setSprite: SetString,
    setMinimo: SetMinimo, setLivello: SetNumber, rimuovi: (index: number) => void, indice: number) {
    let nomePokemon: string;

    await axios({ method: "GET", url: url, timeout: 2000 })
        .then(response => response.data)
        .then((data: Pokemon) => {
            nomePokemon = data.name;

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

            return data;
        })
        .then(({ species }) => {
            axios({ url: species.url, method: "GET" })
                .then(response => response.data)
                .then((data: Specie) => {
                    const { evolution_chain } = data;
                    axios.get(evolution_chain.url).then(response => response.data)
                        .then((data: Catena) => {
                            const nomeSpecie = data.chain.species.name;
                            let minimo = 1;
                            if (nomePokemon !== nomeSpecie) {
                                const primaEvoluzione = data.chain.evolves_to[0];

                                if (primaEvoluzione.species.name === nomePokemon) {
                                    minimo = primaEvoluzione.evolution_details[0].min_level;
                                }

                                else {
                                    const secondaEvoluzione = primaEvoluzione.evolves_to[0];
                                    minimo = secondaEvoluzione.evolution_details[0].min_level;
                                }
                            }

                            setMinimo(() => {
                                return minimo;
                            });
                            setLivello(() => {
                                return minimo;
                            });
                        })
                })
        })
        .catch((error: Error) => {
            console.log(error.name);
            rimuovi(indice);
        });
}