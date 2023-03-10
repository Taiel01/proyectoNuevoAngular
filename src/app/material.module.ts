import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@Angular/material/table';
import { MatButtonModule } from '@Angular/material/button';
import { MatCardModule } from '@Angular/material/card';
import { MatInputModule } from '@Angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule} from '@Angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class MaterialModule { }
