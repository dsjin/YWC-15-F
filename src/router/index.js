import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/pages/Landing'
import Campaign from '@/pages/Campaign'
import Donate from '@/pages/Donate'
import CampaignDetail from '@/pages/CampaignDetail'

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
    }
  ]
})
