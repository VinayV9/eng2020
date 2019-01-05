import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
// external modules
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import { TNSTextToSpeech } from "nativescript-texttospeech";
import { SpeechRecognition } from "nativescript-speech-recognition";
// custom components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BotComponent } from "./components/bot/bot.component";
import { LoginComponent } from "./components/login/login.component";
import { LessonsComponent } from "./components/lessons/lessons.component";
import { QuestionComponent } from "./components/question/question.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent,
        BotComponent,
        LoginComponent,
        LessonsComponent,
        QuestionComponent
    ],
    providers: [
        TNSTextToSpeech,
        SpeechRecognition,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
