import { FakeService } from "../db/fake/fakeService";
import { getBoxPlot } from "../utils/boxPlot";

export class StatisticController {
    private service: FakeService;

    constructor(service: FakeService) {
        this.service = service;
      }
    
    getCompleteBoxPlot() {
        return getBoxPlot(this.service.getData());
    }
}