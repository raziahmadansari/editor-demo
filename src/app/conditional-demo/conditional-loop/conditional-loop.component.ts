import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-conditional-loop',
  templateUrl: './conditional-loop.component.html',
  styleUrl: './conditional-loop.component.scss',
})
export class ConditionalLoopComponent implements OnInit {
  @ViewChild('editorButton', { static: true })
  editorButton!: ElementRef<HTMLButtonElement>;
  activeEditorId: number = 1;
  editorCount: number = 2;
  editors: Array<number> = [];

  ngOnInit(): void {
    for (let editorId = 1; editorId <= this.editorCount; editorId++) {
      this.editors.push(editorId);
    }
  }

  setActiveEditor(editorId: number): void {
    this.activeEditorId = editorId;
  }

  addEditor(): void {
    this.editors.push(this.editors.length + 1);
    setTimeout(() => {
      this.editorButton.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }

  onEditorReady(editor: any): void {
    window.editor = editor;
  }

  toggleReadonlyMode(): void {
    if (window.editor) {
      window.editor.isReadOnly
        ? window.editor.disableReadOnlyMode(window.editor.id)
        : window.editor.enableReadOnlyMode(window.editor.id);
    }
  }
}
