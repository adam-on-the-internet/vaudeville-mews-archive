import {TestBed} from "@angular/core/testing";

import {VmArchiveLoaderService} from "./vm-archive-loader.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe("VmArchiveLoaderService", () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
    }));

    it("should be created", () => {
        const service: VmArchiveLoaderService = TestBed.get(VmArchiveLoaderService);
        expect(service).toBeTruthy();
    });
});
