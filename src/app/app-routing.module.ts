import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ChatComponent } from './pages/chat/chat.component';
import { IsOwnerGuard } from './guards/is-owner.guard';
import { IndexInnerPageComponent } from './pages/inner-pages/index-inner-page/index-inner-page.component';
import { LayoutComponent } from './pages/inner-pages/layout/layout.component';
import { ForeignNationalComponent } from './pages/inner-pages/foreign-national/foreign-national.component';
import { InvestorBsComponent } from './pages/inner-pages/investor-bs/investor-bs.component';
import { InvestorDscrComponent } from './pages/inner-pages/investor-dscr/investor-dscr.component';
import { InvestorNodocComponent } from './pages/inner-pages/investor-nodoc/investor-nodoc.component';
import { ItinComponent } from './pages/inner-pages/itin/itin.component';
import { StatedIncomeComponent } from './pages/inner-pages/stated-income/stated-income.component';
import { TrueStatedIncomeComponent } from './pages/inner-pages/true-stated-income/true-stated-income.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'chat', canActivate: [AuthGuard],
    children: [
      { path: '', component: ChatComponent },
      { path: ':chatroomId', component: ChatComponent }
    ]
  },
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile/:userId/edit', component: EditProfileComponent, canActivate: [AuthGuard, IsOwnerGuard] },
  { path: 'inner-pages', component: LayoutComponent,
    children: [
      { path: '', component: IndexInnerPageComponent },
      { path: 'foreign-national', component: ForeignNationalComponent},
      { path: 'investor-bs', component: InvestorBsComponent},
      { path: 'investor-dscr', component: InvestorDscrComponent},
      { path: 'investor-nodoc', component: InvestorNodocComponent},
      { path: 'investor-itin', component: ItinComponent},
      { path: 'stated-income', component: StatedIncomeComponent},
      { path: 'true-stated-income', component: TrueStatedIncomeComponent},
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
