module.exports = {
    apps: [
      {
        name: 'NuxtFunnel',
        port: '4050',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }
  