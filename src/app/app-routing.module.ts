import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ViewProyectComponent } from './components/view-proyect/view-proyect.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'proyects', component: ProyectsComponent },
  //{ path: 'view-proyect', component: ViewProyectComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'createproyect', component: CreateComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
