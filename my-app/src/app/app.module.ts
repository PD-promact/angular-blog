import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { TagComponent } from './components/tag.component';
import { HomeComponent } from './components/home.component';
import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';
import { TagService } from './service/tag.service';
import { PostService } from './service/post.service';

@NgModule({
    imports: [BrowserModule, FormsModule,ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule],
    declarations: [AppComponent, TagComponent, HomeComponent, RegisterComponent,LoginComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }, TagService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
