import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { forEach, map } from 'lodash';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { NgSelectModule } from '@ng-select/ng-select';
import * as CodeMirror from "codemirror";


@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})
export class CompilerComponent implements OnInit {



  constructor(public http: HttpClient, public CodeMirror: CodemirrorModule) {
  }

  ngOnInit(): void {
  }
}
