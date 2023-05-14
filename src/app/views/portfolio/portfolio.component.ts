import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}
  show: boolean = false;
  hijo: any = {};

  proyectos: any = [
    {
      titulo: 'Mensajes Random',
      tipo: 'Proyecto personal',
      img: 'proyecto5',
      descripcioncorta: 'Carga de mensajes random de una Api',
      descripcion:
        'Este proyecto fue una iniciativa personal en la que decidí conectarme a una API externa para obtener mensajes aleatorios y mostrarlos en mi sitio web. Para lograr esto, utilicé JavaScript para hacer una solicitud a la API y obtener los datos necesarios. Luego, utilicé HTML y CSS para crear una interfaz de usuario atractiva para mostrar los mensajes.',
      ano: '2021',
    },
    {
      titulo: 'George Prada',
      tipo: 'Stucom proyecto',
      img: 'proyecto1',
      descripcioncorta: 'Pagina para comprar productos online de gimnasio',
      descripcion:
        'Esta pagina fue un proyecto de primer año con un grupo de 4 compañeros, se decicio la idea de una pagina donde se vendan productos de gimnasio como ropa o cursos de entrenamiento para diferente tipo de objetivo. Se realizo con codigo HTML, CSS, JS, PHP para control de los datos antes de guardarlos en la BBDD y MYSQL para guardar los datos.',
      año: '2022',
    },
    {
      titulo: 'MyBalance',
      tipo: 'Proyecto personal',
      img: 'proyecto3',
      descripcioncorta:
        'Página para llevar un control de los gastos y ingresos de distintas cuentas',
      descripcion:
        'El proposito de esta pagina es controlar tus finanzas , tus ingresos y gastos , pudiendo crear distintas cuentas como una tarjeta de credito en la que destinas diferentes tipos de cuentas para un proposito, ya sea ahorro y proyecto. Tambien permitiria ver la evolucion de cada cuenta con graficos',
      año: '2022',
    },
    {
      titulo: 'Ouden',
      tipo: 'Stucom proyecto',
      img: 'proyecto2',
      descripcioncorta: 'Página para vender y buscar casas y planos en venta',
      descripcion:
        'Es un proyecto de ultimo año en mi Grado de DAW, es una pagina para vender y mostrar diseños de casas para construir , que publicarian empresas de construcciones para mas o menos ofrecer una estimacion de cuanto costaria cada construccion, ofreciendo un presupuesto al usuario y su contacto a la empresa.',
      año: '2023',
    },
  ];

  open(proyecto: any) {
    this.show = !this.show;
    this.hijo = proyecto;
    console.log(this.show);
  }
  ngOnInit(): void {}

  efectHov(evt: any) {
    let img = evt.target.firstChild;
    let description = img.nextSibling;

    img.classList.add('hov');
    description.style.opacity = '1';
  }
  efectHovLeav(evt: any) {
    let img = evt.target.firstChild;
    let description = img.nextSibling;
    evt.target.firstChild.classList.remove('hov');
    description.style.opacity = '0';
  }
}
