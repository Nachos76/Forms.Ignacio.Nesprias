import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { alumno } from '../../../models/alumno.model';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.scss']
})
export class GrillaComponent implements OnInit {
@Input()
  titulo!:string
@Input()
  datos!:any[]
@Output()
  enviarSeleccionado = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarItem(item:any)
  { 
    this.enviarSeleccionado.emit(item);  

  }
  agregarAlumno ($event: any)
  { 
    this.datos.push($event); 
    console.log($event);
   

  }
}
