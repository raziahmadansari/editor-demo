import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [{ path: '', component: FileUploadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileUploadRoutingModule {}
