import BasePage from './basePage'
import { baseUrl } from '../support/constants'
import fs from 'fs'
import {
	loginPageLogo,
    username,
	password,
	loginButton
} from '../pageobjects/loginPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open(baseUrl)
		return await super.waitForPageLoad()
	}

	async loginPageLogo() {
		return await this.isElementVisible(loginPageLogo, testData.notVisibleText)
	}

    async usernameFieldVisible() {
		return await this.isElementVisible(username, testData.notVisibleText)
	}

	async passwordFieldVisible() {
		return await this.isElementVisible(password, testData.notVisibleText)
	}

    async loginButtonIsEnabled() {
		return await this.isElementEnabled(loginButton, testData.notEnabledText)
	}

	async loginAsStandardUser() {
		await this.waitAndFill(username, testData.standard_user)
		await this.waitAndFill(password, testData.password)
		await this.waitAndClick(loginButton)
	}
}
export default LoginPage