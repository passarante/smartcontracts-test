const puppeteer = require("puppeteer");

async function getData(contractUrl) {
  console.log(contractUrl);
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation({
      waitUntil: "networkidle0",
      timeout: 120000,
    });
    await page.goto(contractUrl + "#code", {
      waitUntil: "networkidle0",
      timeout: 120000,
    });
    await page.addScriptTag({
      url: "https://cdnjs.cloudflare.com/ajax/libs/ace/1.34.2/ace.js",
    });
    const codes = await page.evaluate(() => {
      var editor = ace.edit("editor1");
      let data = [];
      console.log(editor);

      var code = editor.getValue();
      data.push(code);

      return data;
    });

    return { status: "ok", codes };
  } catch (error) {
    console.log(error);
    return null;
  }
}

module.exports = { getData };
