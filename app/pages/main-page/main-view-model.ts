import { Observable } from 'data/observable';
import { ISession } from '../../shared/interfaces'
import { SessionViewModel } from '../session-page/session-page-view-model';
import { SessionService } from '../../services/session-service';

export class MainViewModel extends Observable {

    private _allSessions: Array<SessionViewModel> = new Array<SessionViewModel>();
    private _sessions: Array<SessionViewModel>;
    private _sessionService: SessionService;

    constructor() {
        super();
        this._sessionService = new SessionService();
        this.set('isLoading', true);
    }

    get sessions(): Array<SessionViewModel> {
        return this._sessions;
    }

    public init() {
        this._sessionService.loadSessions<Array<ISession>>()
            .then((result: Array<ISession>) => {
                this.pushSessions(result);
                this.onDataLoaded();
            });
    }   

    private pushSessions(sessionsFromService: Array<ISession>) {
        sessionsFromService.forEach((session) => {
            var newSession = new SessionViewModel(session);
            this._allSessions.push(newSession);
        });
    }

    private onDataLoaded() {
        this.set('isLoading', false);
        this.filter();
    }

    private filter() {
        this._sessions = this._allSessions;
        this.notify({
            object: this,
            eventName: Observable.propertyChangeEvent,
            propertName: 'sessions',
            value: this._sessions,
        })
    }
}