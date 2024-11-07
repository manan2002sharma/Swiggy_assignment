import { CanActivateFn,Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginService } from './login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(LoginService);
  const router = inject(Router);
  console.log(authService.isAuthenticated());
  if (authService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(['/login']); 
    return false;
  }
};
