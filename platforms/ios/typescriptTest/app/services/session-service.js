"use strict";
var fakeDataServiceModule = require('./fake-data-service');
var SessionService = (function () {
    function SessionService() {
        this._useHttpService = false;
    }
    SessionService.prototype.loadSessions = function () {
        if (this._useHttpService) {
            return this.loadSessionsViaHttp();
        }
        else {
            return this.loadSessionsViaFaker();
        }
    };
    SessionService.prototype.loadSessionsViaHttp = function () {
        return new Promise(function () { });
    };
    SessionService.prototype.loadSessionsViaFaker = function () {
        return new Promise(function (resolve, reject) {
            var speakers = fakeDataServiceModule.generateSpeakers();
            var roomInfos = fakeDataServiceModule.generateRoomInfos();
            var sessions = fakeDataServiceModule.generateSessions(speakers, roomInfos);
            resolve(sessions);
        });
    };
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=session-service.js.map