module.exports = baseUrl => Object
  .entries({
    'search-ws': {},
    'university-ws': {},
    'academy-ws': {},
    'users-ws': {},
    'subscriptions-ws': {},
    'notifications-ws': {},
    'events-ws': {ws: true},
  })
  .reduce((config, [name, options]) => ({
    ...config,
    [`/${name}`]: {
      target: baseUrl,
      changeOrigin: true,
      secure: false,
      ...options
    }
  }), {});
