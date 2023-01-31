import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import {
	baseUrl,
	title,
} from '../support/constants'

test.describe(
	() => {
		test('Переход на главную, проверка тайтла', async ({
			loginPage,
		}) => {
			await test.step('', async () => {
				await loginPage.openApp()
				await loginPage.loginPageLogo()
				expect(await loginPage.getTitle()).toBe(title)
				expect(await loginPage.getUrl()).toContain(baseUrl)
        	})
		}
	)
})