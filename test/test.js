var assert = require('assert');
var discountCalculator = require('../discount');

describe("discount Calculator",function(){
    it("should have discount function",function(){
        assert.equal(discountCalculator.discount instanceof Function, true, "typeof discount: "+ typeof discountCalculator.discount);
    });
    it("should return 0 with no arguments",function(){
    	var discountResult = discountCalculator.discount();
        assert.equal(discountResult, 0, "discount: " + discountResult);
    });
    it("should return 100 with first argument equals test",function(){
    	var discountResult = discountCalculator.discount('test');
        assert.equal(discountResult, 100, "discount: " + discountResult);
    });
});