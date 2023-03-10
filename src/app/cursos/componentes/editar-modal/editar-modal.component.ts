import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@Angular/material/dialog';
import { Curso } from 'src/app/models/curso';
 
@Component({
  selector: 'app-editar-modal',
  templateUrl: './editar-modal.component.html',
  styleUrls: ['./editar-modal.component.css']
})
export class EditarModalComponent {
  constructor(
    private dialogRef: MatDialogRef<EditarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ){}
}
