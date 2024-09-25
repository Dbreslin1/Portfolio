function loadPage(component) {
  return () => import(`@/components/${component}.vue`);
}

export default [
  { path: '/', component: loadPage('Home') }, // Add a comma here
  { path: '/Builder', component: loadPage('Builder') },
  { path: '/Comparison', component: loadPage('Comparison') },
  { path: '/Support', component: loadPage('Support') },
  { path: '/PreBuild', component: loadPage('PreBuild') },
  { path: '/Register', component: loadPage('Register')},
  { path: '/Login', component: loadPage('Login')},
  { path: '/HomePage', component: loadPage('HomePage')}
]
