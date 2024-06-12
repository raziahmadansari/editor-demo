import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'editor', pathMatch: 'full' },
  {
    path: 'loop-demo',
    loadChildren: () =>
      import('./loop-demo/loop-demo.module').then((m) => m.LoopDemoModule),
  },
  {
    path: 'conditional-demo',
    loadChildren: () =>
      import('./conditional-demo/conditional-demo.module').then(
        (m) => m.ConditionalDemoModule
      ),
  },
  {
    path: 'file-upload',
    loadChildren: () =>
      import('./file-upload/file-upload.module').then(
        (m) => m.FileUploadModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
