import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  iconSelected = '';

  languages = [
    {name: 'Java', icon: 'devicon-java-plain'},
    {name: 'JavaScript', icon: 'devicon-javascript-plain'},
    {name: 'TypeScript', icon: 'devicon-typescript-plain'},
    {name: 'Python', icon: 'devicon-python-plain'},
    {name: 'Ruby', icon: 'devicon-ruby-plain'}
  ];

  frameworks = [
    {name: 'Ionic', icon: 'devicon-ionic-original'},
    {name: 'Angular', icon: 'devicon-angularjs-plain'},
    {name: 'Spring', icon: 'devicon-spring-plain'},
    {name: 'NodeJs', icon: 'devicon-nodejs-plain'},
    {name: 'Express', icon: 'devicon-express-original'},
    {name: 'Nestjs', icon: 'devicon-nestjs-plain'},
    {name: 'Flask', icon: 'devicon-flask-plain'},
  ];


  bds = [
    {name: 'Mongodb', icon: 'devicon-mongodb-plain'},
    {name: 'Oracle', icon: 'devicon-oracle-plain'},
    {name: 'Mysql', icon: 'devicon-mysql-plain'}
  ];

  clouds = [
    {name: 'Firebase', icon: 'devicon-firebase-plain'},
    {name: 'GoogleCloud', icon: 'devicon-googlecloud-plain'},
    {name: 'DigitalOcean', icon: 'devicon-digitalocean-plain'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeColorClass(event: MouseEvent): void {
    // console.log('evento mouseover -> ' , event.target);

    const element = event.currentTarget as HTMLInputElement;
    this.iconSelected = element.id;
    // console.log('icono seleccionado -> ', this.iconSelected);
    // console.log('lang seleccionado -> ', lang.icon);


  }
}
