describe("Recording 2/6/2023 at 1:05:20 PM", () => {
it("tests Recording 2/6/2023 at 1:05:20 PM", () => {
  cy.viewport(973, 1121);

  cy.visit("https://nest-green.tdshop.io/");

  cy.get("#btn-signin").click();

  cy.get("#side-menu > li.ng-tns-c259-3.report.ng-star-inserted > a").click();

  cy.get("#page-content > div > app-report-list > div.admin-form.mt-2 > div.container-fluid > div > div:nth-child(1) > div.report-section > div:nth-child(1) > button > em").click();

  cy.get("#receiptDateFrom").click();

  cy.get("body > bs-datepicker-container > div > div > div > div > bs-days-calendar-view > bs-calendar-layout > div.bs-datepicker-body > table > tbody > tr:nth-child(1) > td:nth-child(5) > span").click();

  cy.get("#receiptDateTo").click();

  cy.get("body > bs-datepicker-container > div > div > div > div > bs-days-calendar-view > bs-calendar-layout > div.bs-datepicker-body > table > tbody > tr:nth-child(1) > td:nth-child(5) > span").click();

  });
});
//# recorderSourceMap=BCCECGCICKCMCOCQCSC
