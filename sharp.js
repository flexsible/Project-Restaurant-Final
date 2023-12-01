// eslint-disable-next-line import/no-extraneous-dependencies
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // mengubah ukuran gambar dengan lebar 1300px, dengan prefix -large.jpg
    sharp(`${target}/${image}`)
      .resize(1300)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    sharp(`${target}/${image}`)
      .resize(1000)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-1000.jpg`,
      ));

    sharp(`${target}/${image}`)
      .resize(870)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-870.jpg`,
      ));

    sharp(`${target}/${image}`)
      .resize(770)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-770.jpg`,
      ));

    sharp(`${target}/${image}`)
      .resize(500)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-500.jpg`,
      ));

    // mengubah ukuran gambar dengan lebar 499px, dengan prefix -small.jpg
    sharp(`${target}/${image}`)
      .resize(499)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });
