import {Component} from '@angular/core';
import {UpgradeModule, downgradeComponent, downgradeInjectable} from '@angular/upgrade/static';
import {setUpLocationSync} from '@angular/router/upgrade';

import {NgUpgradeService} from './ng-upgrade.service';

import {SurveyDemo} from '../survey/survey-demo';

declare var angular: any;

@Component({
  template: ''
})
export class NgUpgradeComponent {
  
  constructor(upgrade: UpgradeModule, upgradeService: NgUpgradeService) {
    
    if(upgradeService.bootstrapped === false) {
      angular.module('awesome').directive('survey', downgradeComponent({component: SurveyDemo}));
      
      console.log('Bootstrapping');
      upgrade.bootstrap(document.body, ['awesome']);
      setUpLocationSync(upgrade);
      upgradeService.bootstrapped = true;
    }
  }  
}
