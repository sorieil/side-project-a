/**
 * Created by yarik on 18.7.17.
 */
import lazyLoading from './LazyLoading'

export default {
  name: 'auth',
  meta: {
    title: 'Auth'
  },
  children: [
    {
      name: 'Login',
      path: '/auth/login',
      component: lazyLoading('auth/login/Login'),
      meta: {
        default: false,
        title: 'Login',
        login: false
      }
    },
    {
      name: 'Signup',
      path: '/auth/signup',
      component: lazyLoading('auth/signup/Signup'),
      meta: {
        default: false,
        title: 'Signup',
        login: false   // 이부분에서 로그인의 타입을 결정하는데....
      }
    }
  ]
}
