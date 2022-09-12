import { appState } from "../AppState.js"
import { Trivia } from "../Models/Trivia.js"
import { triviaServer } from "./AxiosService.js"



class TriviasService {

  async getTrivia() {
    const res = await triviaServer.get('/api.php', {
      params: {
        amount: 10,
        catagory: 10,
        difficulty: 'easy',
        type: 'multiple'
      }
    })


    console.log(res);

    appState.trivias = res.data.map(rawData => new Trivia(rawData))
  }


}


export const triviasService = new TriviasService()