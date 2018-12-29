import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
// external modules
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
// custom components
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BotComponent } from "./components/bot/bot.component";
import { LoginComponent } from "./components/login/login.component";
import { LessonsComponent } from "./components/lessons/lessons.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent,
        BotComponent,
        LoginComponent,
        LessonsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
