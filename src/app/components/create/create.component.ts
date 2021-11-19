import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from 'src/app/services/upload.service';
import { Proyecto } from '../../models/proyecto.model';
import { ProyectoService } from '../../services/proyecto.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [ProyectoService, UploadService],
})
export class CreateComponent implements OnInit {
  public titulo: string;
  public proyecto: Proyecto;
  public status: string;
  public filesToUpload: Array<File>;
  public save_proyecto: Proyecto;

  constructor(
    private _proyectoService: ProyectoService,
    private _uploadService: UploadService
  ) {
    this.titulo = 'Crear proyecto';
    this.proyecto = new Proyecto('', '', '', '', 2021, '');
    this.save_proyecto = new Proyecto('', '', '', '', 2021, '');
    this.status = 'inactive';
    this.filesToUpload = [];
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
        response => this.onSubmitResponse(response, form),
        (error) => {
          console.log(error);
          this.enableForm(form);
          this.status = 'error';
        }
      );
    } else {
      this.enableForm(form);
      this.status = 'error';
    }
  }

  onSubmitResponse(response: any, form: NgForm) {
    console.log(response);
    if (response.proyecto) {
      if (this.filesToUpload) {
        this._uploadService
          .makeFileRequest(
            Global.url + 'upload-image/' + response.proyecto._id,
            [],
            this.filesToUpload,
            'imagen'
          )
          .then((result: any) => {
            this.save_proyecto = result.proyecto;

            this.status = 'success';
            form.reset();
          });
      } else {
        this.save_proyecto = response.proyecto;
        this.status = 'success';
        form.reset();
      }
    } else {
      this.status = 'error';
    }
    this.status = 'success';
    this.proyecto = new Proyecto('', '', '', '', 2021, '');
    this.enableForm(form);
    form.reset();
  }

  fileChangeEvent(fileInput: Event) {
    const element = fileInput.target as HTMLInputElement;
    let fileList: FileList | null = element.files;
    if (fileList && fileList.length > 0) {
      this.filesToUpload = Array.from(fileList);
    }
  }

  disableForm(form: NgForm) {
    form.form.disable();
  }

  enableForm(form: NgForm) {
    form.form.enable();
  }
}
