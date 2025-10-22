import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LostpassComponent } from './components/lostpass/lostpass.component';
import { PassmodComponent } from './components/passmod/passmod.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'lostpass',
        component: LostpassComponent
    },
    {
        path: 'passmod',
        component: PassmodComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'home',
        component: MainComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
