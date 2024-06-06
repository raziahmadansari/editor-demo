import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-demo',
  templateUrl: './conditional-demo.component.html',
  styleUrl: './conditional-demo.component.scss',
})
export class ConditionalDemoComponent {
  activeEditorId: number = 0;

  setActiveEditor(editorId: number): void {
    this.activeEditorId = editorId;
  }
}
