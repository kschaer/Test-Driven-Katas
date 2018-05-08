const { expect } = require('chai');
const wrap = require('./wrap');

const test1 = "hello World";
const maxLen1 = 5;
const maxLen2 = 2;


describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('returns original input string if maxlength is longer than input strig length', () => {
    expect(wrap("hello world", 100)).to.equal("hello world");
  });
  it('if max length is less than string length, it splits input at appropriate place', () => {
    expect(wrap(test1, maxLen1)).to.equal("hello\n World");
  })
  it('can split more than one time', () =>{
    expect(wrap(test1, maxLen2)).to.equal("he\nll\no \nWo\nrl\nd")
  })
});
