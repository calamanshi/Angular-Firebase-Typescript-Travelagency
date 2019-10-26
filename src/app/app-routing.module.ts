import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelsPageComponent} from  './travels-page/travels-page.component';
import { ServicesPageComponent} from  './services-page/services-page.component';
import { HomePageComponent} from  './home-page/home-page.component';
import { BlogPageComponent} from  './blog-page/blog-page.component';

const routes: Routes = [
{
        path:"",component: HomePageComponent
},
{
        path: "travels",component: TravelsPageComponent
},
{
        path: "blog",component: BlogPageComponent
},
{
        path: "services",component: ServicesPageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
