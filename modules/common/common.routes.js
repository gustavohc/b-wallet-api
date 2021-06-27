"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonRoutes = void 0;
class CommonRoutes {
    constructor(app, name) {
        this.app = app;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.CommonRoutes = CommonRoutes;
