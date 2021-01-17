import { Component, OnInit } from "@angular/core";
import {VmArchiveService} from "../../services/vm-archive.service";

@Component({
  selector: "app-today",
  templateUrl: "./today.component.html",
  styleUrls: ["./today.component.scss"]
})
export class TodayComponent {

  constructor(
      public vmArchiveService: VmArchiveService,
  ) { }

}
