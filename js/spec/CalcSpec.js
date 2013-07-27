/**
 * Created with JetBrains WebStorm.
 * User: Toast
 * Date: 7/26/13
 * Time: 10:24 AM
 * To change this template use File | Settings | File Templates.
 */
describe('Calculator',function(){
  var calc;

  beforeEach(function(){
     calc = new Calc();
  });

  it("should be able to add two numbers", function(){
     expect(calc.addNumbers(2,3)).toEqual(5);
  });

  it("should be able to subtract two numbers", function(){
     expect(calc.substrNumbers(4,3)).toEqual(1);
  });
});