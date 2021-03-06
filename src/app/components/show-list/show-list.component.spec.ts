import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ShowListComponent} from "./show-list.component";
import {HeaderComponent} from "../header/header.component";
import {BodyComponent} from "../body/body.component";
import {CardComponent} from "../card/card.component";
import {LoadingComponent} from "../loading/loading.component";
import {ShowCardComponent} from "../show-card/show-card.component";

describe("ShowListComponent", () => {
    let component: ShowListComponent;
    let fixture: ComponentFixture<ShowListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ShowListComponent, HeaderComponent, BodyComponent, CardComponent, LoadingComponent,
                ShowCardComponent,
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
