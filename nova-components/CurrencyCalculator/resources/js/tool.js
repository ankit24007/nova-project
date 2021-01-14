Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'currency-calculator',
      path: '/currency-calculator',
      component: require('./components/Tool'),
    },
  ])
})
