import BasePage from './basePage'
import { baseUrl } from '../support/constants'
import fs from 'fs'
import {
	loginPageLogo,
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
}
export default LoginPage