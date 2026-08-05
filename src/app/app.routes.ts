import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path:"home",
        loadComponent: () => import("./home/home").then((c) => c.Home)
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "hime"
    }
];
