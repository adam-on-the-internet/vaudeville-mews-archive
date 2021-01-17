import {Component, Input} from "@angular/core";
import {Show} from "../../models/Show.model";

@Component({
    selector: "app-show-list",
    templateUrl: "./show-list.component.html",
    styleUrls: ["./show-list.component.scss"]
})
export class ShowListComponent {
    @Input() public header: string = null;
    @Input() public shows: Show[] = null;
    @Input() public ready: boolean = null;

    public get subtitle(): string {
        if (!this.ready) {
            return "";
        }
        return `Showing ${this.shows.length} show(s)...`;
    }
}
