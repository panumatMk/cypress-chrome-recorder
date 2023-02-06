describe("Create Survey", () => {
it("tests", () => {

  cy.visit("https://bptdev.thaibevapp.com/survey-management");

  cy.get("[id=Username]").type("CROSS001");

  cy.get("[id=Password]").type("CROSS001");

  cy.get("[id=btnLogin]").click();
  cy.location("href").should("eq", "https://bptdev.thaibevapp.com/survey-management");

  cy.get("[id=btn-create-survey] > span").click();

  cy.get("[id=btn-create] > span").click();

  cy.get("[id=app] > div > div > div > div.p-tabview-panels > div:nth-child(1) > div > div > div.template-setting-form > div:nth-child(1) > div > input").click();

  cy.get("[id=app] > div > div > div > div.p-tabview-panels > div:nth-child(1) > div > div > div.template-setting-form > div:nth-child(1) > div > input").type("ทดสอบการสร้าง");

  cy.get("[id=tab-question]").click();

  cy.get("[id=text-sub-section]").click();

  cy.get("[id=text-sub-section]").type("สวัสดี");

  cy.get("[id=btn-column-4]").click();

  cy.get("[id=dropdown-answer-type-0] > span").click();

  cy.get("[id=dropdown-answer-type-0_0]").click();

  cy.get("[id=text-question-0]").click();

  cy.get("[id=text-question-0]").type("ทดสอบ1");

  cy.get("[id=dropdown-answer-type-1] > span").click();

  cy.get("[id=dropdown-answer-type-1_0]").click();

  cy.get("[id=text-question-1]").click();

  cy.get("[id=text-question-1]").type("ทดสอบ2");

  cy.get("[id=dropdown-answer-type-2] > span").click();

  cy.get("[id=dropdown-answer-type-2_1]").click();

  cy.get("[id=dropdown-answer-type-3] > span").click();

  cy.get("[id=dropdown-answer-type-3_1]").click();

  cy.get("[id=btn-save]").click();

  cy.get("#toast-error-summary").should("have.text","บันทึกข้อมูลเรียบร้อย");

  });
});
