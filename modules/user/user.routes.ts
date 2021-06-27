import express from 'express';
import {CommonRoutes} from '../common/common.routes';

export class UserRoutes extends CommonRoutes{
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
  }

  configureRoutes() {
    this.app.route('/user')
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send('List os Users');
      })
      .post((req: express.Request, res: express.Response) => {
        res.status(200).send('Post to users');
      });

    this.app.route('/users/:userId')
      .all((req: express.Request, res: express.Response, next: express.NextFunction) => {
        next();
      })
      .get((req: express.Request, res: express.Response) => {
        res.status(200).send(`Get resquest id ${req.params.userId}`)
      })
      .put((req: express.Request, res: express.Response) => {
        res.status(200).send(`PUT resquest for id ${req.params.userId}`);
      })
      .patch((req: express.Request, res: express.Response) => {
        res.status(200).send(`PATCH resquest for id ${req.params.userId}`);
      })
      .delete((req: express.Request, res: express.Response) => {
        res.status(200).send(`DELETE resquest for id ${req.params.userId}`);
      })
    
    return this.app;
  }
}