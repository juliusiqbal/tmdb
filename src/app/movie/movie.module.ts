import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotTableModule } from '@handsontable/angular';

import { MovieComponent } from './movie.component';
import { MovieService } from './movie.service';

@NgModule({
  declarations: [MovieComponent],
  exports: [MovieComponent],
  imports: [
    CommonModule,
    HotTableModule,
  ],
  providers: [MovieService],
})
export class MovieModule {}
