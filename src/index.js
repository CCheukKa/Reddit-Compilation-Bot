const fs = require('fs-extra');
const puppeteer = require('puppeteer');
// const path = require('path');
const credentials = require('../config/credentials');
const urls = require('../config/urls');


(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: { width: 1200, height: 600 }
    });
    const page = await browser.newPage();

    if (await fs.existsSync('./data/cookies.json')) {
        // load cookies
        let cookiesString = await fs.readFile('./data/cookies.json');
        let cookies = JSON.parse(cookiesString);
        await page.setCookie(...cookies);
        console.log('Logged in with cookies');
    } else {
        // login & set cookies
        await page.goto(urls.loginPage);
        await page.type('#loginUsername', credentials.username);
        await page.type('#loginPassword', credentials.password);
        await page.click('button.AnimatedForm__submitButton');
        console.log('Logged in with credentials');
        await page.waitForNavigation();
    }

    await page.goto(urls.savedPage, { waitUntil: 'networkidle2' });

    // set cookies
    const cookies = await page.cookies();
    await fs.writeFile('./data/cookies.json', JSON.stringify(cookies, null, 2), () => {});
    //
    await browser.close();
})();