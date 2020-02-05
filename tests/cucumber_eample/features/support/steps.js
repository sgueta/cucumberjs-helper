const { Given, When, Then } = require("cucumber");
const { expect } = require("chai");
const puppeteer = require('puppeteer');

Given(/^browser is up and redirected to "([^"]+)"$/, async(target) => {
  this.browser = await, puppeteer.launch()
  this.page = await this.browser.newPage()
  await this.page.goto(target)
})

When(/^user writes "([^"]+)" in search bar$/, async(value) => {
  const searchField = await this.page.$('[name="q"]')
  searchField.click()
  await this.page.keyboard.type(value)
})

Then(/^verify list of sites is presented below$/, async() =>{
    const results = await this.page.$$("div.g div.rc a[href*=http] h3")
    if (!results || !results.length){
        throw("No results")
    }
})