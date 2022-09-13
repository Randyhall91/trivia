import { appState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";
import { setHTML } from "../Utils/Writer.js";





function drawTrivia() {
  let template = ''
  appState.trivias.forEach(t => template += t.Template)
  console.log(template);
  setHTML('trivia', template)
}


export class TriviasController {
  constructor() {
    // console.log('hello from trivas controlller');
    appState.on('trivia', drawTrivia)
    this.getTrivia()
  }


  async getTrivia() {
    try {
      await triviasService.getTrivia()
    } catch (error) {
      console.error('[getTrivia]', error);
    }
  }


}