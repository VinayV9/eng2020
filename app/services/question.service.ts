import { Injectable } from "@angular/core";

import { Question } from "../model/question";

@Injectable()
export class QuestionService {
    private questions = new Array<Question>(
        { id: 1, text: "hello, how are you", visims: [] },
        { id: 3, text: "how do you do", visims: []},
        { id: 4, text: "how is it going", visims: [] },
        { id: 5, text: "how old are you", visims: [] },
        { id: 6, text: "how will solve this", visims: [] },
        { id: 7, text: "what is the output of this programme", visims: [] },
        { id: 8, text: "tell me about yourself", visims: [] },
        { id: 9, text: "let's go", visims: []}
    );

    getItems(): Question[] {
        return this.questions;
    }

    getQuestion(id: number): Question {
        return this.questions.filter(question => question.id === id)[0];
    }
}
