import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto.model';
import { Global } from 'src/app/services/global';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss'],
  providers: [ProyectoService],
})
export class ProyectsComponent implements OnInit {
  public proyectos: Array<Proyecto>;
  public url: string;
  constructor(private _proyectoService: ProyectoService) {
    this.url = Global.url;
    this.proyectos = [];
  }
  ngOnInit(): void {
    this.getProyectos();
  }
  getProyectos() {
    this._proyectoService.getProyectos().subscribe(
      (response) => {
        if (response.proyectos) {
          this.proyectos = response.proyectos;
        }
      },
      (error) => {
        console.log(<any>error);
      }
    );
  }
}
