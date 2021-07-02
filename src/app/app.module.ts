import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatGridListModule } from '@angular/material/grid-list';
import { MyProfComponent } from './my-prof/my-prof.component';
import { ChatboxComponent } from './chatbox/chatbox.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnotherProfComponent } from './another-prof/another-prof.component';

import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PickerModule } from '@ctrl/ngx-emoji-mart';


import { MatExpansionModule } from '@angular/material/expansion';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserService } from './user-service.service';






@NgModule({
  declarations: [
    AppComponent,

    ChatMainComponent,

    MyProfComponent,

    ChatboxComponent,

    AnotherProfComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,

    MatInputModule,
    HttpClientModule,
    FormsModule,
    PickerModule


  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
