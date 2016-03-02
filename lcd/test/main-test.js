
describe('Main Task: print lcd', function() {

  var input;
  var output;

  beforeEach(function () {

    input = '910';

    output = '._. ... ._.\n' +
      '|_| ..| |.|\n' +
      '..| ..| |_|';

  });

  it('should print correct number by char', function () {
    spyOn(console, 'log');

    printLDCStr(input);
    expect(console.log).toHaveBeenCalledWith(output);

  });
});
describe('Task 1: split number', function() {

  var input;
  var output;

  beforeEach(function () {

    input = '910';

    output = ['9','1','0'];

  });

  it('should get a split array', function () {
    var result = splitNumber(input);
    expect(result).toEqual(output);
  });


});
