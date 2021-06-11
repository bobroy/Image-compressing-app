const fs = require('fs')
const resizeImg = require('resize-img');
const { compress } = require('compress-images/promise');
// const compress = require('compress-image')

const addImage =  async (path,height,width) => {
    const image = await resizeImg(fs.readFileSync(Buffer.from(path)), {
        width: width,
        height: height
    });
 
    fs.writeFileSync('compressed/download.png', image);
};

const processImages = async (inputPath, outputPath, var1) => {
    console.log('This is Working')
    console.log(inputPath)
    console.log(outputPath)
    console.log(var1)
  
    const result = await compress({
        source: inputPath,
        destination: outputPath,
        enginesSetup: {
            jpg: { engine: 'mozjpeg', command: ['-quality', var1]},
            png: { engine: 'pngquant', command: ['--quality=20-50', '-o']},
        }
    });

    // const { statistics, errors } = result;
    // // statistics - all processed images list
    // // errors - all errros happened list
    // processImages();
}
    
    

 
module.exports = {
    addImage,
    processImages
}