import {Component} from "@angular/core";
import {VmArchiveService} from "../../services/vm-archive.service";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent {

    constructor(
        public vmArchiveService: VmArchiveService,
    ) {
    }

}
