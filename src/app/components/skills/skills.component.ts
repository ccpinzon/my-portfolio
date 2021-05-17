import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  colored = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeColorClass(event: MouseEvent): void {
    // console.log('evento mouseover -> ' , event.type);
    this.colored = event.type === 'mouseover' ? 'colored' : '';
  }
}
