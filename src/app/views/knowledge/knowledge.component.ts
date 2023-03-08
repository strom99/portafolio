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
    let menu:any = document.querySelector('.icono');
    menu.classList.toggle('active');
    let lis = menu.closest('.menu').querySelectorAll('li');
    lis.forEach((tag:any) => {
      tag.classList.toggle('animacion');
    });
  }

  toggle2() {
    let menu:any = document.querySelector('.icono2');
    menu.classList.toggle('active');
    let lis = menu.closest('.menu2').querySelectorAll('li');
    lis.forEach((tag:any) => {
      tag.classList.toggle('animacion');
    });
  }

  toggle3() {
    let menu:any = document.querySelector('.icono3');
    menu.classList.toggle('active');
    let lis = menu.closest('.menu3').querySelectorAll('li');
    lis.forEach((tag:any) => {
      tag.classList.toggle('animacion');
    });
  }



}
