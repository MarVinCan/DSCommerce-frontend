/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

export function update(inputs: any, name: string, newValue: any) {
  return { ...inputs, [name]: { ...inputs[name], value: newValue } };
}

export function toValues(inputs: any) {
  const data: any = {};
  for (let name in inputs) {
    data[name] = inputs[name].value;
  }
  return data;
}
export function updateAll(inputs: any, newValues: any){

    const newInputs : any = {};

    for (let name in inputs){
      newInputs[name] = {...inputs[name], value: newValues[name]};
    }
    return newInputs;
}

export function validate(inputs: any, name: string){
  if(!inputs[name].validation){
    return inputs;
  }
  const isInvalid = !inputs[name].validation(inputs[name].value); 
  return {...inputs, [name]: {...inputs[name],invalid:isInvalid.toString()}};
}

export function toDirty(inputs: any, name: string){
  return {...inputs, [name]: {...inputs[name], dirty:"true"}}
}
export function updateAndValidate(inpusts: any, name:string, newValue: any ){
  const dataUpdated = update(inpusts, name, newValue);
  return validate(dataUpdated, name);
  
}
export function dirtyAndValidate(inpusts: any, name:string ){
  const dataDirty = toDirty(inpusts, name);
  return validate(dataDirty, name);
  
}
export function toDirtyAll(inputs: any){
    const newInputs: any = {};
    for (let name in inputs){
      newInputs[name] = {...inputs[name], dirty: "true"};
    }
    return newInputs;
}

export function validadeAll(inputs: any){
  const newInputs: any ={};

  for (let name in inputs){
    if(inputs[name].validation){
      const isInvalid = !inputs[name].validation(inputs[name].value);
      newInputs[name]  = {...inputs[name], invalid: isInvalid.toString()};
    }
    else{
      newInputs[name] = {...inputs[name]}
    }

   
  }
  return newInputs;
}

export function dirtyAndValidateAll(inputs: any){
  return validadeAll(toDirtyAll(inputs));
}
export function hasAnyInvalid(inputs: any){
  for (let name in inputs){
    if (inputs[name].dirty === "true" && inputs[name].invalid === "true"){
      return true;
    }
  }
  return false;
}

export function setBackendErrors(inputs: any, errors: any[]){
  const newInputs = {...inputs};
  errors.forEach(item => {
    newInputs[item.fieldName].message = item.message;
    newInputs[item.fieldName].dirty = "true";
    newInputs[item.fieldName].invalid = "true"
  });
  return newInputs;
}