import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrl: './grid-list.component.scss'
})
export class GridListComponent extends FieldWrapper {
  colspan = 4
  ngOnInit(){
    this.colspan = this.field?.props?.['colspan'] || 4
  }

}
