import { Component } from "@angular/core";
import { TNSTextToSpeech, SpeakOptions } from "nativescript-texttospeech";
import { SpeechRecognition, SpeechRecognitionTranscription, SpeechRecognitionOptions} from "nativescript-speech-recognition";
import { QuestionService } from "../../services/question.service";
import { Question } from "../../model/question";
import { ActivatedRoute } from "@angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "question",
    moduleId: module.id,
    templateUrl: "./question.component.html",
})

export class QuestionComponent {

    juliaImages = ['julia_full.png','julia_mouth_wide5.png','julia_mouth_wide5.png','julia_mouth_narrow_o.png','julia_mouth_wide_y.png','julia_mouth_wide5.png','julia_mouth_wide_d_f_k_r_s.png','julia_mouth_narrow_w.png','julia_mouth_narrow_o.png','julia_mouth_wide_d_f_k_r_s.png','julia_mouth_narrow_u.png','julia_mouth_wide5.png','julia_mouth_wide_d_f_k_r_s.png','julia_mouth_wide_sh.png','julia_mouth_wide5.png','julia_mouth_wide_sh.png','julia_mouth_wide_sh.png','julia_mouth_wide_th.png','julia_mouth_wide_f.png','julia_mouth_wide_sh.png','julia_mouth_wide_d_f_k_r_s.png','julia_mouth_closed.png'];
    timing: number = 80; julia: string = 'julia_full.png';

    ttsOptions: SpeakOptions;
    speechOptions: SpeechRecognitionOptions;

    questions: Question[] =[]; question: Question; id: number = 0;
    
    constructor(
        private tts: TNSTextToSpeech,
        private speech: SpeechRecognition,
        private questionService: QuestionService,
        private route: ActivatedRoute){

        this.speechOptions = {
        locale: 'en-Us',
        onResult: (transcription: SpeechRecognitionTranscription) => {
                // this.textToSay = transcription.text;
                // alert(transcription.text);
            }
        }
    }

    ngOnInit(): void {
        let path;

        this.route.params.subscribe((params) => {
            let a = params["id"].split(' ');
            path = `${a[1]}\/${parseInt(a[0])}`;
        });
       
        
        this.questionService.getQuestions(path)
        .subscribe(
            (data: any)=>{ 
                this.questions = data.data;
                this.question = this.questions[this.id];
            },
            (error)=>{ alert(error); }
        );
        
    }
    
    
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    nextQuestion(): void{
        if(this.id >= 0 && this.id < this.questions.length){
            this.question = this.questions[++this.id];
        }else{
            alert("No more questions");
        }
    }
    
    
    animateJulia(): void {
        console.log("Button was pressed");
        let i = 0;
        let speakinterval = setInterval(() => { 
            this.julia = this.juliaImages[this.question.visims[i]];
            i++;
            if (i == this.question.visims.length) clearInterval(speakinterval);
        }, this.timing);
    }

    
    //text to speech
    textToSpeech(){
        this.animateJulia();
        this.ttsOptions = {
            text: this.question.text,
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
