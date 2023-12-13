import { FormInputComponent } from './form-input.component';
import { Default } from './form-input.component.stories';

describe('The FormInputComponent', () => {
  beforeEach(() => {
    cy.mount(FormInputComponent, {
      componentProperties: Default.args,
    });
  });

  it('checks that the input element exists and is visible', () => {
    cy.get('input').should('exist');
    cy.get('input').should('be.visible');
  });
});
