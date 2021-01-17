import {Component, Input} from "@angular/core";
import {Show} from "../../models/Show.model";

@Component({
    selector: "app-show-card",
    templateUrl: "./show-card.component.html",
    styleUrls: ["./show-card.component.scss"]
})
export class ShowCardComponent {
    @Input() public show: Show = null;

    public get hasShow(): boolean {
        return this.show !== null;
    }

    public get lineup(): string {
        let tempLineup = "";
        this.show.acts.forEach((act, index) => {
            if (index > 0) {
                tempLineup += ", ";
            }
            tempLineup += act;
        });
        return tempLineup;
    }
}
