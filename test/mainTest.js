const assert = require("chai").assert;
const index = require('../index')

const helloWord = index.helloWord()
const subRes = index.sub(3,6)
const array = index.arrayN()



describe("index app", function () {

    describe('Hello word', function () {
        it('Hello word text valuation', function () {
            assert.equal(helloWord, 'hello word', 'it should be printed')
        }),

        it('Hello word text valuation', function () {
            assert.typeOf(helloWord, 'string', 'it should be a string')
        })

    }),
    describe('Sub test', function () {
        it('substructing result should be 3', function () {
            assert.isBelow(subRes, 3, 'it should be 3')
        }),
        it('Sub number valuation', function () {
            assert.typeOf(subRes, 'number', 'it should be a number')
        })

    }),
    describe('Array test', function () {
        it('Array result should be 3', function () {
            assert.include(array, 3, 'it should be 3')
        })
        it('Array length', function () {
            assert.lengthOf(array, 5)
        })
    })
  
});
