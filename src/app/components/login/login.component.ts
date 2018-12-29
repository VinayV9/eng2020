import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
})

export class LoginComponent {
    email = '';
    password =''; 
    names = ['viny', 'sajid', 'abd', 'ram', 'ravi', 'goku'];
    state = true;
    constructor(){
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    login(){
        alert(`${this.email} ${this.password}`);
    }

    register(){
        alert(`${this.email} ${this.password}`);
    }

    toggle(){
        this.state = !this.state;
    }
}
