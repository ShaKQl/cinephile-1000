import { defineStore } from 'pinia'
import { options } from "../static";

export const usePopular = defineStore('popular', {
    state: () => ({ 
        moviesList: [],
        tvsList: []
    }),
    actions: {
        async getPopular(type){
            try {
                const result = await fetch(`https://api.themoviedb.org/3/${type}/popular?language=ru&page=1`, options);
                const data = await result.json();
                let array = data.results.filter((elem)=>elem.poster_path != null)
                if (type =='movie') {
                    this.moviesList = array;                    
                }
                else{
                    this.tvsList = array
                }
                // console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
})