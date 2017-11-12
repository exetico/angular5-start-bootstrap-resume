import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface PortfolioInformation {
    text:string;
    company:string;
    beforeurl:string;
    url:string;
    afterurl:string;
}

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PortfolioComponent implements OnInit {

    public portfolioArr:Array<string> = [
        "Pod.Services (Podcast-link service)",
        "SommerShades (Webshop)",
        "Portfolio (Afgangseksamen i Kommunikation/IT på HTX)",
        "... og meget andet (Se gerne på GitHub - Link findes under <head>).",
    ];
  
    public portfolioInfo:PortfolioInformation = {
        text: "De enkelte projekter kan findes på min virksomheds hjemmeside. Denne er blevet stiftet i forbindelse med et tidligere projekt, men lad dig ikke skræmme – der er i øjeblikket ingen aktive projekter.",
        company: "Nordahl.io",
        beforeurl: "Se mere på ",
        url: "https://nordahl.io",
        afterurl: "."
    };

    constructor() {
    }

    ngOnInit() {
    }

}
