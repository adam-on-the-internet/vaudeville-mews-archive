import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {ShowCardComponent} from "./show-card.component";
import {CardComponent} from "../card/card.component";

describe("ShowCardComponent", () => {
    let component: ShowCardComponent;
    let fixture: ComponentFixture<ShowCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShowCardComponent, CardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShowCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
