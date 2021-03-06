import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {ROUTES_ENUM} from "../constants/routing.constants";

@Injectable({
    providedIn: "root"
})
export class NavHelperService {

    constructor(
        private router: Router,
    ) {
    }

    public goToDashboard(): void {
        this.goToRoute(ROUTES_ENUM.Dashboard);
    }

    public goToToday(): void {
        this.goToRoute(ROUTES_ENUM.Today);
    }

    public goToSearch(): void {
        this.goToRoute(ROUTES_ENUM.Search);
    }

    public goToInfo(): void {
        this.goToRoute(ROUTES_ENUM.Info);
    }

    public goToProfile(): void {
        this.goToRoute(ROUTES_ENUM.Profile);
    }

    public goToAdmin(): void {
        this.goToRoute(ROUTES_ENUM.Admin);
    }

    public goToLogin(): void {
        this.goToRoute(ROUTES_ENUM.Login);
    }

    public goToAct(act: string): void {
        this.goToRoutes([ROUTES_ENUM.Band, act]);
    }

    public goToDay(month: number, date: number): void {
        this.goToRoutes([ROUTES_ENUM.Day, "month", month.toString(), "date", date.toString()]);
    }

    // GENERAL

    private goToRoute(route: string): void {
        this.goToRoutes([route]);
    }

    private goToRoutes(routes: string[]): void {
        this.router.navigate(routes);
    }
}
