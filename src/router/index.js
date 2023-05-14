import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// Alle klimaten

import PoolKlimaat from '../views/klimaten/PoolKlimaat.vue';
import HooggebergteKlimaat from '../views/klimaten/HooggebergteKlimaat.vue';
import ToendraKlimaat from '../views/klimaten/ToendraKlimaat.vue';
import LandKlimaat from '../views/klimaten/LandKlimaat.vue';
import GematigdZeeKlimaat from '../views/klimaten/GematigdZeeKlimaat.vue';
import WoestijnKlimaat from '../views/klimaten/WoestijnKlimaat.vue';
import SavanneKlimaat from '../views/klimaten/SavanneKlimaat.vue';
import SteppeKlimaat from '../views/klimaten/SteppeKlimaat.vue';
import TropischRegenwoudKlimaat from '../views/klimaten/TropischRegenwoudKlimaat.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/klimaten/PoolKlimaat',
      name: 'PoolKlimaat',
      component: PoolKlimaat
    },
    {
      path: '/klimaten/HooggebergteKlimaat',
      name: 'HooggebergteKlimaat',
      component: HooggebergteKlimaat
    },
    {
      path: '/klimaten/ToendraKlimaat',
      name: 'ToendraKlimaat',
      component: ToendraKlimaat
    },
    {
      path: '/klimaten/LandKlimaat',
      name: 'LandKlimaat',
      component: LandKlimaat
    },
    {
      path: '/klimaten/GematigdZeeKlimaat',
      name: 'GematigdZeeKlimaat',
      component: GematigdZeeKlimaat
    },
    {
      path: '/klimaten/WoestijnKlimaat',
      name: 'WoestijnKlimaat',
      component: WoestijnKlimaat
    },
    {
      path: '/klimaten/SavanneKlimaat',
      name: 'SavanneKlimaat',
      component: SavanneKlimaat
    },
    {
      path: '/klimaten/SteppeKlimaat',
      name: 'SteppeKlimaat',
      component: SteppeKlimaat
    },
    {
      path: '/klimaten/TropischRegenwoudKlimaat',
      name: 'TropischRegenwoudKlimaat',
      component: TropischRegenwoudKlimaat
    }
  ]
})

export default router
