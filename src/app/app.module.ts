import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './todo/header/header.component';
import { SectionComponent } from './todo/section/section.component';
import { FooterComponent } from './todo/footer/footer.component';
import { TodoInfoModalComponent } from './todo/section/todo-info-model/todo-info-modal.component';
import { MenuComponent } from './shared/menu/menu.component';
import { Header2Component } from './shared/header2/header2.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    TodoInfoModalComponent,
    MenuComponent,
    Header2Component,
    HomeComponent,
    NotfoundComponent,
    LoginComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,//引入這個
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
