import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { LoopDemoRoutingModule } from './loop-demo-routing.module';
import { LoopDemoComponent } from './loop-demo/loop-demo.component';

@NgModule({
  declarations: [LoopDemoComponent],
  imports: [CommonModule, LoopDemoRoutingModule, SharedModule],
})
export class LoopDemoModule {}
