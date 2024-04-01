import { Routes } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { SidebarComponent } from './DashBoadPage/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';


export const routes: Routes = [
    { path: 'About',title:"About", component: AboutComponent },
    { path: '', title: "Home Page", component: HomePageComponent}

];