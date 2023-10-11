export class Question {
    constructor(data) {
        this.category = data.category
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer = data.correct_answer
        this.incorrectAnswer = data.incorrect_answers
    }

    get questionTemplate() {
        return `
<section class="row">
<div class="col-12 p-5 text-center">
<img src="https://i1.sndcdn.com/avatars-bMa9yy5bbkuFzGtO-F91z4w-t500x500.jpg" alt="luigi">
</div>
</section>
<section class="row">
<div class="col-12 text-center p-5 bg-secondary fs-2">${this.question}</div>
</section>
<section class="row">
<div type="button" onclick="app.QuestionsController.answerQuestion('${this.correctAnswer}')" class="col-6 text-center p-5 bg-success rounded text-white fs-3">${this.correctAnswer}</div>
<div type="button" onclick="app.QuestionsController.answerQuestion('${this.incorrectAnswer}')" class="col-6 text-center p-5 bg-danger rounded text-white fs-3">${this.incorrectAnswer}</div>
</section>
`
    }

}