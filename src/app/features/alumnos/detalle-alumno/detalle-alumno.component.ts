import { Component, Input, OnInit } from '@angular/core';
import { alumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.component.html',
  styleUrls: ['./detalle-alumno.component.scss']
})
export class DetalleAlumnoComponent implements OnInit {
  showModal = false;
  alumno!:alumno;
  defaultImagen : string = 'assets/avatars/avatar.png'

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }

}
