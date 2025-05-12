import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [
  { path: '', redirectTo: '/busqueda', pathMatch: 'full' },
//   { path: 'inicio', component: InicioComponent },
  { path: 'busqueda', component: BusquedaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
