import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss'],
})
export class FormAlumnoComponent implements OnInit {
  // @Input()
  titulo: string = 'Nuevo Alumno';
  showModal = false;
  
  @Output()
  enviarNuevoAlumno = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  formularioAlumno = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required]],
    dni: [''],
    sexo: [''],
    fechaNacimiento: ['', [Validators.required]],
    direccion: [''],
    telefono: [''],
    email: ['', [Validators.required, Validators.email]],
    conocimientos: [['']],
    cursos: [['']],
    imagen: [''],
    descripcion: [''],
    estado: ['Activo'],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        this.passwordMatchValidator,
      ],
    ],
  });

  guardarAlumno() {
    //console.log(this.formularioAlumno.value);
    this.enviarNuevoAlumno.emit(this.formularioAlumno.value);  
    this.showModal = !this.showModal;
    this.formularioAlumno.reset()
  }

  passwordMatchValidator(g: AbstractControl) {
    return g.parent?.get('password')?.value ===
      g.parent?.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
