import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: "",
    component: IntroComponent,
    children: [
      {
        path: "test",
        component: TestComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule { }
