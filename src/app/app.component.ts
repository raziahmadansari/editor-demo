import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'editor-demo';
  editors = [0];

  addEditor(): void {
    this.editors.push(this.editors.length);
  }

  removeEditors(): void {
    this.editors = [];
  }
}
