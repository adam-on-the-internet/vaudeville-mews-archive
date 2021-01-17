import {Component} from "@angular/core";
import {VmArchiveService} from "../../services/vm-archive.service";
import {Show} from "../../models/Show.model";

@Component({
    selector: "app-today",
    templateUrl: "./today.component.html",
    styleUrls: ["./today.component.scss"]
})
export class TodayComponent {
    public header = "Today";

    public get ready(): boolean {
        return this.vmArchiveService.todayReady;
    }

    public get shows(): Show[] {
        return this.vmArchiveService.todayShows;
    }

    constructor(
        private vmArchiveService: VmArchiveService,
    ) {
    }

}
