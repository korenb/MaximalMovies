export class Movie {
    id;
    title;
    originalTitle;
    year;
    description;
    duration;
    rating;
    posterUrl;

    constructor() {
        this.id = 0;
    }

    static fromObj(obj) {
        let instance = new Movie();
        
        instance.id = obj.id;
        instance.description = obj.description;
        instance.duration = obj.duration;
        instance.originalTitle = obj.originalTitle;
        instance.title = obj.title;
        instance.year = obj.year;
        instance.rating = obj.rating;
        instance.posterUrl = obj.posterUrl;

        return instance;
    }
}