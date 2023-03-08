import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  efectHov(evt: any) {
    let img = evt.target.firstChild;
    let description = img.nextSibling;

    img.classList.add('hov');
    description.style.opacity = '1';
  }
  efectHovLeav(evt: any) {
    let img = evt.target.firstChild;
    let description = img.nextSibling;
    evt.target.firstChild.classList.remove('hov')
    description.style.opacity = '0';
  }

}
