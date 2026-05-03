import { test, expect } from '@playwright/test'; 
import { HomePage } from '../pages/HomePage'; 
import { PokedexPage } from '../pages/PokedexPage'; 
import { PokemonDetailPage } from '../pages/PokemonDetailPage';

test.describe('Pokemon Website Automation', () => { 
    test('Search and explore Pikachu details', async ({ page }) => { 
        const homePage = new HomePage(page); 
        const pokedexPage = new PokedexPage(page); 
        const pokemonDetailPage = new PokemonDetailPage(page); 
        
        // Navigate to homepage 
        await homePage.goto(); 
        // Assertion homepage loaded 
        await expect(page).toHaveURL('https://www.pokemon.com/us'); 
        
        // Click Pokédex CTA 
        await homePage.clickPokedex(); 
        // Assertion redirected to pokedex page 
        await expect(page.url()).toContain('/pokedex'); 
        
        // Search Pikachu 
        await pokedexPage.searchPokemon('Pikachu'); 
        
        // Select Pikachu 
        await pokedexPage.selectPokemon(); 
        // Assertion pokemon detail opened 
        await pokemonDetailPage.validatePokemonDetail('Pikachu'); 
        
        // Scroll down to see all detail 
        await pokemonDetailPage.scrollToBottom(); 
        
        // Click Explore More Pokemon 
        await pokemonDetailPage.clickExploreMorePokemon(); 
        // Assertion button navigation works 
        await expect(page.url()).toContain('/us/pokedex/'); 
        
        // Scroll to show more pokemon 
        await pokemonDetailPage.scrollExploreMoreSection(); 
    }); 
});