import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

export const routes = [
    { path: '', component: HomeComponent },
    { path: 'dashboard', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        
    ],
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ]
})
export class HomeModule {
    constructor() {
        console.log("In module");
    }
}