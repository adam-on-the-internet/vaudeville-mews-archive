import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SearchComponent} from "./search.component";
import {LoadingComponent} from "../loading/loading.component";
import {BodyComponent} from "../body/body.component";
import {FormsModule} from "@angular/forms";
import {CardComponent} from "../card/card.component";
import {RouterTestingModule} from "@angular/router/testing";
import {HeaderComponent} from "../header/header.component";

describe("SearchComponent", () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent, LoadingComponent, BodyComponent, CardComponent, HeaderComponent],
            imports: [FormsModule, RouterTestingModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
