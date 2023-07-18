import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkDatabaseService {

  constructor(
    private http : HttpClient
  ) { }

  public getHistory(Name:any): Promise<any> {
    var url = `https://script.google.com/macros/s/AKfycby4JwLdqA70li3Vycy6ZzB_ysRR4QNiFxcr7Onxvd9YnczOoivG5OqTyavyFJEqaYhE/exec?q=1&h=${Name}`
    return this.http.get(url).toPromise();
    }
  public getUserProfile(email:any): Promise<any> {
    var url = `https://script.google.com/macros/s/AKfycby3IsKQwc_eg0ll6VhUSCcuRM42RfIrlZg3rS2oRoWPXk0sitE8OKbKmJkhotQUifg5hw/exec?configName=getUserProfile&email=${email}`
    return this.http.get(url).toPromise();
    }
}
