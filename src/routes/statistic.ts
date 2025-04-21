import express from 'express';
import { StatisticController } from '../controllers/statistic.controller';
import { StatisticHandler } from '../handlers/statistic.handler';
import { FakeService } from '../db/fake/fakeService';

const router = express.Router();

const fakeSerice = new FakeService()
const statisticController = new StatisticController(fakeSerice);
const statisticHandler = new StatisticHandler(statisticController);

router.get('/', statisticHandler.getBoxPlotData.bind(statisticHandler));


export default router;