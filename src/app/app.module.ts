import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {HeaderComponent} from "./components/header/header.component";
import {BodyComponent} from "./components/body/body.component";
import {LoadingComponent} from "./components/loading/loading.component";
import {CardComponent} from "./components/card/card.component";
import {BodyAltComponent} from "./components/body-alt/body-alt.component";
import {SearchComponent} from "./components/search/search.component";
import {TodayComponent} from "./components/today/today.component";
import { ShowCardComponent } from "./components/show-card/show-card.component";
import { DayComponent } from "./components/day/day.component";
import { BandComponent } from "./components/band/band.component";
import { ShowListComponent } from "./components/show-list/show-list.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        InfoComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        ProfileComponent,
        AdminComponent,
        HeaderComponent,
        BodyComponent,
        LoadingComponent,
        CardComponent,
        BodyAltComponent,
        SearchComponent,
        TodayComponent,
        ShowCardComponent,
        DayComponent,
        BandComponent,
        ShowListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
