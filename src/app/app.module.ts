import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

// Modules
import { AlertModule } from 'ngx-bootstrap';
import { LoadingModule } from 'ngx-loading';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Guards
import { AuthGuard } from './guards/auth.guard';
import { IsOwnerGuard } from './guards/is-owner.guard';

// Services
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';
import { ChatroomService } from './services/chatroom.service';
import { LoadingService } from './servies/loading.service';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatInputComponent } from './pages/chat/components/chat-input/chat-input.component';
import { ChatroomListComponent } from './pages/chat/components/chatroom-list/chatroom-list.component';
import { ChatroomTitleBarComponent } from './pages/chat/components/chatroom-title-bar/chatroom-title-bar.component';
import { ChatMessageComponent } from './pages/chat/components/chat-message/chat-message.component';
import { ChatroomWindowComponent } from './pages/chat/components/chatroom-window/chatroom-window.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { IndexInnerPageComponent } from './pages/inner-pages/main/index-inner-page.component';
import { ForeignNationalComponent } from './pages/inner-pages/foreign-national/foreign-national.component';
import { InvestorBsComponent } from './pages/inner-pages/investor-bs/investor-bs.component';
import { InvestorDscrComponent } from './pages/inner-pages/investor-dscr/investor-dscr.component';
import { InvestorNodocComponent } from './pages/inner-pages/investor-nodoc/investor-nodoc.component';
import { ItinComponent } from './pages/inner-pages/itin/itin.component';
import { StatedIncomeComponent } from './pages/inner-pages/stated-income/stated-income.component';
import { TrueStatedIncomeComponent } from './pages/inner-pages/true-stated-income/true-stated-income.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ChatComponent,
    NavbarComponent,
    ChatInputComponent,
    ChatroomListComponent,
    ChatroomTitleBarComponent,
    ChatMessageComponent,
    ChatroomWindowComponent,
    ProfileComponent,
    EditProfileComponent,
    IndexInnerPageComponent,
    // ForeignNationalComponent,
    // InvestorBsComponent,
    // InvestorDscrComponent,
    // InvestorNodocComponent,
    // ItinComponent,
    // StatedIncomeComponent,
    // TrueStatedIncomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  providers: [
    AlertService,
    LoadingService,
    AuthService,
    AuthGuard,
    ChatroomService,
    IsOwnerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
