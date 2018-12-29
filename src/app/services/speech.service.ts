import { Injectable } from "@angular/core";
import { TNSTextToSpeech, SpeakOptions } from "nativescript-texttospeech";
import { SpeechRecognition, SpeechRecognitionTranscription, SpeechRecognitionOptions} from "nativescript-speech-recognition";


@Injectable()
export class SpeechService {
    textToSay: string;
    ttsOptions: SpeakOptions;
    speechOptions: SpeechRecognitionOptions;

    constructor(private tts: TNSTextToSpeech, private speech: SpeechRecognition){
        this.speechOptions = {
        locale: 'en-Us',
        onResult: (transcription: SpeechRecognitionTranscription) => {
                this.textToSay = '';
                this.textToSay = transcription.text;
                alert(transcription.text);
            }
        }
    }

    //text to speech
    textToSpeech(text){
        this.ttsOptions = {
            text: text,
            finishedCallback: (data) => {
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
