import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { todoReducer } from './todos/todos.reducer';
import { environment } from '../environments/environment';
import {ReactiveFormsModule} from '@angular/forms'
import { appReducers } from './app.reducers';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot(appReducers),
     StoreDevtoolsModule.instrument({ maxAge: 25, 
      logOnly:!isDevMode() 
     }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
