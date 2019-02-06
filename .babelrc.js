const path = require('path')
const alias = require('./aliases')
const presets = ['next/babel']

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [
        path.resolve('./component'),
        path.resolve('./utils'),
      ],
      alias
    }
  ]
]


module.exports = {
  presets,
  plugins
}
