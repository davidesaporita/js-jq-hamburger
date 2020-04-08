/**
 * Descrizione
 * - Hamburger menu: mostrare / nascondere il menu principale (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
 * - Partite come base del vostro esercizio scaricando questa repo: https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads/
 * - Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
 */

// Referenze
hamburgerIcon = $('.header-right > a'); // Bottone per aprire l'hamburger menu
hamburgerMenu = $('.hamburger-menu'); // Hamburger menu
hamburgerClose = $('a.close'); // Bottone per chiudere l'hamburger menu

hamburgerIcon.click(toggleMenu);
hamburgerClose.click(toggleMenu);

function toggleMenu() {
    hamburgerMenu.toggle();
}