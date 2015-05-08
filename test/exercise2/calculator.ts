/// <reference path="../../references.ts" />

module Calculator {
    describe('Exercise2', () => {
        describe('Calculator Module', () => {
            describe('NumberExpression', () => {
                it('should return the number provided in the constructor', () => {
                    var expression = new NumberExpression(5);
                    assert.ok(expression.eval() === 5);
                });
            });
            describe('AddExpression', () => {
                it('should return the sum of two Expressions provided in the constructor', () => {
                    var expression = new AddExpression(new NumberExpression(2), new NumberExpression(-5));
                    assert.ok(expression.eval() === -3)
                });
            });
            describe('ExpressionComparer', () => {
                describe('equals', () => {
                    it('should return true if the two expression evaluations are equal', () => {
                        var expression = new ExpressionComparer(new NumberExpression(35), new NumberExpression(35));
                        assert.ok(expression.equals());
                    });
                    it('should return false if the two expression evaluations are not equal', () => {
                        var equalExpression = new ExpressionComparer(new NumberExpression(5), new NumberExpression(4));
                        assert.ok(!equalExpression.equals());
                    });
                });
                describe('greaterThan', () => {
                    it('should return true if the left expression is greater than the right', () => {
                        var greaterThanExpression = new ExpressionComparer(new NumberExpression(7), new NumberExpression(3));
                        assert.ok(greaterThanExpression.greaterThan());
                    });
                    it('should return false if the left expression is equal to or less than the right', () => {
                        var lessThanExpression = new ExpressionComparer(new NumberExpression(1), new NumberExpression(6));
                        assert.ok(!lessThanExpression.greaterThan());

                        var equalExpression = new ExpressionComparer(new NumberExpression(6), new NumberExpression(6));
                        assert.ok(!equalExpression.greaterThan());
                    });
                });
            });
        });
    });
}