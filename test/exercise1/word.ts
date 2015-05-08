/// <reference path="../../references.ts" />

module Exercise1 {
    describe('Exercise1', () => {
        describe('Word', () => {
            describe('removeVowels()', () => {
                // add your tests here (exercise B)
                it('should strip vowels from the word', () => {
                    var test = new Exercise1.Word('test');
                    assert.equal(test.removeVowels(), 'tst');
                });
            });
            describe('removeNumbers()', () => {
                // add your tests here (exercise C)
                it('should ... some behavior', () => {
    	           var alphaNumeric = new Exercise1.Word('abc123def456');
                   assert.equal(alphaNumeric.removeNumbers(), 'abcdef');
                });
            });
        });
    });
}
