import fs from 'node:fs/promises';
import path from 'path';

export default defineEventHandler(async (e) => {
  if (e.method === 'GET') {
    const fonts = await fs.readdir('./node_modules/figlet/fonts', { withFileTypes: false }).then((fonts) => fonts.map((name) => name.replace('.flf', '')));
    return fonts;
  }
  const options = await readBody(e);
  if (options.font) {
    const font = await fs.readFile(path.join('./node_modules/figlet/fonts', `${options.font}.flf`), 'utf8');
    return font;
  }

  return 'No font';
});