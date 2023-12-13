import { IconComponent } from './icon.component';
import { Default } from './icon.component.stories';

describe('IconComponent', () => {
  beforeEach(() => {
    cy.mount(IconComponent, {
      componentProperties: Default.args,
    });
  });

  it('checks that the icon element exists and is visible', () => {
    cy.get('[role=img]').should('exist');
    cy.get('[role=img]').should('be.visible');
  });
});
