"use strict";
var faker = require('faker');
var NUM_SPEAKERS = 40;
var NUM_ROOM_INFOS = 10;
var SESSION_LENGTH = 60;
function generateSpeakers() {
    var speakerList = [];
    for (var i = 0; i <= NUM_SPEAKERS; i++) {
        var genderBool = faker.random.boolean();
        var genderInt = parseInt(genderBool + '');
        var firstName = faker.name.firstName(genderInt);
        var lastName = faker.name.lastName(genderInt);
        // var picture genderBool ? avatarsMen[faker.random.number(avatarsMen.length)]
        var s = {
            id: faker.random.uuid(),
            name: firstName + ' ' + lastName,
            title: faker.name.jobTitle(),
            company: faker.company.companyName(),
            picture: '',
            twitterName: '@' + faker.internet.userName(firstName, lastName),
        };
        speakerList.push(s);
    }
    return speakerList;
}
exports.generateSpeakers = generateSpeakers;
function generateRoomInfos() {
    return [];
}
exports.generateRoomInfos = generateRoomInfos;
function generateSessions(speakers, roomInfos) {
    return [];
}
exports.generateSessions = generateSessions;
//# sourceMappingURL=fake-data-service.js.map