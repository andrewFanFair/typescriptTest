"use strict";
var observable_1 = require('data/observable');
var page;
var tempSessions = [
    {
        id: '0',
        title: 'session 1',
    },
    {
        id: '1',
        title: 'session 2',
    },
    {
        id: '2',
        title: 'session 3',
    },
];
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = new observable_1.Observable({
        sessions: tempSessions,
    });
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=main-page.js.map