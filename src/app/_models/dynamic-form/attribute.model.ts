import {AttributeType} from "../../_enums/dynamic-form/attribute-type.enum";

export interface Attribute {
  id: number;
  name: string;
  code: string;
  attributeType: AttributeType;
}
