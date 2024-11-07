import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from './login.service';

export const loginResolver: ResolveFn<boolean> = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  // Return an observable that resolves to true if the user is logged in, false otherwise
  return loginService.userData$.pipe(
    map(userData => {
      if (userData) {
        return true; // User is logged in
      } else {
        router.navigate(['/login']); 
        return false; // User is not logged in
      }
    })
  );
};
