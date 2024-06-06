import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import './global.declaration';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [EditorComponent],
  imports: [CommonModule, FormsModule, CKEditorModule],
  exports: [EditorComponent],
})
export class SharedModule {}
