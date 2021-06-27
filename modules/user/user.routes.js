"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const common_routes_1 = require("../common/common.routes");
class UserRoutes extends common_routes_1.CommonRoutes {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route('/user')
            .get((req, res) => {
            res.status(200).send('List os Users');
        })
            .post((req, res) => {
            res.status(200).send('Post to users');
        });
        this.app.route('/users/:userId')
            .all((req, res, next) => {
            next();
        })
            .get((req, res) => {
            res.status(200).send(`Get resquest id ${req.params.userId}`);
        })
            .put((req, res) => {
            res.status(200).send(`PUT resquest for id ${req.params.userId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`PATCH resquest for id ${req.params.userId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE resquest for id ${req.params.userId}`);
        });
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
