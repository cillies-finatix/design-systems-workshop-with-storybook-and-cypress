import { InputComponent } from './input.component';
import { Default } from './input.component.stories';

describe('The InputComponent', () => {
  beforeEach(() => {
    cy.mount(InputComponent, {
      componentProperties: Default.args,
    });
  });

  it('checks that the input element exists and is visible', () => {
    cy.get('input').should('exist');
    cy.get('input').should('be.visible');
  });
});
