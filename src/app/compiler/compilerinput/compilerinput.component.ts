import {Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { forEach, map } from 'lodash';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-compilerinput',
  templateUrl: './compilerinput.component.html',
  styleUrls: ['./compilerinput.component.css']
})
export class CompilerinputComponent implements OnInit{
  viewHeight: number = 100;
  code = {lang: '', code: '', run: true};
  obj: any;
  data = '';
  customInput: boolean = false;
  testCases: {[key:string]:[number]} ={};
  totalTestCase = 0;
  runCodeVar: boolean = false;
  langsAvailable = [
    {key: 'Python', value:'python'},
    {key: 'Javascript',  value:'javascript'},
    {key: 'C',  value:'clike-C'},
    {key: 'C++',  value:'clike-C++'}
  ];
  selectedlang = this.langsAvailable[0];
  errorcomplile = 0;
  codeMirrorOptions: any = {
    lineNumbers: true,
    theme: 'material',
    // mode: this.selectedlang.value.split('-')[0],
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    closebrackets: true,
    lint: true
  };

  constructor(public http: HttpClient, public CodeMirror: CodemirrorModule) { }

  ngOnInit(): void {
    this.viewHeight = window.innerHeight;
  }

  setEditorContent(event: any) {
    this.code.code = event;
    this.codeMirrorOptions = {
      ...this.codeMirrorOptions,
      mode: this.selectedlang.value.split('-')[0]
    }
  }

  runCode(runOrSubmit: string){
    this.runCodeVar = runOrSubmit === "run";
    console.log(this.runCodeVar)
    this.http.post<any>('http://localhost:9090/compiler', JSON.stringify({lang: this.selectedlang.value, code: this.code.code, run: this.runCodeVar})).subscribe((e)=>{
        // this.outputObj = JSON.parse(JSON.stringify(e));
        console.log(e.Testcasesresult);
        if(e.Output.includes('Traceback') || e.Output.includes('SyntaxError') || e.Output.includes('IndentationError')|| e.Output.includes('error') || e.Output.includes('warning')){
          this.errorcomplile = -1;
          this.data = e.Output
        }else{
          this.errorcomplile = 0;
          this.data = e.Output
          map(e.Testcasesresult, (k, i) => {this.testCases[i] = k})
          console.log(this.testCases["passed"])
        }
        console.log(this.data);
      }, (err) => {
        console.log(err)}
    )
  }

}
