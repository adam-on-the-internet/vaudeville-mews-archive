import {Component, OnInit} from "@angular/core";
import {Show} from "../../models/Show.model";
import {VmArchiveLoaderService} from "../../services/vm-archive-loader.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-band",
    templateUrl: "./band.component.html",
    styleUrls: ["./band.component.scss"]
})
export class BandComponent implements OnInit {
    public shows: Show[] = null;
    public act: string = null;

    public get actReady(): boolean {
        return this.act !== null;
    }

    public get actFixed(): string {
        return this.act.replace("_", " ");
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
        this.loadActShows();
    }

    private loadActShows() {
        this.act = this.route.snapshot.paramMap.get("act");
        this.vmArchiveLoaderService.getShowsByAct(this.act)
            .subscribe((res) => this.shows = res,
                (error) => {
                    console.log("get shows failed");
                });
    }

}
