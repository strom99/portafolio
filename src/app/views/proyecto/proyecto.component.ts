import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  constructor() {}

  @Output() close = new EventEmitter();
  @Input() pro: any = {};

  ngOnInit(): void {}
}
