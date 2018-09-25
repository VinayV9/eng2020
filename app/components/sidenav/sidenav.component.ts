import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { Component, OnInit,  ViewChild } from "@angular/core";

@Component({
    selector: "ns-sidenav",
    moduleId: module.id,
    templateUrl: "./components/sidenav/sidenav.component.html",
})

export class SideNavComponent implements OnInit{ 

    items: any[];
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
   
    constructor(){
        
    }
    
    ngOnInit(): void {
        this.items = data;
    }

    onOpenDrawerTap() {
        this.drawerComponent.sideDrawer.showDrawer();
    }

    onCloseDrawerTap() {
        this.drawerComponent.sideDrawer.closeDrawer();
    }

}

const data = [
    {
        name: "Lesson1",
        id: 1
    },
    {
        name: "Lesson2",
        id: 2
    },
    {
        name: "Lesson3",
        id: 3
    },
    {
        name: "Lesson4",
        id: 4
    },
    {
        name: "Lesson5",
        id: 5
    },
    {
        name: "Lesson6",
        id: 6
    },
    {
        name: "Lesson7",
        id: 7
    },
    {
        name: "Lesson8",
        id: 8
    },
    {
        name: "Lesson9",
        id: 9
    }
]