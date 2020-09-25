import { AccountsService } from './../services/accounts.service';
import { LoggingService } from './../services/logging.service';
import { Component } from '@angular/core';
// remove , EventEmitter, Output when move to svc
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] // add array of providers for svc inection. don't add 
  // account svc if don't want own instance. use parent
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  // inject service
  constructor(private loggingService: LoggingService,
    private accountsService: AccountsService) {
      this.accountsService.statusUpdated.subscribe(
      (status: string) => alert("New Status: " + status)
      );
    }
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
