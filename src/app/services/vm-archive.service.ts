import {Injectable} from "@angular/core";
import {Show} from "../models/Show.model";

@Injectable({
    providedIn: "root"
})
export class VmArchiveService {
    public todayShows: Show[] = null;

    public get todayReady(): boolean {
        return this.todayShows !== null;
    }

    public clearValues(): void {
        this.todayShows = null;
    }
}
