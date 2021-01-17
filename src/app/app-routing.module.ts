import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {ROUTES_ENUM} from "./constants/routing.constants";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {SearchComponent} from "./components/search/search.component";
import {TodayComponent} from "./components/today/today.component";
import {BandComponent} from "./components/band/band.component";
import {DayComponent} from "./components/day/day.component";

const routes: Routes = [
    // main
    {path: ROUTES_ENUM.Dashboard, component: DashboardComponent},
    {path: ROUTES_ENUM.Info, component: InfoComponent},
    {path: ROUTES_ENUM.Login, component: LoginComponent},
    {path: ROUTES_ENUM.Profile, component: ProfileComponent},
    {path: ROUTES_ENUM.Admin, component: AdminComponent},
    // app
    {path: ROUTES_ENUM.Search, component: SearchComponent},
    {path: ROUTES_ENUM.Today, component: TodayComponent},
    {path: ROUTES_ENUM.Band + "/:act", component: BandComponent},
    {path: ROUTES_ENUM.Day + "/month/:month/date/:date", component: DayComponent},
    // default
    {path: "**", redirectTo: ROUTES_ENUM.Dashboard},
];

@NgModule({
    exports: [RouterModule],
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
