import { FormElementComponent } from './form-element.component';
import { Default } from './form-element.component.stories';

describe('FormElementComponent', () => {
  beforeEach(() => {
    cy.mount(FormElementComponent, {
      componentProperties: {
        ...Default.args,
        label: 'My label',
        value: 'My value',
      },
    });
  });

  it('should render input', () => {
    cy.get('input').should('be.visible');
    cy.get('input').should('have.value', 'My value');
  });

  it('should render label', () => {
    cy.get('label').should('be.visible');
    cy.get('label').should('contain.text', 'My label');
  });
});
