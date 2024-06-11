import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ConditionalDemoRoutingModule } from './conditional-demo-routing.module';
import { ConditionalDemoComponent } from './conditional-demo/conditional-demo.component';
import { ConditionalLoopComponent } from './conditional-loop/conditional-loop.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { DynamicLoopComponent } from './dynamic-loop/dynamic-loop.component';

@NgModule({
  declarations: [ConditionalDemoComponent, ConditionalLoopComponent, DynamicComponentComponent, DynamicLoopComponent],
  imports: [CommonModule, ConditionalDemoRoutingModule, SharedModule],
})
export class ConditionalDemoModule {}
