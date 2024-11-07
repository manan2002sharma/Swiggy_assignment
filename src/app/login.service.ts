import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';

interface User {
  id?: string;
  username: string;
  password: string;
  address?:string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://672854df270bd0b975550858.mockapi.io/api/v1/login/user'; // Replace with your MockAPI URL
  private userData = new BehaviorSubject<User | null>(null);
  userData$ = this.userData.asObservable();

//new
  // userData$ = this.userData.asObservable().pipe(shareReplay(1));



  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('userData');
    if (storedUser) {
      this.userData.next(JSON.parse(storedUser));
    }
  }

  isAuthenticated(): boolean {
    console.log(this.userData$)
    return !!this.userData.value;
  }


//new
// isAuthenticated(): Observable<boolean> {
//   return this.userData$.pipe(map((user) => !!user));
// }

isLoggedIn(): boolean {
  return this.userData.getValue() !== null;
}


  login(username: string, password: string): Observable<User[] | null> {
    return this.http
      .get<User[]>(`${this.apiUrl}?username=${username}&password=${password}`)
      .pipe(
        tap((users) => {
          if (users.length > 0) {
            const user = users[0];
            this.userData.next(user);
            localStorage.setItem('userData', JSON.stringify(user));
            console.log("added");
          } else {
            this.userData.next(null);
            localStorage.removeItem('userData'); // Clear data if login fails
            
            console.log("not added");
          }
        })
      );
  }

  signup(username: string, password: string): Observable<User> {
    const newUser: User = { username, password }; // Create new user object
    return this.http.post<User>(this.apiUrl, newUser).pipe(
      tap((user) => {
        this.userData.next(user); // Store new user data on successful signup
      })
    );
  }


  logout() {
    this.userData.next(null); // Clear user data on logout
    localStorage.removeItem('userData');
    sessionStorage.clear();
  }
}
