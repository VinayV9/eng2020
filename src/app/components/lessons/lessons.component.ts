import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { ItemEventData } from "tns-core-modules/ui/list-view"
import * as app from "tns-core-modules/application";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./lessons.component.html",
})

export class LessonsComponent {
    
    constructor(){
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    general: { name: string }[] = [
        { name: "Introduction" },
        { name: "Preparation" },
        { name: "Group Discussion" },
        { name: "General Interview1" },
        { name: "General Interview2" },
        { name: "Difficult Questions" },
        { name: "Greetings" }
    ];

    technical: { name: string }[] = [
        { name: "Algoritms" },
        { name: "Data Structures" },
        { name: "AI and ML" },
        { name: "DBMS" },
        { name: "Operating System" },
        { name: "Computer Networks" },
        { name: "C Programming" }
    ]
    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }
}
