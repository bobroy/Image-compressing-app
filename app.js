const chalk = require('chalk')
const { required } = require('yargs')
const yargs = require('yargs')
const paths = require('./path')

//customize app version using yargs
yargs.version('1.0.0')

//create Resize command
yargs.command({
    command: 'resize',
    describe: 'Add source path of your file and new height and width',
    builder : {
        path : {
            describe: 'Image Path',
            required: true,
            type: 'string'
        },
        height : {
            describe: 'New Height',
            required: true,
            type: 'number'
        },
        width : {
            describe: 'New Width',
            required: true,
            type: 'number'
        } 
    },
    
    handler(argv){
        paths.addImage(argv.path, argv.height, argv.width)
    }
    
})


yargs.command({
    command: 'compress',
    describe: 'To compress image',
    builder : {
        inputPath : {
            describe: 'Input Path',
            required: true,
            type: 'string'
        },
        outputPath : {
            describe: 'Output Path',
            required: true,
            type: 'string'
        },
        var1:{
            describe: 'user value',
            required: true,
            type:'int'

        }
    },
    
    handler(argv){
        paths.processImages(argv.inputPath, argv.outputPath, argv.var1)
    }
    
})


//console.log(yargs.argv)
yargs.parse()