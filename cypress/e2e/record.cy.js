describe("record", () => {
it("tests record", () => {
  cy.viewport(922, 789);

  cy.visit("https://oatdev.thaibevapp.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D82221111-2542-4986-9ee9-f8270271e757%26redirect_uri%3Dhttps%253A%252F%252Fbptdev.thaibevapp.com%252Fcallback.html%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520roles%2520employeeid%2520job_profile%2520offline_access%2520user.readonly%26state%3D7214365ec64e463b94aabf86486db532%26code_challenge%3DChjgtvwk8EAzBis2R2RDk9Xx26T8cpJ86W-KPYJwEbI%26code_challenge_method%3DS256%26response_mode%3Dquery");

  cy.get("[id=Username]").type("CROSS001");

  cy.get("[id=Password]").dblclick();

  cy.get("[id=Password]").type("cross001");

  cy.get("[id=btnLogin]").click();
  cy.location("href").should("eq", "https://oatdev.thaibevapp.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3D82221111-2542-4986-9ee9-f8270271e757%26redirect_uri%3Dhttps%253A%252F%252Fbptdev.thaibevapp.com%252Fcallback.html%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520roles%2520employeeid%2520job_profile%2520offline_access%2520user.readonly%26state%3D7214365ec64e463b94aabf86486db532%26code_challenge%3DChjgtvwk8EAzBis2R2RDk9Xx26T8cpJ86W-KPYJwEbI%26code_challenge_method%3DS256%26response_mode%3Dquery");

  cy.get("[id=alerterror] > div > div > div.px-3.text-center > button").click();

  cy.get("[id=Password]").dblclick();

  cy.get("[id=Password]").type("CROSS001");

  cy.get("[id=btnLogin]").click();
  cy.location("href").should("eq", "https://bptdev.thaibevapp.com/callback.html?code=98BE02D84C9CAEE8AD081988ABA77047E3F651C2A235803C56FE7A10D6843A45&scope=openid%20profile%20email%20roles%20employeeid%20job_profile%20offline_access%20user.readonly&state=7214365ec64e463b94aabf86486db532&session_state=GL0z2yU2A7nXc_ZM-ghUhCTAvqEDm5EdpSOWYL068z8.D5F3BD0D10BCA8FF48622780B3A74EA6");

  });
});
//# recorderSourceMap=BCCECGCICKCMDPCRCTCVD
