const puppeteer = require('puppeteer');

(async () => {
  console.log('resume is creating...');

  const browser = await puppeteer.launch();

  try {
    const page = await browser.newPage();

    await page.goto('http://localhost:1234', { waitUntil: 'networkidle2' });

    await page.pdf({
      path: 'resume.pdf',
      format: 'A4',
      printBackground: true,
      displayHeaderFooter: false,
    });

    console.log('resume.pdf is created!');
  } catch (err) {
    console.error(err.message);
  } finally {
    await browser.close();
  }
})();
