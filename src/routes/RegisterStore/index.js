import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'RegisterStore',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const container = require('./containers/container').default
      //const reducer = require('./modules/reducers').default

      /*  Add the reducer to the store on key 'counter'  */
      //injectReducer(store, { key: 'info', reducer })

      /*  Return getComponent   */
      cb(null, container)

    /* Webpack named bundle   */
}, 'RegisterStore')

  }
})
