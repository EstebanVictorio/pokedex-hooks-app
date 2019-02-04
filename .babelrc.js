const path = require('path')
const alias = require('./aliases')
const presets = ['next/babel']

const plugins = [
  require.resolve('babel-plugin-module-resolver'),
  {
    root: [
      path.resolve('./')
    ],
    alias
  }
]


module.exports = {
  presets,
  plugins
}
