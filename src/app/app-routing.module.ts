import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeDataComponent } from './change-data/change-data.component'
import {MainBlocksComponent} from './main-blocks/main-blocks.component'
import { StatsComponent } from './stats/stats.component'
import { LoginComponent } from './login/login.component'
import { AuthguardGuard } from './authguard.guard'
const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'changedata', component: ChangeDataComponent , canActivate: [AuthguardGuard] },
  { path: 'explorer', component: MainBlocksComponent, canActivate: [AuthguardGuard]},
  { path: 'stats', component: StatsComponent, canActivate: [AuthguardGuard]},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: '/explorer' , canActivate: [AuthguardGuard]}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {



}




