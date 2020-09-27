module.exports = {
  pwa: {
    name: 'catpics-get',
    themeColor: '#000000',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [
        /\.map$/,
        /manifest\.json$/
      ]
    }
  }
}
