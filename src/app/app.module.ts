import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ViewProyectComponent } from './components/view-proyect/view-proyect.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { CreateComponent } from './components/create/create.component';
import { ProyectoService } from './services/proyecto.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProyectsComponent,
    ViewProyectComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    ErrorComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProyectoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
