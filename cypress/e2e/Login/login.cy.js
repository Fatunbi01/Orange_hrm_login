// /// <reference types="cypress" />
// describe('orange hrm login test', () => {
//   it('login test', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/')
//     // Add actual test actions
//     cy.get('[name="username"]').type('Admin')
//     cy.get('[name="password"]').type('admin123')
//     cy.get('[type="submit"]').click()
//   })
// })
// /// <reference types="cypress" />
// import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
// import { LoginPage } from "../pages/Login_page"
// //it('login test', function () {
//   const loginpage = new LoginPage
// //   loginpage.Navigate()
// //   loginpage.EnterUsername()
// //   loginpage.EnterPassword()
// //   loginpage.ClickLoginButton()
// // })
// Given(' Visit orange hrm website', function () {
//   loginpage.Navigate()
// })
// When('User provide username', function () {
//   loginpage.EnterUsername()
// })
// When('User provide password', function () {
//   loginpage.EnterPassword()
// })
// Then('Click on the login button to login into the orange hrm website', function () {
//   loginpage.ClickLoginButton()
// })

/// <reference types="cypress" />
import { LoginPage } from "../../pages/Login_page"
const loginpage = new LoginPage
it('login test', function () {
  loginpage.Navigate()
  loginpage.EnterUsername()
  loginpage.EnterPassword()
  loginpage.ClickLoginButton()
























//import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

})
// Given(' Visit orange hrm website', function () {
//   cy.visit('https://opensource-demo.orangehrmlive.com/')
// })
// When('User provide username', function () {
//    loginpage.EnterUsername('Admin')
// })
// When('User provide password', function () {
//    loginpage.EnterPassword('admin123')
// })
// Then('Click on the login button to login into the orange hrm website', function () {
//    loginpage.ClickLoginButton
// })

