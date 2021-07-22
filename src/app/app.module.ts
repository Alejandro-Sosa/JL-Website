import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MarkdownModule } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { StaffComponent } from './pages/staff/staff.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { RulesComponent } from './pages/rules/rules.component';
import { EmotesComponent } from './pages/emotes/emotes.component';
import { NotFoundComponent } from './pages/error/not-found/not-found.component';
import { MainLayoutComponent } from './components/layout/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OnlineCardComponent } from './components/online-card/online-card.component';
import { TopVoterCardComponent } from './components/top-voter-card/top-voter-card.component';
import { MemberQuoteComponent } from './components/member-quote/member-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffComponent,
    PrivacyComponent,
    RulesComponent,
    EmotesComponent,
    NotFoundComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    OnlineCardComponent,
    TopVoterCardComponent,
    MemberQuoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
