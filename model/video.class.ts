//import { Review } from './review.class';
export class Video{
    id:number;
    name:string;
    reviews:Review[] = [];

    constructor (id:number, name:string){
        this.id = id;
        this.name = name;
    }

    getValorationAverage(){
        let valorationAverage:number;
        
        for(let i=0; i <= this.reviews.length; i++){
            valorationAverage =+ this.reviews[i].valoration;
        }

        valorationAverage = valorationAverage/this.reviews.length;

        return valorationAverage;
    }
}
