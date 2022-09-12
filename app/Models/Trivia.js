


export class Trivia {
  constructor(data) {
    this.catagory = data.catagory
    this.type = data.type
    this.difficulty = data.difficulty
    this.question = data.question
    this.correct_anser = data.correct_answer
    this.incorrect_answer = this.incorrect_answer
  }

  get Template() {
    return/*html*/`
  <div class="col-md-6">
    <div>
      <h1>${this.catagory}</h1>
    </div>
    <div>
      <h3>${this.question}</h3>
    </div>
    <div>
    <button class="btn btn-primary" type="button">Reveal Answer</button>
    </div>
  </div>
  `
  }
}
