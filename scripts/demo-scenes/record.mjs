// Records the demo scenes to video with Playwright and the installed Chrome.
// Usage: node record.mjs <base-url> <out-dir>   (serve the site folder first: npx serve .)
import { chromium } from 'playwright'
import { mkdirSync, renameSync, readdirSync } from 'node:fs'

const [, , base, out] = process.argv
const SCENES = [
  ['write', 15500],
  ['graph', 14500],
  ['report', 13500],
]
mkdirSync(out, { recursive: true })
const browser = await chromium.launch({ channel: 'chrome' })
for (const [name, ms] of SCENES) {
  const dir = `${out}/${name}-raw`
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
    recordVideo: { dir, size: { width: 1280, height: 720 } },
  })
  const page = await context.newPage()
  await page.goto(`${base}/scripts/demo-scenes/${name}.html`)
  await page.waitForTimeout(ms)
  await context.close()
  renameSync(`${dir}/${readdirSync(dir)[0]}`, `${out}/${name}.webm`)
}
await browser.close()
