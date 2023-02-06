describe("Recording 2/6/2023 at 1:09:34 PM", () => {
it("tests Recording 2/6/2023 at 1:09:34 PM", () => {
  cy.viewport(973, 1121);

  cy.visit("https://nest-green.tdshop.io/");

  cy.get("#username").click();

  cy.get("#username").type("panumat.ma");

  cy.get("#password").click();

  cy.get("#password").type("panumatMa15");

  cy.get("#btn-signin").click();

  cy.get("#side-menu a[href='/reports']").click();

  cy.get("#page-content > div > app-report-list > div.admin-form.mt-2 > div.container-fluid > div > div:nth-child(1) > div.report-section > div:nth-child(2) > button > em").click();

  cy.get("#storeOpenDateFrom").click();

  cy.get("body > bs-datepicker-container > div > div > div > div > bs-days-calendar-view > bs-calendar-layout > div.bs-datepicker-body > table > tbody > tr:nth-child(1) > td:nth-child(5) > span").click();

  cy.get("#storeOpenDateTo").click();

  cy.get("body > bs-datepicker-container > div > div > div > div > bs-days-calendar-view > bs-calendar-layout > div.bs-datepicker-body > table > tbody > tr:nth-child(2) > td:nth-child(5) > span").click();

  cy.get("#export_voucher_report_btn").click();

  });
});
