import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginComponent } from './login/login.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { personInfos } from './informations/personInfos';
import { HttpClientModule } from '@angular/common/http';
import { RowInfoComponent } from './row-info/row-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    RowInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    
  ],
  providers: [personInfos],
  bootstrap: [AppComponent]
})
export class AppModule { }
