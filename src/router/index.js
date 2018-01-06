import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/pages/Landing'
import Campaign from '@/pages/Campaign'
import Donate from '@/pages/Donate'
import CampaignDetail from '@/pages/CampaignDetail'
import Blog from '@/pages/Blog'
import BlogDetail from '@/pages/BlogDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/campaign',
      name: 'Campaign',
      component: Campaign
    },
    {
      path: '/donate',
      name: 'Donate',
      component: Donate
    },
    {
      path: '/campaign/:id',
      name: 'CampaignDetail',
      component: CampaignDetail
    },
    {
      path: "/blog",
      name: 'Blog',
      component: Blog
    },
    {
      path: "/blog/:id",
      name: 'BlogDetail',
      component: BlogDetail
    }
  ]
})
