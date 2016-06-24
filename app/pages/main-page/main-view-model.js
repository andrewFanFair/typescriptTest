"use strict";
var observable_1 = require('data/observable');
var session_page_view_model_1 = require('../session-page/session-page-view-model');
var session_service_1 = require('../../services/session-service');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        this._allSessions = new Array();
        this._sessionService = new session_service_1.SessionService();
        this.set('isLoading', true);
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._sessions;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        var _this = this;
        this._sessionService.loadSessions()
            .then(function (result) {
            _this.pushSessions(result);
            _this.onDataLoaded();
        });
    };
    MainViewModel.prototype.pushSessions = function (sessionsFromService) {
        var _this = this;
        sessionsFromService.forEach(function (session) {
            var newSession = new session_page_view_model_1.SessionViewModel(session);
            _this._allSessions.push(newSession);
        });
    };
    MainViewModel.prototype.onDataLoaded = function () {
        this.set('isLoading', false);
        this.filter();
    };
    MainViewModel.prototype.filter = function () {
        this._sessions = this._allSessions;
        this.notify({
            object: this,
            eventName: observable_1.Observable.propertyChangeEvent,
            propertName: 'sessions',
            value: this._sessions,
        });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map