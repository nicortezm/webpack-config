import { buscarHeroeAsync, buscarHeroe } from './promesas';


const heroesIds = ['capi','iron','spider'];
const heroesPromesas = heroesIds.map( buscarHeroe );


export const obtenerHeroesArr = async() => {
    
    const heroesArr = [];

    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

    return heroesArr;

};