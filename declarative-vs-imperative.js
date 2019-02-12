// just for me
console.clear();

const getNestedValue = (object, pathToValue) => {
  if (!pathToValue) throw new Error("Impossible to set null property");
  let subObject = object;
  let parts = propertyName.split(".");
  let len = parts.length;
  let i;

  for (i = 0; i < len; i++) {
    if (!subObject || typeof subObject === "undefined") return undefined;
    subObject = subObject[parts[i]];
  }

  return subObject;
};

const declarativeGetNestedValue = (object, pathToValue) => {
  const 
};
