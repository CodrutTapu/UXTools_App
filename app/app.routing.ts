import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signin.component';
import { SignUpComponent } from './signup.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard.component';
import { PersonaComponent } from './persona.component';
import { newPersonaComponent } from './newPersona.component';
import { ViewPersonaComponent } from './view.persona.component';
import { test } from './test';


const appRoutes: Routes = [
    { path: 'signin', component: SignInComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'edit/:author_id/:project_type/:project_id/:project_name', component: PersonaComponent },
    { path: 'view/:author_id/:project_type/:project_id/:project_name', component: ViewPersonaComponent },
    { path: 'new/persona/:author_id', component: newPersonaComponent },
    { path: 'test', component: test },
    { path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
