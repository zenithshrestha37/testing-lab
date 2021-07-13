const { multiply, divide, subtract } = require("./functions")
const functions = require("./functions")
const { returnTwo, greeting, add } = functions

test ("the function should return the value 2", () => {
    expect(returnTwo()). toBe(2)
})

test (`the greeting function should return "Hello, {name}"`, () => {
    expect(greeting("Zenith")).toBe("Hello, Zenith")
    expect(greeting("Smit")).toBe("Hello, Smit")
})



describe('greetin', (name) => {
    test(`this test should return "hello, {name}"`, () => {
        expect (greeting('Zenith')).toBe('Hello, Zenith')
    })
})
// describe (`this function should return the multiplication of two numbers`, () => {
describe (`Math functions`, () => {
    test (` this test should add the two numbers`, () => {
                expect(add("zen","ith")).toBe("zenith")
            })
    test (` this test should multiply the two numbers`, () => {
        expect(multiply(2,6)).toBe(12)
    })
// })

// describe (`this function should return the subtraction of two numbers`, () => {
    test (` this test should subtract the two numbers`, () => {
        expect(subtract(6,2)).toBe(4)
    })
// })

// describe (`this function should return the division of two numbers`, () => {
    test (` this test should multiply the two numbers`, () => {
        expect(divide(6,2)).toBe(3)
    })
})

// test for data type

test (` this test should add the two numbers`, () => {
    expect( typeof add(3,6)).toBe("number")
})



test(`this test should return "hello, {name}" as string`, () => {
        expect (typeof 'greeting("Zenith")').toBe('string')
    })