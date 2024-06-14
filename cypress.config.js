module.exports = {
  e2e: {
    baseUrl: 'http://localhost:1313/',
    env: {
      barfoo: "from config",
      env: "local",
    },
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
      })
    },
  },
}
