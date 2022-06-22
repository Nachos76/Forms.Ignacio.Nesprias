import { alumno } from './../../../models/alumno.model';
import { Component,  OnInit, ViewChild } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { ALUMNOS } from 'src/app/data/mock-alumnos';
import { DetalleAlumnoComponent } from '../detalle-alumno/detalle-alumno.component';


@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss']
})
export class ListadoAlumnosComponent implements OnInit {

  titulo:string="Listado de Alumnos"
  alumnos:alumno[] = ALUMNOS//recupero el array de alumnos de la contante ALUMNOS que esta en mock-alumnos.ts
  //alumnos!:alumno[]
  //alumnos=ALUMNOS 
  seleccionado!:alumno
  //seleccionados: alumno[] = [];

  @ViewChild('DetalleModal', {static: false}) DetalleModal?: DetalleAlumnoComponent;

  constructor() { }

  ngOnInit(): void {

  }
  seleccionarAlumno($event: any) {
    this.seleccionado = $event;
    //this.seleccionados.push($event); 
    console.log(this.seleccionado);

    this.DetalleModal?.toggleModal();
    this.DetalleModal!.alumno = $event;

  }
}
