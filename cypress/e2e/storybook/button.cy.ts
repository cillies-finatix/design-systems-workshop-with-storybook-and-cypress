describe("The ButtonComponent", () => {
  it("Checks that the button element exists and is visible", () => {
    cy.visit(
      "http://localhost:6006/iframe.html?args=&id=ui-button--default"
    );
    cy.get("app-button").should("exist");
    cy.get("app-button").should("be.visible");
  });
});
