import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AboutComponent } from "./about/about.component";
import { SignInComponent } from "./account/sign-in/sign-in.component";
import { SignUpComponent } from "./account/sign-up/sign-up.component";

const appRoutes: Routes = [
    {path: '', component: AboutComponent},
    {path: 'sign_up', component: SignUpComponent},
    {path: 'sign_in', component: SignInComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}