import { Routes } from '@angular/router';
import { NgifExampleComponent } from './ngif-example/ngif-example.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { NgswicthExampleComponent } from './ngswicth-example/ngswicth-example.component';
import { OuputPadreComponent } from './ouput-padre/ouput-padre.component';

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: '', component: WelcomeComponent },
    { path: 'if', component: NgifExampleComponent },
    { path: 'input-ouput', component: OuputPadreComponent },
    { path: 'for', component: NgforExampleComponent },
    { path: 'switch', component: NgswicthExampleComponent }
];
