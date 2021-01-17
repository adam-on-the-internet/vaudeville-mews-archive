import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {DayComponent} from "./day.component";
import {CardComponent} from "../card/card.component";
import {ShowCardComponent} from "../show-card/show-card.component";
import {BodyComponent} from "../body/body.component";
import {LoadingComponent} from "../loading/loading.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe("DayComponent", () => {
    let component: DayComponent;
    let fixture: ComponentFixture<DayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DayComponent, CardComponent, ShowCardComponent, BodyComponent, LoadingComponent],
            imports: [HttpClientTestingModule, RouterTestingModule, ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
