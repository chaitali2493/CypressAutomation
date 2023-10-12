/// <reference types="Cypress" />

const { should } = require("chai");

describe('My first test suite', function() 
{
it('My first test case', function()
{
    // test step
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/");
    cy.get('.search-keyword').type("ca");
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    cy.contains('ADD TO CART').click()
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.products').find('.product').each((ele,index,list)=>{
    const vegtable_name= ele.find("h4.product-name").text()
    if(vegtable_name.includes('Cashews'))
    {
    cy.wrap(ele).find('button').click();
    console.log("Hi");
    
    }
        
    })




})
})