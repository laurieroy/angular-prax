// import { Injectable } from "@angular/core";

// @Injectable()  technically not needed but will be for future versions of ng
export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}