import { AppState } from "../AppState.js";



export const GameOverView = `
<section class="row text-center">
<div class="col-12 text-center">
  <p>game over</p>
  <p>Correct Answer Percent: ${(AppState.answeredCorrect + AppState.answeredIncorrect)}%</p>
  <button onclick="app.QuestionsController.startNewGame()" class="btn btn-success rounded">Play Again?</button>
</div>
</section>
`