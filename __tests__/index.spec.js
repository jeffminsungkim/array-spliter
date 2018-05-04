const arraySpliter = require("../index");

describe("Throw an error when the type of arguments are invalid", () => {
  it("should throw an error message if input type is number", () => {
    expect(() => {
      arraySpliter(1234, ['12']);
    }).toThrowError('Expected a string, got number');
  });

  it("should throw an error message if input type is object", () => {
    expect(() => {
      arraySpliter({}, ['12']);
    }).toThrowError('Expected a string, got object');
  });

  it("should throw an error message if input type is object", () => {
    expect(() => {
      arraySpliter(["js"], ['12']);
    }).toThrowError('Expected a string, got object');
  });

  it("should throw an error message if operators type is neither a string nor an array", () => {
    expect(() => {
      arraySpliter('a#b#c#d', 123);
    }).toThrowError('Expected a string or an array, got number');
  });

  it("should throw an error message if operators type is an object", () => {
    expect(() => {
      arraySpliter('a#b#c#d', { age: 28 });
    }).toThrowError('Expected a string or an array, got object');
  });
});

describe("Split a String object test", () => {
  const alphabets = ['a', 'b', 'c', 'd'];

  it("should return an array of alphabets", () => {
    const text = 'abcd';
    const operators = '';
    const m = arraySpliter(text, operators);

    expect(m).toEqual(alphabets);
    expect(m).toBeArray();
  });

  it("should return an array of alphabets", () => {
    const text = 'a,b,c,d';
    const operators = ',';
    const m = arraySpliter(text, operators);

    expect(m).toEqual(alphabets);
    expect(m).toBeArray();
  });

  it("should return an array without @", () => {
    const text = 'a@b@c@d';
    const operators = '@';
    const m = arraySpliter(text, operators);

    expect(m).toEqual(alphabets);
    expect(m).toBeArray();
  });

  it("should return an array of alphabets without # and :", () => {
    const text = 'a:b,c#d';
    const operators = ['#', ',', ':'];
    const m = arraySpliter(text, operators);

    expect(m).toEqual(alphabets);
    expect(m).toBeArray();
  });

  it("should return an array of alphabets without | and :", () => {
    const text = 'a,b|c#d';
    const operators = ['|', ',', '#'];
    const m = arraySpliter(text, operators);

    expect(m).toEqual(alphabets);
    expect(m).toBeArray();
  });
});
