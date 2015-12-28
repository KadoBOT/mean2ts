import {Component} from "angular2/core";

@Component({
    selector: "my-app",
    template: "<h1>{{title}}</h1>"
})
export class AppComponent {
    title: string;
    constructor() {
        this.title = "MEAN Stack feat. Angular 2 & Typescript!";
    }
}