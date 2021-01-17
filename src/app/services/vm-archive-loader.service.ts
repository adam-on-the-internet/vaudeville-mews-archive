import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {VmArchiveService} from "./vm-archive.service";
import {Observable} from "rxjs";
import {RestUrlBuilder} from "../utilities/rest-url-builder.util";
import {ServiceUrl} from "../constants/rest.constants";
import {CookieHelper} from "../utilities/cookie.util";
import {Show} from "../models/Show.model";

const controller = "vmArchive";

@Injectable({
    providedIn: "root"
})
export class VmArchiveLoaderService {
    constructor(
        private http: HttpClient,
        private vmArchiveService: VmArchiveService,
    ) {
    }

    public load(): void {
        this.vmArchiveService.clearValues();
        this.loadTodayShows();
        this.loadAllShows();
    }

    private loadTodayShows() {
        this.getTodayShows()
            .subscribe((res) => this.vmArchiveService.todayShows = res,
                (error) => {
                    console.log("get today shows failed");
                });
    }

    private loadAllShows() {
        this.getAllShows()
            .subscribe((res) => this.vmArchiveService.allShows = res,
                (error) => {
                    console.log("get all shows failed");
                });
    }

    private getTodayShows(): Observable<Show[]> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.BasicExpress,
            controller,
            collection: "today",
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<Show[]>;
    }

    private getAllShows(): Observable<Show[]> {
        const url = RestUrlBuilder.buildRestUrl({
            service: ServiceUrl.BasicExpress,
            controller,
        });
        return this.http.get(url, CookieHelper.authHeaders) as Observable<Show[]>;
    }
}
