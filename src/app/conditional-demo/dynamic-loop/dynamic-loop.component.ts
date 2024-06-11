import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Editor2Component } from '../../shared/editor2/editor2.component';

@Component({
  selector: 'app-dynamic-loop',
  templateUrl: './dynamic-loop.component.html',
  styleUrl: './dynamic-loop.component.scss',
})
export class DynamicLoopComponent implements OnInit {
  @ViewChild('viewContainerRef', { read: ViewContainerRef, static: true })
  viewContainerRef!: ViewContainerRef;
  @ViewChild('editorButton', { static: true })
  editorButton!: ElementRef<HTMLButtonElement>;

  initialEditorCount: number = 2;

  ngOnInit(): void {
    this.renderEditors();
  }

  addEditor(editorId?: number): void {
    let scrollNeeded: boolean = false;
    if (!editorId) {
      editorId = ++this.initialEditorCount;
      scrollNeeded = true;
    }

    const componentRef =
      this.viewContainerRef.createComponent(Editor2Component);
    componentRef.instance.editorInstanceId = editorId;
    componentRef.changeDetectorRef.detectChanges();

    if (scrollNeeded) {
      setTimeout(() => {
        this.editorButton.nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      });
    }
  }

  toggleReadonlyMode(): void {
    if (window.editor) {
      window.editor.isReadOnly
        ? window.editor.disableReadOnlyMode(window.editor.id)
        : window.editor.enableReadOnlyMode(window.editor.id);
    }
  }

  renderEditors(): void {
    this.viewContainerRef.clear();
    for (let count = 1; count <= this.initialEditorCount; count++) {
      this.addEditor(count);
    }
  }
}
