import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';

import { MainViewModel } from './main-view-model';

var vm = new MainViewModel();
var page: Page;


export function pageLoaded(args: EventData) {
    page = <Page>args.object;
    page.bindingContext = vm;
    vm.init();
}