import { autorun, observable } from 'mobx';

import { CourseCalendarStore } from './CourseCalendarStore';
import { CourseInformationStore } from './CourseInformationStore';

import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { createBrowserHistory } from "history";

export interface AppStore {
    courseCalendar: CourseCalendarStore;
    courseInformation: CourseInformationStore;
    routerStore: RouterStore;
}

class AppStoreImpl implements AppStore {
    @observable.deep public courseCalendar: CourseCalendarStore;
    @observable.deep public courseInformation: CourseInformationStore;
    public routerStore: RouterStore;

    constructor() {
        // Initialize our state
        this.courseCalendar = new CourseCalendarStore();
        this.courseInformation = new CourseInformationStore();

        // Initialize our router state
        const browserHistory = createBrowserHistory();
        const routerStore = new RouterStore();
        syncHistoryWithStore(browserHistory, routerStore);
        this.routerStore = routerStore;

        // Debugging that router path is available
        autorun(() => {
            console.log(this.routerStore.location.pathname);
        });
    }
}

let INSTANCE: AppStore | null = null;

export function createAppStore(): AppStore {
    // Enforce a singleton constraint
    if (INSTANCE) {
        throw new Error('AppStore is a singleton');
    }

    INSTANCE = new AppStoreImpl();

    return getAppStore();
}

export function getAppStore(): AppStore {
    if (INSTANCE === null) {
        throw new Error('AppStore not created');
    }

    return INSTANCE;
}