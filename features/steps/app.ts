import { Given, Then, When } from "cucumber";
import { Selector as NativeSelector } from "testcafe";

const Selector = (input, t) => {
  return NativeSelector(input).with({ boundTestRun: t });
};

Given("a localhost is running", async t => {});

When("I navigate to its page", async t => {});

Then("I see Hello World phrase", async t => {
  const firstLink = Selector("#app", t).find("h1");

  await t.expect(firstLink.innerText).contains("Hello World");
});
