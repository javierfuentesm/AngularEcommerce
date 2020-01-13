import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    FooterComponent,
    HeaderComponent
  ],
  imports: [CommonModule, RouterModule, MaterialModule, ReactiveFormsModule]
})
export class SharedModule {}
