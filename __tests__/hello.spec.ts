import { chromium } from 'playwright';

test('testing example', async () => {
    try {
        const browser = await chromium.launch({ headless: false });
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/watch?v=Zzylc-7PwQ4');
        await page.waitFor('#container > h1 > yt-formatted-string');
        const title = await page.$('#container > h1 > yt-formatted-string');
        if(title) {
            const textContent = await title.getProperty('textContent');
            if(textContent) {
                const text = await textContent.jsonValue();
                expect(text).toEqual('SHAED x ZAYN - Trampoline (Official Lyric Video)');
            }
        }
        await page.close();
    } catch (error) {
        console.error(error);
    }
});