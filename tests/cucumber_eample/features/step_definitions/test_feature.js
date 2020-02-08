const { Given, When, Then } = require("cucumber");

Given(/^variable "a" equals to "([^"]+)"$/, async (value) => {
    console.log("Given");
    this.a = Number(value);
});

When(/^we add "([^"]+)" to "a"$/, async (valueToAdd) => {
    console.log("When");
    this.a += Number(valueToAdd);
});

Then(/^verify "a" equals to "([^"]+)"$/, async (requiredValue) => {
    console.log("Then");
    if (this.a !== Number(requiredValue)) {
        console.error(`a value ${this.a} (current) != ${requiredValue} (required)`);
    }
});