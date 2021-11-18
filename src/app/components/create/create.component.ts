import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProyectoService],
})
export class CreateComponent implements OnInit {
  public titulo: string;
  public proyecto: Proyecto;
  public state: string;
  constructor(private _proyectoService: ProyectoService) {
    this.titulo = 'Crear proyecto';
    this.proyecto = new Proyecto('', '', '', '', 2021, '');
    this.state = 'inactive';
  }

  ngOnInit() {}

  onSubmit(form: NgForm) { 
    console.log(this.proyecto);
    this.disableForm(form);
    //validates not empty fields nombre semestre materia anio imagen
    if (
      this.proyecto.nombre != '' &&
      this.proyecto.semestre != '' &&
      this.proyecto.materia != ''
    ) {
      this._proyectoService.saveProyecto(this.proyecto).subscribe(
        response => {
          console.log(response);
          this.state = 'success';
          this.proyecto = new Proyecto('', '', '', '', 2021, '');
          this.enableForm(form);
          form.reset();
        },
        error => {
          console.log(error);
          this.enableForm(form);
          this.state = 'error';
        }
      );
    } else {
      this.enableForm(form);
      this.state = 'error';
    }
  }

  disableForm(form: NgForm) {
    form.form.disable();
  }

  enableForm(form: NgForm) {
    form.form.enable();
  }
}
