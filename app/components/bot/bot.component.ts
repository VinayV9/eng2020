import { Component } from "@angular/core";
import { TNSTextToSpeech, SpeakOptions } from "nativescript-texttospeech";
import { SpeechRecognition, SpeechRecognitionTranscription, SpeechRecognitionOptions} from "nativescript-speech-recognition";
import { QuestionService } from "../../services/question.service";
import { Question } from "../../model/question";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "ns-bot",
    moduleId: module.id,
    templateUrl: "./bot.component.html",
})

export class BotComponent { 

    juliaImages = ['julia_full.png','julia_mouth_wide5.png','julia_mouth_wide5.png','julia_mouth_narrow_o.png','julia_mouth_wide_y.png','julia_mouth_wide5.png','julia_mouth_wide_d_f_k_s.png','julia_mouth_narrow_w.png','julia_mouth_narrow_o.png','julia_mouth_wide_d_f_k_s.png','julia_mouth_narrow_u.png','julia_mouth_wide5.png','julia_mouth_wide_d_f_k_s.png','julia_mouth_wide_sh.png','julia_mouth_wide5.png','julia_mouth_wide_sh.png','julia_mouth_wide_sh.png','julia_mouth_wide_th.png','julia_mouth_wide_f.png','julia_mouth_wide_sh.png','julia_mouth_wide_d_f_k_s.png','julia_mouth_closed.png'];
    timing = 200;
    julia = '';
    textToSay: string;
    ttsOptions: SpeakOptions;
    speechOptions: SpeechRecognitionOptions;
    question: Question;
    visimMapIdx: number[]
    //create another control that increases or dcreases the timing and plays again
    //let increment or decrement be 10ms
    //play the sound also
    //find the sweetspot and set that value. Assume speechrate to be 1.0
    
    constructor(
        private tts: TNSTextToSpeech,
        private speech: SpeechRecognition,
        private questionService: QuestionService,
        private route: ActivatedRoute
        ){
        this.speechOptions = {
        locale: 'en-Us',
        onResult: (transcription: SpeechRecognitionTranscription) => {
                this.textToSay = '';
                this.textToSay = transcription.text;
                alert(transcription.text);
            }
        }
    }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.question = this.questionService.getQuestion(id);
        this.textToSay = this.question.text;
        this.visimMapIdx = this.question.visims;
    }

    nextQuestion(id: number): void{
        if(id < this.questionService.totalQuestions()){
            this.question = this.questionService.getQuestion(id+1)
        }else{
            alert("No more questions");
        }
    }

    animateJulia(): void {
        console.log("Button was pressed");
        let i = 0;
        let speakinterval = setInterval(() => { 
            this.julia = this.juliaImages[this.visimMapIdx[i]];
            i++;
            if (i == this.visimMapIdx.length) clearInterval(speakinterval);
        }, this.timing);
    }

    //text to speech
    textToSpeech(){
        this.animateJulia();
        this.ttsOptions = {
            text: this.textToSay,
            finishedCallback: (data) => {
              console.log(data);
              console.log("i'm done");
              this.julia = "julia_full.jpg";
            }
          };
          this.tts.speak(this.ttsOptions);
    }

    //sppech to text
    speechToText(){
        this.speech.available().then(
            result => { result ? this.startListening(): alert('Speech recognization is not available');},
            err => { console.log(err);});
    }

    startListening(){
        this.speech.startListening(this.speechOptions).then(
          () => { console.log('started listing'); },
          err => { console.log(err); }
        );
    }

    stopListening(){
        this.speech.stopListening().then(
          () => { console.log('stopped listening');},
          err => { console.log(err);}
        );
    }
}
