import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const input = join(root, 'public', 'profile.png');
const output = join(root, 'public', 'profile-enhanced.webp');
const outputPng = join(root, 'public', 'profile-enhanced.png');

await sharp(input)
  .resize(900, 1125, { fit: 'cover', position: 'attention' })
  .normalize()
  .modulate({ brightness: 1.02, saturation: 1.04 })
  .sharpen({ sigma: 0.6, m1: 0.4, m2: 0.25 })
  .webp({ quality: 93 })
  .toFile(output);

await sharp(output)
  .png({ quality: 95 })
  .toFile(outputPng);

console.log('Enhanced profile saved to public/profile-enhanced.webp and .png');
