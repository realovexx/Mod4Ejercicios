import { API_RM } from "../constants/Api.constants";

class RickAndMortyService{

    async getAllCharacters(){
        const response = await fetch(API_RM.CHARACTERS());
        //interceptor
        return response.json();
    }

    async getAllCharacterById(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        //interceptor
        return response.json();
    }

}

export default new RickAndMortyService();