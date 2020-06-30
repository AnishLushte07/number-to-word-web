const assert = require('assert');

const lib = require('./lib.js');

describe('Numbers to words test', function () {
    it('should return words string', function () {
        const result = lib.convert('120356');
        assert.equal(result, 'one lakh twenty thousand three hundred fifty six');
    });
    
    it('should throw error Pass integer value', function () {
        assert.throws(() => lib.convert('1212'), 'Error');
    });

    it('should throw error Number length more than 9', function () {
        assert.throws(() => lib.convert(12345367889), 'Error');
    });
});