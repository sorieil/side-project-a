import lazyLoading from './LazyLoading'

export default {
  name: 'landing',
  path: '/',
  component: lazyLoading('Landing'),
  meta: {
    default: false,
    title: 'Urbansnap Landing',
    active: false,
    login: false,
    loginType: 'all'
  }
}
