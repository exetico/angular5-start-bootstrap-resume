import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface PersonalInformation {
    firstName:string;
    lastName:string;
    address:Address;
    email:string;
    description:string;
    phoneNumber:string;
}

export interface Address {
    zipCode:string;
    city:string;
    area:string;
    country:string;
}

export interface SocialInfo {
    iconClassInfo:string;
    url:string;
    target:string;
}

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {

    public personalInfo:PersonalInformation = {
        firstName: "Tobias",
        lastName: "Nordahl",
        address: {
            zipCode: "8000",
            city: "Aarhus",
            area: "Midtjylland",
            country: "Danmark",
        },
        email: "post@tobiasnordahl.dk",
        description: "Front-End Designer med ambitionerne om langt mere & passion for mange tekniske aspekter.",
        phoneNumber: "(+45) 40 30 44 61"
    };

    public socialData:SocialInfo[] = [
        {
            iconClassInfo: "fa fa-facebook fa-stack-1x fa-inverse",
            url: "https://facebook.com/exetico",
            target: "_blank"
        },
        {
            iconClassInfo: "fa fa-linkedin fa-stack-1x fa-inverse",
            url: "https://www.linkedin.com/in/tobias-nordahl-43b295103/",
            target: "_blank"
        },
        {
            iconClassInfo: "fa fa-github fa-stack-1x fa-inverse",
            url: "https://github.com/exetico/",
            target: "_blank"
        },
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
