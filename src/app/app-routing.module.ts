import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./components/login/login.component";
import { LessonsComponent } from "./components/lessons/lessons.component";
import { BotComponent } from "./components/bot/bot.component";
import { QuestionComponent } from "./components/question/question.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "login", component: LoginComponent},
    { path: "lessons", component: LessonsComponent},
    { path: "lessons/:id", component: QuestionComponent},
    { path: "home", loadChildren: "~/app/components/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/components/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/components/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/components/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/components/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
