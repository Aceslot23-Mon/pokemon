import React, { Dispatch, SetStateAction } from "react";

import Stile from "../stile/selezione.module.css";

type Elemento = { name: string, url: string };
type Props = { lista: Array<Elemento>, value: string, setValue: Dispatch<SetStateAction<string>>, nome: string }

export const Selezione: React.FC<Props> = ({ lista, value, setValue, nome }) => {
    return (
        <div style={{ display: "inline" }}>
            <label>{nome}</label>
            <select className={Stile.select} value={value} onChange={(e) => setValue(e.target.value)}>
                {
                    lista.map((elemento: Elemento, index: number) => (
                        <option key={`Seleziona${nome}:${index}`}>{elemento.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

type PropsMossa = { lista: Array<Elemento>, value: string, index: number, setValue: Dispatch<SetStateAction<string[]>> }
export const SelezionaMossa: React.FC<PropsMossa> = ({ lista, value, index, setValue }) => {
    return (
        <select className={Stile.selectMossa} value={value} onChange={(e) => {
            let { target: { value } } = e;
            setValue((stato) => {
                let copia = [...stato];
                copia[index] = value;
                return copia;
            })
        }}>
            {
                lista.map((elemento: Elemento, idx: number) => (
                    <option key={`SelezionaMossa${index}:${idx}`}>{elemento.name}</option>
                ))
            }
        </select>
    )
}

