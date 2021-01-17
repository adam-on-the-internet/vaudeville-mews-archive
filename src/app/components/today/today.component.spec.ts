import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {TodayComponent} from "./today.component";
import {LoadingComponent} from "../loading/loading.component";
import {CardComponent} from "../card/card.component";
import {ShowCardComponent} from "../show-card/show-card.component";
import {BodyComponent} from "../body/body.component";

describe("TodayComponent", () => {
    let component: TodayComponent;
    let fixture: ComponentFixture<TodayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TodayComponent, LoadingComponent, CardComponent, ShowCardComponent, BodyComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TodayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
