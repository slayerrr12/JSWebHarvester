const puppeteer = require("puppeteer");




(async ()=>{

        const browser = await puppeteer.launch({haedless : false})
        const page = await browser.newPage()
        await page.goto("https://google.com") 
        await page.screenshot({path: "sample.png"})
        await browser.close()

})()