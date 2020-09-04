# Idee per *inserire nome* 
---

Voglio avere la possibilita di scegliere un pokemon
tra una lista, probabilmente, con tanto poi di abilita,
strumenti, livello e mosse

* [ ]  Scegliere un pokemon da una pool
* [ ]  Selezionare livello (min 1 max 99 )
* [ ]  Abilita solo quelle che il pokemon effettivamente ha
* [ ]  Natura
* [ ]  Strumenti credo qualsiasi actually 
* [ ]  4 mosse ( possibilmente solo quelle che puo imparare )
* [ ]  Fino ad un max di 6 pokemon

## Cose da fare prima
* Trovare un modo per avere la lista di tutti X i pokemon
  * **Idee per risolvere**:
    * Forse con l'id da 0 a NUM_POKEMON (?)
* La lista di tutti gli strumenti
  * **Idee per risolvere**: 
    * Null 

---
## Come fare
da https://pokeapi.co/api/v2/pokemon/ { name or id }
Posso prendere 
* abilities
* moves
* sprite

https://pokeapi.co/api/v2/pokemon?limit=807 
* Prendere tutti i nomi da mettere nell'elenco

https://pokeapi.co/api/v2/nature?limit=25
* Prende tutte e ( 25 ) le nature

https://pokeapi.co/api/v2/item-attribute/5/
* Questi sono tutti gli oggetti che un pokemon puo tenere in battaglia

---
## Link utili 
* [PokemonApi](https://pokeapi.co/, "Pokemon Api")

## Da fixare 
Il pokemon deve essere al livello giusto, es charizard non puo essere livello 1
( species:url =>  evolution_chain:url => )
Aggiungere una sfera come sfondo del pokemon ( magari anche farla scegliere )
disporli a 3x2 come una vera squadra
 
--- 
# Procedura
1. All'inzio prendo tutti i nomi dei pokemon gli strumenti e le nature
2. Metto tutti i pokemon in un option
3. Ogni volta che ne aggiungo uno faccio un form con abilita mosse etc...