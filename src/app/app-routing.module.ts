import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDataComponent } from './change-data/change-data.component'
import {MainBlocksComponent} from './main-blocks/main-blocks.component'
import { StatsComponent } from './stats/stats.component'
const routes: Routes = [
  { path: '', redirectTo: '/explorer', pathMatch: 'full' },
  { path: 'changedata', component: ChangeDataComponent },
  { path: 'explorer', component: MainBlocksComponent },
  { path: 'stats', component: StatsComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {



}




