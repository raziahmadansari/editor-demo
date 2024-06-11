import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import './global.declaration';
import { EditorComponent } from './editor/editor.component';
import { Editor2Component } from './editor2/editor2.component';

@NgModule({
  declarations: [EditorComponent, Editor2Component],
  imports: [CommonModule, FormsModule, CKEditorModule],
  exports: [EditorComponent],
})
export class SharedModule {}
