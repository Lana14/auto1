describe('My AUTO1 Test', function() {
    it('Visits the AUTOHERO search site', function() {
        cy.visit('https://www.autohero.com/de/search/')
    });

    it('Filters for First registration (​Erstzulassung)', function() {
        cy.get('.root___198Zr:contains("Erstzulassung ab")').click()
    });

    it('Applies the filter for ​FROM​ ​2015​', function() {
         cy.get('select[name="yearRange.min"]').select('2015')
    });

    it('Sorts cars by Price Descending (​Höchster Preis​)​', function() {
        cy.get('select[name="sort"]').select('Höchster Preis')
    });

})

