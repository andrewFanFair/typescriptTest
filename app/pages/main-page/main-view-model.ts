import { Observable } from 'data/observable';
import { ISession } from '../../shared/interfaces'
import { SessionViewModel } from '../session-page/session-page-view-model';

export class MainViewModel extends Observable {

    private _tempSessions: Array<ISession> = new Array<ISession>();
    private _allSessions: Array<SessionViewModel> = new Array<SessionViewModel>();

    constructor() {
        super();
    }

    get sessions(): Array<SessionViewModel> {
        return this._allSessions;
    }

    public init() {
        var sessionArray: Array<ISession> = [
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
            // this._tempSessions.push(session);
            this._allSessions.push(new SessionViewModel(session));
        });
    }   
}