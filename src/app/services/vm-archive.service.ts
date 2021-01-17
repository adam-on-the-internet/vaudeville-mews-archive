import {Injectable} from "@angular/core";
import {Show} from "../models/Show.model";

@Injectable({
    providedIn: "root"
})
export class VmArchiveService {
    public allShows: Show[] = null;
    public todayShows: Show[] = null;

    public get todayReady(): boolean {
        return this.todayShows !== null;
    }

    public get allReady(): boolean {
        return this.allShows !== null;
    }

    public clearValues(): void {
        this.allShows = null;
    }
}
