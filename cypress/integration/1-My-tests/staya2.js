describe('Проверка формы логина и пароля для Staya', function () {

    it('Позитивный кейс: успешная авторизация', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vkonovalov74@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Lenovo340');
        cy.get('.auth-form__submit').click();
        cy.contains('Мои заказы');
    })

    it('Негативный кейс: неверный пароль', function () {
        cy.get('button.profile__nav-link').click();
        cy.get('.box__button_ok').click();
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('vkonovalov74@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Lenovo');
        cy.get('.auth-form__submit').click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
})
