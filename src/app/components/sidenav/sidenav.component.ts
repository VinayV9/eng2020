import { RadSideDrawerComponent, SideDrawerType } from "nativescript-ui-sidedrawer/angular";
import { Component, OnInit,  ViewChild } from "@angular/core";

@Component({
    selector: "ns-sidenav",
    moduleId: module.id,
    templateUrl: "./sidenav.component.html",
    styles: [`
    .fa {
      font-family: FontAwesome, fontawesome-webfont;
      font-size:20;
    }
  `]
})

export class SideNavComponent implements OnInit{ 

    items: any[];
    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
   
    constructor(){
        
    }
    
    ngOnInit(): void {
        this.items = data;
    }
    
    public toggle() {
        this.drawerComponent.sideDrawer.toggleDrawerState();
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
        name: "Question1",
        id: 1
    },
    {
        name: "Question2",
        id: 2
    },
    {
        name: "Question3",
        id: 3
    },
    {
        name: "Question4",
        id: 4
    },
    {
        name: "Question5",
        id: 5
    },
    {
        name: "Question6",
        id: 6
    },
    {
        name: "Question7",
        id: 7
    },
    {
        name: "Question8",
        id: 8
    },
    {
        name: "Question9",
        id: 9
    }
];