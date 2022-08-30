let myFunctions = require('./functions')

test("Return Two test",() => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test("greeting test", () => {
    expect(myFunctions.greeting('James')).toBe("Hello, James.")
    expect(myFunctions.greeting('Jill')).toBe("Hello, Jill.")
})

// test("greeting test", () => {
//     expect(myFunctions.greeting('Jill')).toBe("Hello, Jill.")
// })

test("add Test", () => {
    expect(myFunctions.add(1, 2)).toBe(3)
    expect(myFunctions.add(5, 9)).toBe(14)
})


describe("Math Challenge!", () => {
    test("Add", () => {
        expect(myFunctions.add(5, 9)).toBe(14)
    })
    test("Substract", () => {
        expect(myFunctions.substract(9, 5)).toBe(4)
    })
    test("Multiply", () => {
        expect(myFunctions.multiply(5, 9)).toBe(45)
    })
    test("Divide", () => {
        expect(myFunctions.divide(10, 2)).toBe(5)
    })
    
})
