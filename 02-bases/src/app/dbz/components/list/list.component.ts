import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  //If dbz-selector does not receive the property, this will be the default content to render
  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10
    }
  ]

  onDeleteCharacter(id?: string): void {
    //TODO: Emit the character ID
    if (!id) return;
    this.onDelete.emit(id)
  }
}
