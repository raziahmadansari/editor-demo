import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loop-demo',
  templateUrl: './loop-demo.component.html',
  styleUrl: './loop-demo.component.scss',
})
export class LoopDemoComponent implements OnInit {
  editors: Array<any> = [];

  ngOnInit(): void {
    // this.loadEditors(4);
  }

  loadEditors(editorCount: number): void {
    for (let editorId = 0; editorId < editorCount; editorId++) {
      this.editors.push(editorId);
    }
  }

  addEditor(): void {
    this.editors.push(this.editors.length);
  }

  removeEditors(): void {
    this.editors = [];
  }

  onReady(editor: any): void {
    // this.editors[this.editors.length - 1] = editor;
  }

  trackEditor(index: number, item: any): number {
    return item;
  }
}
