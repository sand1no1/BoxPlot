import { StatisticController } from "../controllers/statistic.controller";
import { Request, Response, NextFunction } from 'express';

export class StatisticHandler {
    statisticController: StatisticController;
    constructor(statisticController: StatisticController){
        this.statisticController = statisticController;
    }

    async getBoxPlotData(request: Request, response: Response, next: NextFunction){
        try{
            const data = this.statisticController.getCompleteBoxPlot();
            response.json(data)
        } catch (error){
            response.status(500).json({ error: 'an error' })
        }
    }
}