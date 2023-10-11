import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
import { GameOverView } from "../views/GameOverView.js";


// function _drawQuestion() {
//     let content = ''
//     AppState.questions.forEach(question => content += question.questionTemplate)
//     // console.log('content', content);
//     setHTML('router-view', content)
// }

function _drawGameOver() {
    console.log('why are you not a number', AppState.answeredCorrect, AppState.answeredIncorrect);
    setHTML('router-view', GameOverView)
}

function _drawScore() {
    let content = ` <p class="mb-0">Correct ${AppState.answeredCorrect}</p>
    <p class="mb-0">Incorrect ${AppState.answeredIncorrect}</p>`
    setHTML('Score', content)
}

function _setActiveQuestion() {
    setHTML('router-view', AppState.activeQuestion.questionTemplate)
}

export class QuestionsController {
    constructor() {
        _drawScore()
        this.getQuestions()
        // AppState.on('questions', _drawQuestion)
        AppState.on('activeQuestion', _setActiveQuestion)
        AppState.on('answeredCorrect', _drawScore)
        AppState.on('answeredIncorrect', _drawScore)
        AppState.on('gamesPlayed', _drawGameOver)
    }

    async getQuestions() {
        await questionsService.getQuestions()
        // console.log('questions array', AppState.questions);

    }

    setActiveQuestion() {
        // console.log('invoked');
        questionsService.setActiveQuestion()
    }

    answerQuestion(answer) {
        // console.log('clicked');
        questionsService.answerQuestion(answer)
    }

    async startNewGame() {
        console.log('new game started');
        await questionsService.startNewGame()

    }
}