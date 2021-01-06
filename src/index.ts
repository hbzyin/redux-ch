// functions
import createStore from './createStore'
import combineReducers from './combineReducers'
import bindActionCreators from './bindActionCreators'
import applyMiddleware from './applyMiddleware'
import compose from './compose'
import warning from './utils/warning'
import __DO_NOT_USE__ActionTypes from './utils/actionTypes'

// 导出接口定义① store
export { CombinedState, PreloadedState, Dispatch, Unsubscribe, Observable, Observer, Store, StoreCreator, StoreEnhancer, StoreEnhancerStoreCreator, ExtendState } from './types/store'
// 导出接口定义② reducers 
export { Reducer, ReducerFromReducersMapObject, ReducersMapObject, StateFromReducersMapObject, ActionFromReducer, ActionFromReducersMapObject } from './types/reducers'
// 导出接口定义③ action creators 
export { ActionCreator, ActionCreatorsMapObject } from './types/actions'
// 导出接口定义④ middleware
export { MiddlewareAPI, Middleware } from './types/middleware'
// 导出接口定义⑥ actions
export { Action, AnyAction } from './types/actions'





// 空函数： 用来检测是否被压缩，如果被压缩，并且当前环境不为生产环境 NODE_ENV !== 'production' 抛出警告
function isCrushed() {}
if ( process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning(
    'You are currently using minified code outside of NODE_ENV === "production". ' +
      'This means that you are running a slower development build of Redux. ' +
      'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' +
      'or setting mode to production in webpack (https://webpack.js.org/configuration/mode/) ' +
      'to ensure you have the correct code for your production build.'
  )
}

export { createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes }
