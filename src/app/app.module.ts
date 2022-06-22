import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { AsideComponent } from './layout/aside/aside.component';
import { ListadoAlumnosComponent } from './features/alumnos/listado-alumnos/listado-alumnos.component';
import { GrillaComponent } from './shared/components/grilla/grilla.component';
import { ContarHoyDirective } from './shared/directives/contar-hoy.directive';
import { AvatarComponent } from './shared/components/avatar/avatar.component';
import { BadgeListComponent } from './shared/components/badge-list/badge-list.component';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { DetalleAlumnoComponent } from './features/alumnos/detalle-alumno/detalle-alumno.component';
import { FormAlumnoComponent } from './features/alumnos/form-alumno/form-alumno.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MainComponent,
    ToolbarComponent,
    AsideComponent,
    ListadoAlumnosComponent,
    GrillaComponent,
    ContarHoyDirective,
    AvatarComponent,
    BadgeListComponent,
    BadgeComponent,
    DetalleAlumnoComponent,
    FormAlumnoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
