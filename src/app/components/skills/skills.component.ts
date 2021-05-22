import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  iconSelected = '';

  languages = [
    {name: 'JAVA', icon: 'devicon-java-plain'},
    {name: 'JAVASCRIPT', icon: 'devicon-javascript-plain'},
    {name: 'TYPESCRIPT', icon: 'devicon-typescript-plain'},
    {name: 'PYTHON', icon: 'devicon-python-plain'},
    {name: 'RUBY', icon: 'devicon-ruby-plain'}
  ];

  frameworks = [
    {name: 'Icon', icon: 'devicon-ionic-original'},
    {name: 'Angular', icon: 'devicon-angularjs-plain'},
    {name: 'Spring Boot', icon: 'devicon-spring-plain'},
    {name: 'Node js', icon: 'devicon-nodejs-plain'},
    {name: 'Express', icon: 'devicon-express-original'},
    {name: 'Nest js', icon: 'devicon-nestjs-plain'},
    {name: 'Flask', icon: 'devicon-flask-plain'},
    {name: 'DJango', icon: 'devicon-django-plain'}
  ];


  bds = [
    {name: 'Mongodb', icon: 'devicon-mongodb-plain'},
    {name: 'Oracle', icon: 'devicon-oracle-plain'},
    {name: 'Mysql', icon: 'devicon-mysql-plain'}
  ];

  clouds = [
    {name: 'Firebase', icon: 'devicon-firebase-plain'},
    {name: 'Google Cloud', icon: 'devicon-googlecloud-plain'},
    {name: 'Digital Ocean', icon: 'devicon-digitalocean-plain'}
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
