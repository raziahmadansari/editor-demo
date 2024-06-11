import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { EditorComponent } from '../../shared/editor/editor.component';
import CustomEditor from 'ckeditor5-custom-build';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrl: './dynamic-component.component.scss',
})
export class DynamicComponentComponent implements OnInit {
  @ViewChild('editorButton', { static: true })
  editorButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('viewContainerRef', { static: true, read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;
  @ViewChild('readonlyTemplate', { static: true, read: TemplateRef })
  readonlyTemplate!: TemplateRef<{ data: string }>;
  activeEditorId: number = 1;
  editorCount: number = 2;
  editors: Array<number> = [];

  ngOnInit(): void {
    for (let editorId = 1; editorId <= this.editorCount; editorId++) {
      this.editors.push(editorId);
    }

    this.createEditor();
  }

  createEditor(): void {
    if (!this.editors.includes(this.activeEditorId)) {
      return;
    }

    const data = `This is a dummy content ${this.activeEditorId}`;

    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.readonlyTemplate, {
      data: data,
    });

    const componentRef = this.viewContainerRef.createComponent(EditorComponent);
    componentRef.instance.editorInstanceId = this.activeEditorId;
    componentRef.changeDetectorRef.detectChanges();
    const subscription = componentRef.instance.onEditorReady.subscribe(
      (editor: CustomEditor) => {
        this.onEditorReady(editor);
      }
    );

    componentRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  setActiveEditor(editorId: number): void {
    this.activeEditorId = editorId;
    this.createEditor();
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
