import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Question } from "../model/question";

@Injectable()
export class QuestionService {
    private questions = new Array<Question>(
        { id: 1, text: "hello, how are you", visims: [12, 1, 14, 8, 12, 9, 2, 13, 6, 7] },
        { id: 2, text: "how do you do", visims: [12, 9, 19, 7, 6, 7, 19, 7] },
        { id: 3, text: "how do you do", visims: [12, 9, 19, 7, 6, 7, 19, 7]},
        { id: 4, text: "how is it going", visims: [12, 9, 6, 15, 6, 19, 20, 8, 6, 20] },
        { id: 5, text: "how old are you", visims: [12, 9, 8, 14, 19, 2, 13, 6, 7] },
        { id: 6, text: "how will solve this", visims: [12, 9, 7, 6, 14, 6, 7, 15, 2, 14, 18, 17, 6, 15] },
        { id: 7, text: "what is the output of this programme", visims: [7, 1, 19, 6, 15, 17, 1, 9, 19, 21, 4, 19, 1, 18, 17, 6, 15, 21, 13, 8, 20, 13, 1, 21] },
        { id: 8, text: "tell me about yourself", visims: [19, 4, 14, 21, 6, 1, 21, 9, 19, 6, 5, 15, 4, 14, 18] },
        { id: 9, text: "let's go", visims: [14, 4, 19, 15, 20, 8]}
    );
    
    headers = new HttpHeaders({
      "Content-Type": "application/json"
    });

    constructor(private http: HttpClient){
       
    }

    getQuestions(path: string){
      let url: string =  `assets\${path}.json`
      return this.http.get(url, { headers: this.headers });
    }
    
    getItems(): Question[] {
        return this.questions;
    }

    getQuestion(id: number): Question {
        return this.questions.filter(question => question.id === id)[0];
    }

    totalQuestions(): number{
        return this.questions.length;
    }
}
