import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { QuestionsController } from "./controllers/QuestionsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: QuestionsController,
    view: `<section class="row pt-5"><div class="col-12 text-center pt-5"><button class="btn btn-success rounded text-center fs-1" onclick="app.QuestionsController.setActiveQuestion()">Start Game</button></div></section>`
    // view: null
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]