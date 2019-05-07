import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDataComponent } from './change-data/change-data.component'
import {MainBlocksComponent} from './main-blocks/main-blocks.component'
const routes: Routes = [
  { path: '', redirectTo: '/explorer', pathMatch: 'full' },
  { path: 'changedata', component: ChangeDataComponent },
  { path: 'explorer', component: MainBlocksComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {



}




