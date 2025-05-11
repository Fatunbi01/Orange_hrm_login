export class LoginPage{
    Navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }
    EnterUsername() {
        cy.get('[name="username"]').type('Admin')
    }
    EnterPassword() {
        cy.get('[name="password"]').type('admin123')
    }
    ClickLoginButton() {
        cy.get('[type="submit"]').click()
    }
}

