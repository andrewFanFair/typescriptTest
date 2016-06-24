"use strict";
var observable_1 = require('data/observable');
var session_page_view_model_1 = require('../session-page/session-page-view-model');
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        _super.call(this);
        this._tempSessions = new Array();
        this._allSessions = new Array();
    }
    Object.defineProperty(MainViewModel.prototype, "sessions", {
        get: function () {
            return this._allSessions;
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.init = function () {
        var _this = this;
        var sessionArray = [
            {
                id: '1',
                title: 'session 1',
                start: new Date().toDateString(),
                end: new Date().toDateString(),
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: '',
                },
                speakers: [],
                description: 'session 1 description',
                descriptionShort: 'session 1 short description',
                calendarEventId: '',
                isBreak: false,
            },
            {
                id: '2',
                title: 'session 2',
                start: new Date().toDateString(),
                end: new Date().toDateString(),
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: '',
                },
                speakers: [],
                description: 'session 1 description',
                descriptionShort: 'session 1 short description',
                calendarEventId: '',
                isBreak: false,
            },
            {
                id: '3',
                title: 'session 3',
                start: new Date().toDateString(),
                end: new Date().toDateString(),
                room: 'room1',
                roomInfo: {
                    roomId: 'room1',
                    name: 'myroom1',
                    url: '',
                    theme: '',
                },
                speakers: [],
                description: 'session 1 description',
                descriptionShort: 'session 1 short description',
                calendarEventId: '',
                isBreak: false,
            }
        ];
        sessionArray.forEach(function (session) {
            // this._tempSessions.push(session);
            _this._allSessions.push(new session_page_view_model_1.SessionViewModel(session));
        });
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=main-view-model.js.map