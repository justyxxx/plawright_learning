import BasePage from './basePage'
import fs from 'fs'
import {
	appLogo,
	landingPageTitle,
	landingPageImage,
	burgerMenuBtn,
	logoutSideBarLink,
	shoppingCartLink,
	productSortContainer
} from '../pageobjects/productsPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class ProductsPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyProductsPageLogoVisible() {
		return await this.isElementVisible(appLogo, testData.notVisibleText)
	}

	async verifyProductsPageTitleVisible() {
		return await this.isElementVisible(
			landingPageTitle,
			testData.notVisibleText
		)
	}

	async verifyPeekImage() {
		return await this.isElementVisible(
			landingPageImage,
			testData.notVisibleText
		)
	}

	async burgerButtonVisible() {
		return await this.isElementVisible(burgerMenuBtn, testData.notVisibleText)
	}

	async burgerButtonClick() {
		return await this.waitAndClick(burgerMenuBtn)
	}

	async shoppingCartLink() {
		return await this.isElementVisible(
			shoppingCartLink,
			testData.notVisibleText
		)
	}

	async productSortContainerVisible() {
		return await this.isElementVisible(
			productSortContainer,
			testData.notVisibleText
		)
	}

	async clickLogoutSideBarLink() {
		return await this.waitAndClick(logoutSideBarLink)
	}
}
export default ProductsPage
