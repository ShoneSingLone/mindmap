const home = () =>
  import(/* webpackChunkName: "home" */ '@/pages/Home')
export default {
  path: '/',
  name: 'home',
  component: home
}
