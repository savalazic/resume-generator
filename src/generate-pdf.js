const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  await page.pdf({
    path: 'resume.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false
  });

  await browser.close();

  console.log('resume.pdf is created!');
})();
