import {Component} from '@angular/core';
import {Mode} from 'src/app/_enums/dynamic-form/mode.enum';
import {AttributeType} from "../../../_enums/dynamic-form/attribute-type.enum";
import {AttributePosition} from "../../../_models/dynamic-form/attribute-position.model";
import {Attribute} from "../../../_models/dynamic-form/attribute.model";

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent {
  public readonly Mode = Mode;
  public readonly AttributeType = AttributeType;
  public mode: Mode = Mode.CREATE;

  public attributePositions: AttributePosition[] = [
    {
      id: 1,
      orderNumber: 0,
      attribute: {
        id: 1,
        name: 'Comments1',
        code: 'commnets1',
        attributeType: AttributeType.INPUT_TEXT
      } as Attribute
    } as AttributePosition,
    {
      id: 2,
      orderNumber: 1,
      attribute: {
        id: 2,
        name: 'Comments2',
        code: 'commnets2',
        attributeType: AttributeType.INPUT_TEXT
      } as Attribute
    } as AttributePosition,
    {
      id: 3,
      orderNumber: 2,
      attribute: {
        id: 3,
        name: 'Comments3',
        code: 'commnets3',
        attributeType: AttributeType.INPUT_TEXT
      } as Attribute
    } as AttributePosition
  ]

  public getSortedAttributePositions(): AttributePosition[] {
    return this.attributePositions.sort((ap1, ap2) => ap1.orderNumber - ap2.orderNumber);
  }

  public drop($event: any): void {
    if ($event.currentIndex < $event.previousIndex) {
      for (let i = $event.currentIndex; i < $event.previousIndex; i++) {
        this.attributePositions[i].orderNumber++;
      }

      this.attributePositions[$event.previousIndex].orderNumber = $event.currentIndex;
    } else if ($event.currentIndex > $event.previousIndex) {
      for (let i = $event.currentIndex; i > $event.previousIndex; i--) {
        this.attributePositions[i].orderNumber--;
      }

      this.attributePositions[$event.previousIndex].orderNumber = $event.currentIndex;
    }

    this.attributePositions.sort((el1, el2) => el1.orderNumber - el2.orderNumber);
  }
}
