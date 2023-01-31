import { expect } from '@playwright/test'

class BasePage {
	constructor(page) {
		this.page = page
	}

	async open(url) {
		await this.page.goto(url)
	}

	async getTitle() {
		return await this.page.title()
	}

	async waitForPageLoad() {
		return await this.page.waitForLoadState('networkidle')
	}

	async isElementVisible(selector, errorMessage) {
		await this.page.waitForSelector(selector)
		const element = this.page.locator(selector)
		try {
			const isVisible = await element.isVisible()
			expect(isVisible).toBeTruthy()
		} catch (error) {
			throw new Error(`${errorMessage}`)
		}
	}

	async getUrl() {
		return this.page.url()
	}
}
export default BasePage