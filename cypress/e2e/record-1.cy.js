describe("Recording 2/4/2023 at 12:50:07 PM", () => {
it("tests Recording 2/4/2023 at 12:50:07 PM", () => {
  cy.viewport(876, 1009);

  cy.visit("https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57j46i20i131i199i263i433i465i512j35i39j69i60j69i65l2j69i60j5.5155j0j4&sourceid=chrome&ie=UTF-8");

  cy.get("#tsf > div:nth-child(1) > div.A8SBwf.h3L8Ub > div.RNNXgb > div > div.a4bIc > input").click();

  cy.get("#tsf > div:nth-child(1) > div.A8SBwf.h3L8Ub > div.RNNXgb > div > div.a4bIc > input").type("google develop");

  cy.type("{enter}");

  });
});
