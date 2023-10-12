/// <reference types="Cypress" />
const { should } = require("chai");


describe('MyAutomationPractise',function(){it('testcases', function(){
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('.mouse-hover').invoke('show')
cy.contains('Top').click({force:true})
cy.url().should('include','top')
//cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')//instead of repeating should second time  we use and

//cy.get('#checkBoxOption1').uncheck().should('notbe.checked')
//cy.get('#checkBoxOption1').uncheck().should('be.checked')
cy.get('input[type="checkbox"]').check(['option2', 'option3'])
//static dropdown
cy.get('select[id="dropdown-class-example"]').select('Option1').should('have.value','option1')
//cy.get('select[id="dropdown-class-example"]').select('Option1').should('have.value','option2')
//dynamic dropdown
//cy.get('input[id="autocomplete"]').type('india{enter}')
cy.get('input[id="autocomplete"]').type('Ind')
//cy.get('input[id="autocomplete"]').type('Ind').get('ui-menu-item div').should('have.value','India')
cy.get('.ui-menu-item div').each((ele, index, list)=>{
if(ele.text()==="India")
{
    cy.wrap(ele).click()
}
})

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#hide-textbox').click()
cy.get('[for="radio1"] > .radioButton').click().should('be.checked')
cy.get('input[id="alertbtn"]').click()
cy.get('input[id="confirmbtn"]').click()
cy.on('window:alert',(str)=>
{
expect(str).to.equals('Hello , share this practice page and share your knowledge')}
)
cy.get('#opentab').then(function(ele){
    const url=ele.prop('href')
    cy.visit(url)
    cy.origin(url,()=>{ cy.get("div.sub-menu-bar a[href*='about']").click()})
   
    })


//Removing child tab
//cy.get('#opentab').click()
cy.get('#opentab').invoke('removeAttr','target').click()
//URL navigation on next page or backward page
 

cy.url().should('include','qaclickacademy')
cy.go('back')
cy.get('tr td:nth-child(2)').each((ele, index, list) =>

{
const text=ele.text()
if(text.includes('Python'))
{
    cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
    {
const priceText=price.text()
expect(priceText).to.equal('25')
    })
    
}

})










})})