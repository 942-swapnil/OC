import { Injectable } from "@angular/core";
import {
    HttpEvent, HttpInterceptor, HttpHandler,
    HttpRequest, HttpErrorResponse
} from "@angular/common/http";
import { throwError, Observable, BehaviorSubject, of } from "rxjs";
import { catchError, filter, take, switchMap } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private AUTH_HEADER = "Authorization";
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({
                headers: req.headers.set('Content-Type', 'application/json')
            });
        }
        // We retrieve the token, if any
        const token = sessionStorage.getItem(this.AUTH_HEADER) || "";
        let newHeaders = req.headers;
        if (token) {
            // If we have a token, we append it to our new headers
            newHeaders = newHeaders.append(this.AUTH_HEADER, token);
        }
        // Finally we have to clone our request with our new headers
        // This is required because HttpRequests are immutable
        const authReq = req.clone({ headers: newHeaders });
        // Then we return an Observable that will run the request
        // or pass it to the next interceptor if any
        return next.handle(authReq);
    }

}