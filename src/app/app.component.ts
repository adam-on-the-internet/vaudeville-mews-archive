import {Component, OnInit} from "@angular/core";
import {LogService} from "./services/log.service";
import {VmArchiveLoaderService} from "./services/vm-archive-loader.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
    title = "vaudeville-mews-archive";

    constructor(
        private logService: LogService,
        private vmArchiveLoaderService: VmArchiveLoaderService,
    ) {
    }

    public ngOnInit() {
        this.logStart();
        this.vmArchiveLoaderService.load();
    }

    private logStart() {
        this.logService.log("info", "application visited").subscribe();
    }
}
