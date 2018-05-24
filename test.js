var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("foodLog", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should send user to their profile page", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("### website link")
      // Click the logo
      .click("a[href='/##/##']")
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      // The title is as expected
      .then(function(title) {
        expect(title).to.equal("iCandy");
        done();
      });
  });

  it("should take you to the user dashboard page after login", function(done) {
    new Nightmare({ show: true })
      .goto("####")
      // Enter username.
      .type("#id", "test_name")
      // Enter password.
      .type("#id", "test_password")
      // Click the login button
      .click("#id")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "learn" link can be found
        return document.querySelector("a[href='/###']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });

  it("should insert user info into form", function(done) {
    new Nightmare({ show: true })
      .goto("####")
      // Enter food.
      .click("#id")
      // Enter serving.
      .click("#id")
      // Enter weight.
      .click("#id")
      // Enter height.
      .click("#id")                 
      // Click the button
      .click("#id")
      // Evaluate the following selector
      .evaluate(function() {
        // Assert the "learn" link can be found
        return document.querySelector("a[href='/###']");
      })
      .then(function(link) {
        expect(link).to.not.equal(undefined);
        done();
      });
  });
