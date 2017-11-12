import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {

    deviconArr:Array<string> = [
        "devicons-html5",
        "devicons-css3",
        "devicons-sass",
        "devicons-less",
        "devicons-javascript",
        "devicons-jquery",
        "devicons-bootstrap",
        "devicons-wordpress",
        "devicons-php",
        "devicons-joomla",
        "devicons-npm",
        "devicons-linux",
        "devicons-docker",
        "devicons-chrome",
    ];

    devinfoArr:Array<string> = [
        "Microsoft Office, Final Cut Pro X, Adobe Photoshop, Notepad++, Visual Studio Code (Atom), cPanel og Webmin er alle programmer og værktøjer, som jeg har benytter i større omfang.",
        "Mestre HTML og CSS3, og har arbejdet med dette i mange år.",
        "Har gjort kendskab med JavaScript og jQuery indenfor de seneste par år, og udvider fortsat disse kompetenser",
        "Har erfaring med webshops bygget på WooCommerce-kernen, hjemmebryggede plugins og hård tilpasning i Wordpress. Heraf kommer også erfaring med PHP, men i et begrænset omfang som jeg dog forsøger at udvide, som udfodringerne dukker op.",
        "En terminal tager ikke livet af mig, og som daily-driver benytter jeg Linux Mint på både bærbar og stationær. Desuden er jeg ganske kendt i Debian, og benytter docker-applikationer til mange formål. Dernæst har jeg også stor fornøjelse med at rode med Home Assistant.",
        "Udvikling af udvidelser til Google Chrome, har jeg gode erfaringer med på hobby-plan."
    ];

    bonusinfoArr:Array<string> = [
        "Stræber efter at udnytte hvert eneste minut, og heraf glad for at stable nye projekter på banen.",
        "Ansvarsfuld uanset hvilken opgave der skal varetages.",
        "Ganske snaksagelig. Nogle vil nok påstå lidt \"for meget 😊\" til tider, men jeg har lært at man kommer langt med åbenhed og ærlighed.",
        "Driver et forum med mange aktive medlemmer, med Discourse som motor.",
        "Hjælper frivilligt Meremobil.dk med deres daglige pedel-opgaver, der drives af Wordpress.",
        "Altid bliver ringet op, når andre har problemer med deres it.",
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
