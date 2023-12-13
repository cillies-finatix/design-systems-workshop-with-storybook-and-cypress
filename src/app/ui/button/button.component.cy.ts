import { ButtonComponent } from './button.component';
import { Default } from './button.component.stories';

describe('The ButtonComponent', () => {
  beforeEach(() => {
    cy.mount(ButtonComponent, {
      componentProperties: Default.args,
    });
  });

  it('checks that the button element exists and is visible', () => {
    cy.get('button').should('exist');
    cy.get('button').should('be.visible');
  });

  it('should check that the button is rendering correctly', () => {
    cy.get('button').should(
      'have.css',
      'background-color',
      'rgb(56, 166, 248)'
    );
    cy.get('button').should('have.css', 'border-color', 'rgb(3, 87, 163)');
  });

  it('should check that the button label is rendering correctly', () => {
    cy.get('button').should('contain.text', 'Your Button label');
  });
});
