import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { EventEmitter } from "../utils/EventEmitter.js";
import { Pop } from "../utils/Pop.js";

class QuestionsService {
    s

    async getQuestions() {
        // console.log('service');
        const responses = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
        // console.log('questions data', responses.data.results);

        const newQuestions = responses.data.results.map(response => new Question(response))
        AppState.questions = newQuestions

    }

    setActiveQuestion() {
        // random question
        // console.log('active question');
        // const randomQuestionNumber = Math.floor(Math.random() * AppState.questions.length)
        // const randomQuestion = AppState.questions[randomQuestionNumber]
        // console.log('question', randomQuestion);
        // AppState.activeQuestion = randomQuestion

        // console.log('first?', AppState.questions[0]);
        AppState.activeQuestion = AppState.questions[0]

    }

    async startNewGame() {
        const responses = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
        const newQuestions = responses.data.results.map(response => new Question(response))
        AppState.questions = newQuestions
        // console.log('new questions', newQuestions);
        // console.log('did this update my appstate?', AppState.questions);
        AppState.activeQuestion = AppState.questions[0]
    }

    async answerQuestion(answer) {
        if (answer == AppState.activeQuestion.correctAnswer) {
            // console.log('correct answer', answer);
            AppState.answeredCorrect++
            // console.log(AppState.questions)
            AppState.questions.shift()
            // console.log('questions', AppState.questions);
            if (AppState.questions == 0) {
                Pop.success('game over')
                AppState.gamesPlayed++
                return

            }
            // console.log(AppState.questions)
            this.setActiveQuestion()
            return

        }
        // console.log('incorrect answer', answer);
        AppState.answeredIncorrect++
        AppState.questions.shift()
        if (AppState.questions == 0) {
            Pop.success('game over')
            AppState.gamesPlayed++
            return

        }
        this.setActiveQuestion()

    }
}

export const questionsService = new QuestionsService()