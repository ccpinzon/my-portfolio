import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: number = new Date().getFullYear();
  developers = [
    {name: 'Cristhian Rodríguez', github: 'https://github.com/ccpinzon'}
  ];

  constructor() { }

  ngOnInit(): void { }

}
