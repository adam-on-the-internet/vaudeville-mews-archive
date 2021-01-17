import { TestBed } from "@angular/core/testing";

import { VmArchiveService } from "./vm-archive.service";

describe("VmArchiveService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: VmArchiveService = TestBed.get(VmArchiveService);
    expect(service).toBeTruthy();
  });
});
