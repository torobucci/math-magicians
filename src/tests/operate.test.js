import operate from "../logic/operate";

describe('test operate function',()=>{
    test('should return correct result',()=>{
        expect(operate(3.5,4.6,'+')).toBe('8.1')
    })
    test('should throw an error if number is divide by 0',()=>{
        expect(operate(2,0,'÷')).toBe("Can't divide by 0.")
    })
})