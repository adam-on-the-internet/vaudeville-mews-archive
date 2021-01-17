import {Component} from "@angular/core";
import {NavHelperService} from "../../services/nav-helper.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent {
    public actName: string = null;
    public month = 1;
    public date = 1;

    public get availableDays(): string[] {
        const months = [];
        for (let i = 1; i < 32; i++) {
            months.push(i.toString());
        }
        return months;
    }

    public get availableMonths(): string[] {
        const months = [];
        for (let i = 1; i < 13; i++) {
            months.push(i.toString());
        }
        return months;
    }

    constructor(
        public navHelperService: NavHelperService,
    ) {
    }

    public checkAct() {
        this.actName = this.actName.replace(" ", "_");
        this.navHelperService.goToAct(this.actName);
    }

    public checkDate() {
        this.navHelperService.goToDay(this.month, this.date);
    }

}
