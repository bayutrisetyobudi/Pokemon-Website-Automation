
const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/HomePage');
const PokedexPage = require('../pages/PokedexPage');



  test('User can go to Pokedex page', async ({ page }) => {

    const homePage = new HomePage(page);

    // Arrange
    await homePage.navigateToWebsite();

    // Action
    await homePage.clickPokedex();

    // Assertion
    await expect(page).toHaveURL(
      homePage.pokedexUrl()
    );
  });
  
   




  test('User can go to Pikachu page', async ({ page }) => {

    const pokedexPage = new PokedexPage(page);

    // Arrange
    await pokedexPage.navigateToWebsite();

    // Action
    await pokedexPage.searchPokemon('Pikachu')

    // Assertion
    await pokedexPage.validatePokemonName();
    
  });
  

  

