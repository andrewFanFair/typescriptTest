import { Observable } from 'data/observable';
import { Session } from '../../shared/interfaces'

export class MainViewModel extends Observable {

    private _tempSessions: Array<Session> = new Array<Session>();

    constructor() {
        super();
    }

    get sessions(): Array<Session> {
        return this._tempSessions;
    }

    public init() {
        var sessionArray: Array<Session> = [
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

        sessionArray.forEach((session) => {
            this._tempSessions.push(session);
        });
    }   
}