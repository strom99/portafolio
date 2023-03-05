import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.css']
})
export class KnowledgeComponent implements OnInit {

  active = ''
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    let menu:any = document.querySelector('.menu');
    menu.classList.toggle('active');
  }

}
