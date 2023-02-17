import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { GlobalsComponent } from './globals/globals.component';
import { NavbarComponent } from './globals/navbar/navbar.component';
import { ContactComponent } from './globals/contact/contact.component';
import { AlertsComponent } from './globals/alerts/alerts.component';
import { SuccessComponent } from './globals/alerts/success/success.component';
import { InfoComponent } from './globals/alerts/info/info.component';
import { WarningComponent } from './globals/alerts/warning/warning.component';
import { DangerComponent } from './globals/alerts/danger/danger.component';
import { PrimaryComponent } from './globals/alerts/primary/primary.component';
import { SecondaryComponent } from './globals/alerts/secondary/secondary.component';
import { DarkComponent } from './globals/alerts/dark/dark.component';
import { LightComponent } from './globals/alerts/light/light.component';
import { SearchComponent } from './search/search.component';
import { MainSearchComponent } from './search/main-search/main-search.component';
import { SubSearchComponent } from './search/sub-search/sub-search.component';
import { ResultsComponent } from './search/results/results.component';
import { AccountComponent } from './account/account.component';
import { AuthenticationComponent } from './account/authentication/authentication.component';
import { ReCaptchaComponent } from './account/authentication/re-captcha/re-captcha.component';
import { PasswordResetComponent } from './account/authentication/password-reset/password-reset.component';
import { ManagementComponent } from './account/management/management.component';
import { PrivilegesComponent } from './account/management/privileges/privileges.component';
import { UserAccessComponent } from './account/management/user-access/user-access.component';
import { UserCommComponent } from './account/user_comm/chat-communication.component';
import { ChatBotComponent } from './account/chat-bot/chat-bot.component';
import { AboutUserComponent } from './account/about-user/about-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalsComponent,
    NavbarComponent,
    ContactComponent,
    AlertsComponent,
    SuccessComponent,
    InfoComponent,
    WarningComponent,
    DangerComponent,
    PrimaryComponent,
    SecondaryComponent,
    DarkComponent,
    LightComponent,
    SearchComponent,
    MainSearchComponent,
    SubSearchComponent,
    ResultsComponent,
    AccountComponent,
    AuthenticationComponent,
    ReCaptchaComponent,
    PasswordResetComponent,
    ManagementComponent,
    PrivilegesComponent,
    UserAccessComponent,
    UserCommComponent,
    ChatBotComponent,
    AboutUserComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
