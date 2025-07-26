
describe('Login Tests', () => {
  it('Visits the React app', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Todo App');
  });
});
