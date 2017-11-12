import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface EducationData {
    school:string;
    degree:string;
    department:string;
    startDate:string;
    endDate:string;
}

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class EducationComponent implements OnInit {

    public educationArr:EducationData[] = [
        {
            school: "Viden Djurs",
            degree: "Højere Teknisk Eksamen",
            department: "Teknisk Gymnasium med særligt fokus på kommunikation og IT, med bl.a. linje-fag som Kommunikation/IT, Design og Teknology - hvilket i sig selv, nok ikke er så sigende igen.",
            startDate: "aug. 2010",
            endDate: "maj 2013"
        },
        {
            school: "Norddjurs Friskole & Hindholm Efterskole",
            degree: "Grundskolens 9. klasse eksamen",
            department: "Folke-, fri og efterskole fra 1.-10. klasse. Først på Ørum Skole, og herefter Norddjurs Friskole midt i forløbet. Det første halvår af 10. klasse på Hindholm Efterskole blev afbrudt, hvor jeg i stedet begyndte på et fuldtidsjob, inden start på Viden Djurs.",
            startDate: "...før 2000",
            endDate: "jun. 2009"
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
