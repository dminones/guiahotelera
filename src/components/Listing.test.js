const rewire = require("rewire")
const Listing = rewire("./Listing")
const Sorting = Listing.__get__("Sorting")
// @ponicode
describe("Sorting", () => {
    test("0", () => {
        let callFunction = () => {
            Sorting()
        }
    
        expect(callFunction).not.toThrow()
    })
})
