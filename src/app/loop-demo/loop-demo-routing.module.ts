import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoopDemoComponent } from './loop-demo/loop-demo.component';

const routes: Routes = [{ path: '', component: LoopDemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoopDemoRoutingModule {}
