//test
const palindromo = require("../utiles/palindromo.js");

test ("palindromo de fran", () => {
    const result = palindromo("fran")
    expect (result).toBe("narf")
})