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

    juliaImages = ['julia_angry.png', 'julia_tongue2_full.png', 'julia_eyes_closed.png', 'julia_eyes_close1.png', 'julia_eyes_close2.png', 'julia_eyes_lookleft.png', 'julia_eyes_quiz.png', 'julia_eyes_lookright.png', 'julia_mouth_narrow_w.png', 'julia_eyes_sad.png', 'julia_eyes_wow.png', 'julia_mouth_medium1.png', 'julia_full.png', 'julia_mouth_closed.png', 'julia_mouth_narrow_o.png', 'julia_mouth_narrow_u.png', 'julia_mouth_smile.png', 'julia_mouth_wide_f.png'];
    timing = 200;
    julia = '';
    textToSay: string;
    ttsOptions: SpeakOptions;
    speechOptions: SpeechRecognitionOptions;
    question: Question;
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
        const id = this.route.snapshot.params["id"];
        this.question = this.questionService.getQuestion(id);
    }

    animateJulia(): void {
        console.log("Button was pressed");
        let i = 0;
        let speakinterval = setInterval(() => { 
            this.julia = this.juliaImages[i];
            i++;
            if (i == this.juliaImages.length) clearInterval(speakinterval);
        }, this.timing);
    }

    //text to speech
    textToSpeech(){
        this.ttsOptions = {
            text: this.textToSay,
            finishedCallback: (data) => {
              this.animateJulia();
              console.log(data);
              console.log("i'm done");
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
