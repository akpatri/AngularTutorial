import { ValidatorFn } from "@angular/forms";

export const unambigiousRoleValidator: ValidatorFn=(group) =>{
  const name=group.get('name');
  const role=group.get('role');
  return name==role? {
    error:true,
    name:"unambigiousError"
  }:null
}
