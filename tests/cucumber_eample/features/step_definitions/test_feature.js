const { Given, When, Then } = require("cucumber");

Given(/^variable "a" equals to "([^"]+)"$/, async(value) => {
    this.a = Number(value);
})

When(/^we add "([^"]+)" to "a"$/, async(valueToAdd) => {
  this.a += Number(valueToAdd);
})

Then(/^verify "a" equals to "([^"]+)"$/, async(requiredValue) =>{
    if (this.a !== Number(requiredValue)){
        console.error(`a value ${this.a} (current) != ${requiredValue} (required)`);
    }
})