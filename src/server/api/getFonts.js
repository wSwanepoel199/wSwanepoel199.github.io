import fs from 'node:fs';
import path from 'path';

export default defineEventHandler(async (e) => {
  // console.log(font);
  const fontSelected = await readBody(e);

  const data = fs.readFileSync(path.join('./node_modules/figlet/fonts', `${fontSelected[0]}.flf`), 'utf8');
  // console.log(data);
  return data;
});