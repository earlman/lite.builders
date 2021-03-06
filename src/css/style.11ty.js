
/**
 *
 * This file:
 * 1) Compiles SASS from _includes/scss/
 * 2) Cleans resulting CSS
 * 3) Outputs CSS to dist/css/
 *
 */



const path = require('path')
const sass = require('node-sass-promise')
const CleanCSS = require('clean-css')

const inputFile = path.join(__dirname, '../_includes/scss/index.sass')
const outputFile = path.join(__dirname, '../css/style.css')

const comment = `/* This is an example comment */`

module.exports = class {

    data() {
        return {
            permalink: 'css/style.css',
            eleventyExcludeFromCollections: true
        }
    }

    async render() {
        const { css } = await sass.render({ file: inputFile })
        const output = new CleanCSS({}).minify(css.toString()).styles

        return `${comment}\n\n${output}`
    }

}