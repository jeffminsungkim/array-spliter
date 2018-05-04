"use strict";
module.exports = (str, operators) => {
  if (typeof str !== "string")
    throw new TypeError(`Expected a string, got ${typeof str}`);

  if (typeof operators !== "string" && !Array.isArray(operators))
    throw new TypeError(`Expected a string or an array, got ${typeof operators}`);

  if (operators === '')
    return str.split(operators);

  const op = operators[0];

  for (let i = 1; i < operators.length; i++)
    str = str.split(operators[i]).join(op);

  return str.split(op);
};
