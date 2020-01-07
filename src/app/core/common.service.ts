// import built-in modules by angular and other third party libraries or frameworks
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class CommonService {
    resData: Array<any> = [];
    /**
     * Observer for subjectFilterSchemeData data api
     * @type {Subject<number>}
     */
    private subjectData = new Subject<number>();
    /** event handler to observe changes */
    data$ = this.subjectData.asObservable();

    constructor(private router: Router, private httpClient: HttpClient) {
    }
}
