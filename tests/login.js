/*
Page Object model - is a design pattern where each webpage represent as a separate class and all locators + actions
                    are stored inside it to improve reusability and maintenance
*/


export class LoginPage{

    constructor(page){
        this.page = page
        this.username = page.locator("[name='username']")
        this.password = page.locator("[name='password']")
        this.loginbutton = page.locator("[type='submit']")
    }

    async login(user, pass){

        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginbutton.click()

    }
}