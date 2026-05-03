import { expect } from '@playwright/test'; 

export class PokemonDetailPage { 
    constructor(page) { 
        this.page = page; this.pokemonTitle = page.locator('h1'); 
        this.exploreMoreButton = page.locator('text=Explore More Pokémon'); 
    } 
    async validatePokemonDetail(name) { 
        await expect(this.pokemonTitle).toContainText(name); 
    } 
    async scrollToBottom() { 
        await this.page.mouse.wheel(0, 5000); 
        await this.page.waitForTimeout(2000); 
    } 
    async clickExploreMorePokemon() { 
        await expect(this.exploreMoreButton).toBeVisible(); 
        await this.exploreMoreButton.click(); 
    } 
    async scrollExploreMoreSection() { 
    await this.page.mouse.wheel(0, 5000); 
    await this.page.waitForTimeout(2000); 
} 
}