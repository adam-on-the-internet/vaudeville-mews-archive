import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/nav-helper.service";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {

    constructor(
        private navHelper: NavHelperService,
    ) {
    }

    public goToToday() {
        this.navHelper.goToToday();
    }

    public goToSearch() {
        this.navHelper.goToSearch();
    }

    public goToInfo() {
        this.navHelper.goToInfo();
    }

}
