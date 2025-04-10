import { DashboardIcon } from 'tdesign-icons-vue-next';
import { shallowRef } from 'vue';

import Layout from '@/layouts/index.vue';

export default [
  {
    path: '/car',
    component: Layout,
    redirect: '/car/base',
    name: 'car',
    meta: {
      title: {
        zh_CN: '车辆管理',
        en_US: 'Dashboard',
      },
      icon: shallowRef(DashboardIcon),
      orderNo: 0,
    },
    children: [
      {
        path: 'base',
        name: 'base',
        component: () => import('@/pages/car/base/index.vue'),
        meta: {
          title: {
            zh_CN: '车辆管理',
            en_US: 'Overview',
          },
        },
      },
      {
        path: 'base',
        name: 'base',
        component: () => import('@/pages/car/base/index.vue'),
        meta: {
          title: {
            zh_CN: '车辆记录',
            en_US: 'Overview',
          },
        },
      },
      {
        path: 'trajectory',
        name: 'trajectory',
        component: () => import('@/pages/car/trajectory/index.vue'),
        meta: {
          title: {
            zh_CN: '车辆轨迹',
            en_US: 'Overview',
          },
        },
      },
    ],
  },
];
