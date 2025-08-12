let mark = [{"a":1,"b":2},{"c":3,"d":4},{"e":5},{"f":6}];

const [firstObj,...rest] = mark;
console.log(firstObj);
console.log(rest);


const [,{c,d}]=mark;
console.log(c);
console.log(d);
