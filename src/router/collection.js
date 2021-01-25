import Scenario from '@/services/Scenario'
import Collection from '@/services/Collection'

export default [
  {
    path: '/collection',
    component: { render: (c) => c('router-view')},
    meta: { breadcrumb: { text: 'Collections' }},
    name: 'CollectionListGroup',
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "collection_list" */'../views/Collection/CollectionList.vue'),
        name: 'CollectionList',
      },
      {
        path: 'view/:collectionId',
        component: { render: (c) => c('router-view')},
        meta: { breadcrumb: { type: 'func', func: (route) => Collection.buildReadableNameFromId(route.params.collectionId) }},
        name: 'CollectionViewGroup',
        children: [
          {
            path: '',
            component: () => import(/* webpackChunkName: "collection_view" */'../views/Collection/CollectionView.vue'),
            name: 'CollectionView',
          },
          {
            path: 'scenario/edit/:scenarioId',
            name: 'ScenarioEdit',
            meta: { breadcrumb: { type: 'func', func: (route) => Scenario.buildReadableNameFromId(route.params.scenarioId) }},
            component: () => import(/* webpackChunkName: "scenario_edit" */'../views/Collection/ScenarioEdit.vue')
          },
          {
            path: 'scenario/create',
            name: 'ScenarioCreate',
            component: () => import(/* webpackChunkName: "scenario_create" */'../views/Collection/ScenarioCreate.vue')
          }
        ]
      }
    ]
  },
]