import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { TagComponent } from './components/tag.component';
import { RegisterComponent } from './components/register.component';
import { LoginComponent } from './components/login.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tag', component: TagComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);