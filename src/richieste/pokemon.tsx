import axios, { AxiosResponse } from "axios";

export type elemento = { name: string; url: string };

export function trasformaBene(oggetto: Array<elemento>, nome: string) {
    oggetto = oggetto.map((item: elemento, index: number) => {
        const { name } = item;
        let paroleMultiple = name.split("-");
        paroleMultiple = paroleMultiple.map(parola => parola.charAt(0).toUpperCase() + parola.substr(1, parola.length));
        const parolaFinita = paroleMultiple.join(' ');
        const url = `https://pokeapi.co/api/v2/${nome}/${index + 1}/`;
        return { name: parolaFinita, url: url };
    })
    return oggetto;
}

export const AllPokemonName = async () => {
    const listaNomi = await axios({
        method: "GET",
        url: "https://pokeapi.co/api/v2/pokemon?limit=807",

    }
    ).then((responde: AxiosResponse<any>) => responde.data)
        .then(data => {
            const { results } = data;
            const nomiGiusto = trasformaBene(results, "pokemon");
            return nomiGiusto;
        });

    return listaNomi;
}

export const AllNature = async () => {
    const listaNature = await
        axios({
            method: "GET",
            url: "https://pokeapi.co/api/v2/nature?limit=25"
        }).then((response: AxiosResponse<any>) => response.data)
            .then(data => {
                const { results } = data;
                const abilitaGiuste = trasformaBene(results, "nature");
                return abilitaGiuste;
            });

    return listaNature;
}

export const allItems = async () => {
    const items = await
        axios({
            url: "https://pokeapi.co/api/v2/item-attribute/5/",
            method: "GET"
        }).then((response: AxiosResponse<any>) => response.data)
            .then(data => {
                const { items } = data;
                const itemGiusti = trasformaBene(items, "items");
                return itemGiusti;
            });

    return items;
}