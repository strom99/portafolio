import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './views/general/general.component';
import { ProyectoComponent } from './views/proyecto/proyecto.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
