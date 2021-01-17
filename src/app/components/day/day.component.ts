import {Component, OnInit} from "@angular/core";
import {VmArchiveLoaderService} from "../../services/vm-archive-loader.service";
import {Show} from "../../models/Show.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-day",
    templateUrl: "./day.component.html",
    styleUrls: ["./day.component.scss"]
})
export class DayComponent implements OnInit {
    public shows: Show[] = null;
    public month: string = null;
    public date: string = null;

    public get dateReady(): boolean {
        return this.month !== null && this.date !== null;
    }

    public get header(): string {
        if (!this.dateReady) {
            return "...";
        }
        return `${this.month}/${this.date}`;
    }

    public get showsReady(): boolean {
        return this.shows !== null;
    }

    constructor(
        private vmArchiveLoaderService: VmArchiveLoaderService,
        private route: ActivatedRoute,
    ) {
    }

    public ngOnInit() {
        this.loadDayShows();
    }

    private loadDayShows() {
        this.month = this.route.snapshot.paramMap.get("month");
        this.date = this.route.snapshot.paramMap.get("date");
        this.vmArchiveLoaderService.getShowsByDay(this.month, this.date)
            .subscribe((res) => this.shows = res,
                (error) => {
                    console.log("get shows failed");
                });
    }

}
