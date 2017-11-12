import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface ExperienceData {
    title:string;
    company:string;
    duties:string;
    startDate:string;
    endDate:string;
}

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

    public experienceArr:ExperienceData[] = [
        {
            title: "Driftskonsulent",
            company: "TDC Group",
            duties: "Vi er en lille skære af personer, der holder øje med call-centeret, samt griber end ved større nedbrud. Dernæst følger en række opgaver, i proaktiv form. Desuden har min arbejdsgiver givet undertegnet mulighed for, og plads til, at udvikle kompetencerne indenfor Javascript mm. Dette er bl.a. kommet til udtryk ved, at vi i dag har flere brugbare Add-ons til Google Chrome (extentions).",
            startDate: "jul. 2016",
            endDate: "Nuværende"
        },
        {
            title: "Product Specialist",
            company: "Sitel",
            duties: "Coaching samt vidensdeling og undervisningen, samt teknisk support på 2nd-line. Herefter fuldtidsbeskæftigelse i 3rd-line support, med det overordnede ansvar for behandling og dagligdagens gang.",
            startDate: "aug. 2015",
            endDate: "jun. 2016"
        },
        {
            title: "Kunderådgiver",
            company: "YouSee & Sitel",
            duties: "Kunderådgiver som teknisk supporter, med varetagelse af opgaver i både 1st-line, efterfulgt af 2nd-line. I sep. 2014 var opgaverne i YouSee, inden outsourcing til Sitel, der i dag atter er in-house.",
            startDate: "sep. 2014",
            endDate: "jul. 2015"
        },
        {
            title: "Servicemedarbejder & 1. Assistent",
            company: "Dagli' Brugsen & Lidl Danmark",
            duties: "I 2008 fik jeg mit første job i Dagli' Brugsen Ørum Djurs, efterfulgt af Dagli' Brugsen Nimtofte. Før dette nåede jeg også at tjene en mønt eller to som avisbud. \
            I jun. 2011 startede jeg i Lidl Danmark som servicemedarbejder. Først som deltid, og herefter fuldtid efter afslutning på HTX. Her var jeg bl.a. også lukkeansvarlig samt nøglebærer",
            startDate: "august 2008",
            endDate: "dec. 2013"
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
