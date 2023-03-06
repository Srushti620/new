//Implict Conversions
//1.Numeric String
console.log('3'+2);
console.log('3'+undefined);
//2.Numeric string-Number
console.log('4'-'2');
console.log('4'/2);
//3.Non-Numeric String-NaN
console.log('hello'-'world');
console.log('4'-'hello');
//4.Implicit Boolean Conversion
console.log('4'-true);
console.log('4'+false);
//5.Null Conversion to number
console.log(4+null);
//6.Undefined with number,null,boolean
console.log(4+undefined);
console.log(true+undefined);
console.log(null+undefined);

//Explicit Conversion
//1.convert to number
console.log(Number(true));
console.log(Number('324'));
//2. convert to string
console.log(String('324'));
console.log((String("null")));
//3.convert to Boolean
console.log(Boolean(0));
console.log(Boolean(false));