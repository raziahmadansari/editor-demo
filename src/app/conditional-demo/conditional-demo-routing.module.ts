import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ConditionalDemoComponent } from './conditional-demo/conditional-demo.component';
import { ConditionalLoopComponent } from './conditional-loop/conditional-loop.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

const routes: Routes = [
  { path: '', component: ConditionalDemoComponent },
  { path: 'conditional-loop', component: ConditionalLoopComponent },
  { path: 'dynamic-editor-demo', component: DynamicComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionalDemoRoutingModule {}
