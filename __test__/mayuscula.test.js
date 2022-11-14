//test
const isUpperCase = require ("../utiles/esmayuscula");

test("the strin HELLO should return true", () =>{
    const result = isUpperCase ("HELLO");
    expect (result).toBe(true)
})