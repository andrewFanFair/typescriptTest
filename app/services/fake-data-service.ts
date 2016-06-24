import { ISpeaker, IRoomInfo, ISession } from '../shared/interfaces';

import faker = require('faker');

let NUM_SPEAKERS = 40;
let NUM_ROOM_INFOS = 10;
let SESSION_LENGTH = 60;

export function generateSpeakers() : Array<ISpeaker> {
    var speakerList : Array<ISpeaker> = [];

    for (var i = 0; i <= NUM_SPEAKERS; i++) {
        var genderBool = faker.random.boolean();
        var genderInt = parseInt(genderBool + '');
        var firstName = faker.name.firstName(genderInt);
        var lastName = faker.name.lastName(genderInt);
        // var picture genderBool ? avatarsMen[faker.random.number(avatarsMen.length)]

        let s: ISpeaker = {
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

export function generateRoomInfos() : Array<IRoomInfo> {
    return [];
}

export function generateSessions(speakers: Array<ISpeaker>, roomInfos: Array<IRoomInfo>) : Array<ISession> {
    return [];
}