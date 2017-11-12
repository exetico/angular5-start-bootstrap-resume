import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface NavigationInfo {
    title:string;
    anchor:string;
}

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class NavigationComponent implements OnInit {

    public title:string = "CV";
    public navigationData:NavigationInfo[] = [
        {
            title: "<HEAD>",
            anchor: "About"
        },
        {
            title: "Lidt om mig",
            anchor: "Interests"
        },
        {
            title: "Erfaringer",
            anchor: "Experience"
        },
        {
            title: "Uddannelse",
            anchor: "Education"
        },
        {
            title: "Færdigheder",
            anchor: "Skills"
        },
        {
            title: "Portefølje",
            anchor: "Portfolio"
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    makeLowerCase(value:string):string {
        return value.toLocaleLowerCase();
    }

}