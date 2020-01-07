// import built-in modules by angular and other third party libraries or frameworks
import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
// import in-app constants
import {URL_API} from '../core/core.apis';
import {Observable, Subject} from 'rxjs';
import {convertDate} from '../core/core.functions';
// import in-app interface
// import in-app provider
// import in-app functions

@Injectable()
export class QuestionService {
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

    fetchData(payload?: any): Observable<any> {
        return this.httpClient.get(URL_API.QUESTION_LIST);
    }
}
