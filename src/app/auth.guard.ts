import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';
import { map, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);
  console.log(authService.isAuthenticated());
  console.log(authService.isLoggedIn());
  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']); 
    return false;
  }

  // const authService = inject(LoginService);
  // const router = inject(Router);

  // return authService.isAuthenticated().pipe(
  //   take(1),
  //   tap((isAuthenticated) => {
  //     if (!isAuthenticated) {
  //       router.navigate(['/login']);
  //     }
  //   })
  // );
};
