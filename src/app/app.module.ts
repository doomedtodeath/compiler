import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CompilerComponent } from './compiler/compiler.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import {MatIconModule} from '@angular/material/icon';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgSelectModule } from '@ng-select/ng-select';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CompilerinputComponent } from './compiler/compilerinput/compilerinput.component';
import {MatCheckboxModule} from '@angular/material/checkbox';




@NgModule({
  declarations: [
    AppComponent,
    CompilerComponent,
    CompilerinputComponent,
  ],
  imports: [
    BrowserModule,
    CodemirrorModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgSelectModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
