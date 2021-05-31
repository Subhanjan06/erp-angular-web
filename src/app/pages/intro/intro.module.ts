import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { TestComponent } from './test/test.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntroComponent } from './intro.component';


@NgModule({
  declarations: [TestComponent, IntroComponent],
  imports: [
    CommonModule,
    IntroRoutingModule,
    SharedModule.forRoot()
  ]
})
export class IntroModule { }
