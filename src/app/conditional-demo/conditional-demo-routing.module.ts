import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ConditionalDemoComponent } from './conditional-demo/conditional-demo.component';
import { ConditionalLoopComponent } from './conditional-loop/conditional-loop.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicLoopComponent } from './dynamic-loop/dynamic-loop.component';

const routes: Routes = [
  { path: '', component: ConditionalDemoComponent },
  { path: 'conditional-loop', component: ConditionalLoopComponent },
  { path: 'dynamic-editor-demo', component: DynamicComponentComponent },
  { path: 'dynamic-loop-demo', component: DynamicLoopComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionalDemoRoutingModule {}
