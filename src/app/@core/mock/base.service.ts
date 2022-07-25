import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Apollo } from "apollo-angular";
import { Subscription } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class BaseService implements OnDestroy {
    token = '';
    is_token_valid;    
    employee_id = '';
    department_id = '';
    script_id = '';
    keyword_id = ' ';
    current_lang = '';
    private subscription = new Subscription();

    constructor(
        public apollo: Apollo,
        public http: HttpClient,
    ) { 
        this.token = localStorage.getItem('access_token');
    }

    ngOnDestroy(): void { 
        if (this.is_token_valid !== null || this.is_token_valid !== undefined) {
            this.subscription.unsubscribe()
        }
    }

    saveToken = (refToken: string, accToken: string) => {
        localStorage.setItem('access_token', refToken);
        localStorage.setItem('refresh_token', accToken);
    }
}