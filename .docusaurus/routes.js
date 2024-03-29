import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '34d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '070'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fe4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f58'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '2e8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'bb6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'e2d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'b8e'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '924'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cb2'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e99'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '0e2'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'd7a'),
            exact: true
          },
          {
            path: '/tags/documentation',
            component: ComponentCreator('/tags/documentation', '2f4'),
            exact: true
          },
          {
            path: '/tags/getting-started',
            component: ComponentCreator('/tags/getting-started', 'ec9'),
            exact: true
          },
          {
            path: '/tags/openapi',
            component: ComponentCreator('/tags/openapi', '7f3'),
            exact: true
          },
          {
            path: '/tags/quickstart',
            component: ComponentCreator('/tags/quickstart', 'd02'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', '577'),
            routes: [
              {
                path: '/category/cos-api',
                component: ComponentCreator('/category/cos-api', '5bc'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/category/customization',
                component: ComponentCreator('/category/customization', 'df6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/food-api',
                component: ComponentCreator('/category/food-api', 'bfe'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/category/petstore-api',
                component: ComponentCreator('/category/petstore-api', '23b'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/category/petstore-api-1.0.0',
                component: ComponentCreator('/category/petstore-api-1.0.0', 'a44'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/category/petstore-versioned-api',
                component: ComponentCreator('/category/petstore-versioned-api', 'f1b'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/category/restaurant-api',
                component: ComponentCreator('/category/restaurant-api', '743'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/category/saviynt-api',
                component: ComponentCreator('/category/saviynt-api', 'b4c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/category/yogurt-api',
                component: ComponentCreator('/category/yogurt-api', 'b55'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/cos/cloud-object-storage',
                component: ComponentCreator('/cos/cloud-object-storage', 'cd5'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/cos/create-a-bucket',
                component: ComponentCreator('/cos/create-a-bucket', '7a9'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/cos/generating-an-iam-token',
                component: ComponentCreator('/cos/generating-an-iam-token', '212'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/cos/list-buckets',
                component: ComponentCreator('/cos/list-buckets', '28c'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/cos/retrieve-a-buckets-headers',
                component: ComponentCreator('/cos/retrieve-a-buckets-headers', '0dd'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/customization/languagetabs',
                component: ComponentCreator('/customization/languagetabs', '958'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/customization/styling',
                component: ComponentCreator('/customization/styling', 'ed9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/food/burgers/burger-example',
                component: ComponentCreator('/food/burgers/burger-example', 'd73'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/food/burgers/list-all-burgers',
                component: ComponentCreator('/food/burgers/list-all-burgers', '5b6'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/food/yogurtstore/frozen-yogurt-example',
                component: ComponentCreator('/food/yogurtstore/frozen-yogurt-example', '9cc'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/food/yogurtstore/list-all-flavors',
                component: ComponentCreator('/food/yogurtstore/list-all-flavors', 'e36'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore_versioned/1.0.0/add-pet',
                component: ComponentCreator('/petstore_versioned/1.0.0/add-pet', '470'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/create-user',
                component: ComponentCreator('/petstore_versioned/1.0.0/create-user', '23e'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/create-users-with-array-input',
                component: ComponentCreator('/petstore_versioned/1.0.0/create-users-with-array-input', '684'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/create-users-with-list-input',
                component: ComponentCreator('/petstore_versioned/1.0.0/create-users-with-list-input', '06a'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/delete-order',
                component: ComponentCreator('/petstore_versioned/1.0.0/delete-order', '0a2'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/delete-pet',
                component: ComponentCreator('/petstore_versioned/1.0.0/delete-pet', 'ba5'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/delete-user',
                component: ComponentCreator('/petstore_versioned/1.0.0/delete-user', '9cc'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/find-pets-by-status',
                component: ComponentCreator('/petstore_versioned/1.0.0/find-pets-by-status', '94b'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/find-pets-by-tags',
                component: ComponentCreator('/petstore_versioned/1.0.0/find-pets-by-tags', 'd0e'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/get-inventory',
                component: ComponentCreator('/petstore_versioned/1.0.0/get-inventory', '7b0'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/get-order-by-id',
                component: ComponentCreator('/petstore_versioned/1.0.0/get-order-by-id', 'ad0'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/get-pet-by-id',
                component: ComponentCreator('/petstore_versioned/1.0.0/get-pet-by-id', 'ccb'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/get-user-by-name',
                component: ComponentCreator('/petstore_versioned/1.0.0/get-user-by-name', '81b'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/login-user',
                component: ComponentCreator('/petstore_versioned/1.0.0/login-user', '945'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/logout-user',
                component: ComponentCreator('/petstore_versioned/1.0.0/logout-user', '622'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/new-pet',
                component: ComponentCreator('/petstore_versioned/1.0.0/new-pet', '1ea'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/pet',
                component: ComponentCreator('/petstore_versioned/1.0.0/pet', '493'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/place-order',
                component: ComponentCreator('/petstore_versioned/1.0.0/place-order', '0d4'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/store',
                component: ComponentCreator('/petstore_versioned/1.0.0/store', 'e02'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/subscribe-to-the-store-events',
                component: ComponentCreator('/petstore_versioned/1.0.0/subscribe-to-the-store-events', '738'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/swagger-petstore-yaml',
                component: ComponentCreator('/petstore_versioned/1.0.0/swagger-petstore-yaml', 'ed6'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/update-pet',
                component: ComponentCreator('/petstore_versioned/1.0.0/update-pet', '46d'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/update-pet-with-form',
                component: ComponentCreator('/petstore_versioned/1.0.0/update-pet-with-form', '5ca'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/update-user',
                component: ComponentCreator('/petstore_versioned/1.0.0/update-user', 'b41'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/upload-file',
                component: ComponentCreator('/petstore_versioned/1.0.0/upload-file', '48f'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/1.0.0/user',
                component: ComponentCreator('/petstore_versioned/1.0.0/user', 'be0'),
                exact: true,
                sidebar: "petstore-1.0.0"
              },
              {
                path: '/petstore_versioned/add-pet',
                component: ComponentCreator('/petstore_versioned/add-pet', '967'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/create-user',
                component: ComponentCreator('/petstore_versioned/create-user', '59b'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/create-users-with-array-input',
                component: ComponentCreator('/petstore_versioned/create-users-with-array-input', 'e4a'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/create-users-with-list-input',
                component: ComponentCreator('/petstore_versioned/create-users-with-list-input', '392'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/delete-order',
                component: ComponentCreator('/petstore_versioned/delete-order', '559'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/delete-pet',
                component: ComponentCreator('/petstore_versioned/delete-pet', '8c9'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/delete-user',
                component: ComponentCreator('/petstore_versioned/delete-user', 'eb7'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/find-pets-by-status',
                component: ComponentCreator('/petstore_versioned/find-pets-by-status', 'a9f'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/find-pets-by-tags',
                component: ComponentCreator('/petstore_versioned/find-pets-by-tags', 'b73'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/get-inventory',
                component: ComponentCreator('/petstore_versioned/get-inventory', '67d'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/get-order-by-id',
                component: ComponentCreator('/petstore_versioned/get-order-by-id', '31b'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/get-pet-by-id',
                component: ComponentCreator('/petstore_versioned/get-pet-by-id', 'fa6'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/get-user-by-name',
                component: ComponentCreator('/petstore_versioned/get-user-by-name', '382'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/login-user',
                component: ComponentCreator('/petstore_versioned/login-user', 'b64'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/logout-user',
                component: ComponentCreator('/petstore_versioned/logout-user', '7cd'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/new-pet',
                component: ComponentCreator('/petstore_versioned/new-pet', '094'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/pet',
                component: ComponentCreator('/petstore_versioned/pet', 'df8'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/place-order',
                component: ComponentCreator('/petstore_versioned/place-order', 'bed'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/store',
                component: ComponentCreator('/petstore_versioned/store', '3df'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/subscribe-to-the-store-events',
                component: ComponentCreator('/petstore_versioned/subscribe-to-the-store-events', '2af'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/swagger-petstore-yaml',
                component: ComponentCreator('/petstore_versioned/swagger-petstore-yaml', 'db5'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/update-pet',
                component: ComponentCreator('/petstore_versioned/update-pet', 'e73'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/update-pet-with-form',
                component: ComponentCreator('/petstore_versioned/update-pet-with-form', 'ee3'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/update-user',
                component: ComponentCreator('/petstore_versioned/update-user', 'f67'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/upload-file',
                component: ComponentCreator('/petstore_versioned/upload-file', '0b1'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore_versioned/user',
                component: ComponentCreator('/petstore_versioned/user', '35e'),
                exact: true,
                sidebar: "petstore-2.0.0"
              },
              {
                path: '/petstore/add-pet',
                component: ComponentCreator('/petstore/add-pet', '0f7'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/create-user',
                component: ComponentCreator('/petstore/create-user', '59d'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/create-users-with-array-input',
                component: ComponentCreator('/petstore/create-users-with-array-input', '6a8'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/create-users-with-list-input',
                component: ComponentCreator('/petstore/create-users-with-list-input', '633'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/delete-order',
                component: ComponentCreator('/petstore/delete-order', '683'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/delete-pet',
                component: ComponentCreator('/petstore/delete-pet', '536'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/delete-user',
                component: ComponentCreator('/petstore/delete-user', 'f3b'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/find-pets-by-status',
                component: ComponentCreator('/petstore/find-pets-by-status', '690'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/find-pets-by-tags',
                component: ComponentCreator('/petstore/find-pets-by-tags', '285'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/get-inventory',
                component: ComponentCreator('/petstore/get-inventory', 'b53'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/get-order-by-id',
                component: ComponentCreator('/petstore/get-order-by-id', '120'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/get-pet-by-id',
                component: ComponentCreator('/petstore/get-pet-by-id', '5ea'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/get-user-by-name',
                component: ComponentCreator('/petstore/get-user-by-name', 'b90'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/login-user',
                component: ComponentCreator('/petstore/login-user', 'd28'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/logout-user',
                component: ComponentCreator('/petstore/logout-user', '7fb'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/new-pet',
                component: ComponentCreator('/petstore/new-pet', '557'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/pet',
                component: ComponentCreator('/petstore/pet', '052'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/place-order',
                component: ComponentCreator('/petstore/place-order', '659'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/apiresponse',
                component: ComponentCreator('/petstore/schemas/apiresponse', '77b'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/cat',
                component: ComponentCreator('/petstore/schemas/cat', 'a51'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/category',
                component: ComponentCreator('/petstore/schemas/category', '20b'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/dog',
                component: ComponentCreator('/petstore/schemas/dog', 'f41'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/honeybee',
                component: ComponentCreator('/petstore/schemas/honeybee', 'a10'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/id',
                component: ComponentCreator('/petstore/schemas/id', '7c2'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/order',
                component: ComponentCreator('/petstore/schemas/order', 'fc8'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/pet',
                component: ComponentCreator('/petstore/schemas/pet', 'a1f'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/tag',
                component: ComponentCreator('/petstore/schemas/tag', '34c'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/schemas/user',
                component: ComponentCreator('/petstore/schemas/user', 'ccb'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/store',
                component: ComponentCreator('/petstore/store', '658'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/subscribe-to-the-store-events',
                component: ComponentCreator('/petstore/subscribe-to-the-store-events', '8a1'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/swagger-petstore-yaml',
                component: ComponentCreator('/petstore/swagger-petstore-yaml', '6d0'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/update-pet',
                component: ComponentCreator('/petstore/update-pet', '856'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/update-pet-with-form',
                component: ComponentCreator('/petstore/update-pet-with-form', '037'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/update-user',
                component: ComponentCreator('/petstore/update-user', 'ea7'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/upload-file',
                component: ComponentCreator('/petstore/upload-file', '8b3'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/petstore/user',
                component: ComponentCreator('/petstore/user', 'ce0'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/restaurant/get-menu',
                component: ComponentCreator('/restaurant/get-menu', '455'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/restaurant/list-all-drinks',
                component: ComponentCreator('/restaurant/list-all-drinks', '33c'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/restaurant/list-all-products',
                component: ComponentCreator('/restaurant/list-all-products', 'f54'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/restaurant/make-payment',
                component: ComponentCreator('/restaurant/make-payment', 'f02'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/restaurant/restaurant-example',
                component: ComponentCreator('/restaurant/restaurant-example', 'bb4'),
                exact: true,
                sidebar: "petstore"
              },
              {
                path: '/saviynt/1-0-authentication',
                component: ComponentCreator('/saviynt/1-0-authentication', 'ed5'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/10-0-common-utilities',
                component: ComponentCreator('/saviynt/10-0-common-utilities', '309'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/11-0-dashboard',
                component: ComponentCreator('/saviynt/11-0-dashboard', 'f9a'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/13-0-paa',
                component: ComponentCreator('/saviynt/13-0-paa', '261'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/14-0-transport',
                component: ComponentCreator('/saviynt/14-0-transport', '626'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/15-0-policies',
                component: ComponentCreator('/saviynt/15-0-policies', '642'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/3-0-analytics',
                component: ComponentCreator('/saviynt/3-0-analytics', 'e23'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/4-0-access-request',
                component: ComponentCreator('/saviynt/4-0-access-request', '56d'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/5-0-delegated-administration',
                component: ComponentCreator('/saviynt/5-0-delegated-administration', 'a91'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/6-0-attestations',
                component: ComponentCreator('/saviynt/6-0-attestations', '953'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/7-0-campaigns',
                component: ComponentCreator('/saviynt/7-0-campaigns', 'd94'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/8-0-segregation-of-duties',
                component: ComponentCreator('/saviynt/8-0-segregation-of-duties', 'd45'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/9-0-password-reset',
                component: ComponentCreator('/saviynt/9-0-password-reset', 'ccb'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/accounts',
                component: ComponentCreator('/saviynt/accounts', '162'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/add-approver-to-existing-request',
                component: ComponentCreator('/saviynt/add-approver-to-existing-request', 'e7e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/add-mitigating-control-risk-account',
                component: ComponentCreator('/saviynt/add-mitigating-control-risk-account', 'b94'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/add-remove-user-from-sav-role',
                component: ComponentCreator('/saviynt/add-remove-user-from-sav-role', '161'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/add-remove-user-from-usergroup',
                component: ComponentCreator('/saviynt/add-remove-user-from-usergroup', '6a8'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/add-role',
                component: ComponentCreator('/saviynt/add-role', '622'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/application-owner',
                component: ComponentCreator('/saviynt/application-owner', 'a06'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/approve-reject-account-entitlement-details',
                component: ComponentCreator('/saviynt/approve-reject-account-entitlement-details', 'cfd'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/approve-reject-account-entitlement-details-1',
                component: ComponentCreator('/saviynt/approve-reject-account-entitlement-details-1', '379'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/approve-reject-attestation-account-details',
                component: ComponentCreator('/saviynt/approve-reject-attestation-account-details', 'a55'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/approve-reject-campaign-account-entitlement-details',
                component: ComponentCreator('/saviynt/approve-reject-campaign-account-entitlement-details', 'e5a'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/approve-reject-each-line-item-in-a-request',
                component: ComponentCreator('/saviynt/approve-reject-each-line-item-in-a-request', '511'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/approve-reject-entire-request',
                component: ComponentCreator('/saviynt/approve-reject-entire-request', 'a0b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/assign-account-to-user',
                component: ComponentCreator('/saviynt/assign-account-to-user', 'ca6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/assign-entitlement-to-account',
                component: ComponentCreator('/saviynt/assign-entitlement-to-account', '528'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/authenticate-user',
                component: ComponentCreator('/saviynt/authenticate-user', 'e37'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/bulk-upload-users',
                component: ComponentCreator('/saviynt/bulk-upload-users', 'ee5'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/cancel-pending-request',
                component: ComponentCreator('/saviynt/cancel-pending-request', '299'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/certify-entitlement-owner-for-campaign',
                component: ComponentCreator('/saviynt/certify-entitlement-owner-for-campaign', 'f87'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/certify-user-manager-for-campaign',
                component: ComponentCreator('/saviynt/certify-user-manager-for-campaign', '237'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/certify-usermanager-requests',
                component: ComponentCreator('/saviynt/certify-usermanager-requests', '718'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/change-user-password',
                component: ComponentCreator('/saviynt/change-user-password', '836'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/check-import-status',
                component: ComponentCreator('/saviynt/check-import-status', 'd5e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/check-job-status',
                component: ComponentCreator('/saviynt/check-job-status', '834'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/check-task-status',
                component: ComponentCreator('/saviynt/check-task-status', '732'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/complete-single-task',
                component: ComponentCreator('/saviynt/complete-single-task', 'd56'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/connections',
                component: ComponentCreator('/saviynt/connections', 'e01'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/consult-appowner-account-entitlement-details',
                component: ComponentCreator('/saviynt/consult-appowner-account-entitlement-details', '6e5'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/consult-campaign-account-entitlement-details',
                component: ComponentCreator('/saviynt/consult-campaign-account-entitlement-details', 'e3a'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/consult-entitlementowner-step-1-for-campaign',
                component: ComponentCreator('/saviynt/consult-entitlementowner-step-1-for-campaign', 'd72'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/consult-entitlementowner-step-2-for-campaign',
                component: ComponentCreator('/saviynt/consult-entitlementowner-step-2-for-campaign', 'ab9'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/consult-usermanager-step-1-for-campaign',
                component: ComponentCreator('/saviynt/consult-usermanager-step-1-for-campaign', 'c9e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-account',
                component: ComponentCreator('/saviynt/create-account', '633'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-and-update-trigger',
                component: ComponentCreator('/saviynt/create-and-update-trigger', '4b6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-auto-approved-request',
                component: ComponentCreator('/saviynt/create-auto-approved-request', '1be'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-birthright-request',
                component: ComponentCreator('/saviynt/create-birthright-request', '749'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-delegate',
                component: ComponentCreator('/saviynt/create-delegate', 'ea6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-dynamic-attribute',
                component: ComponentCreator('/saviynt/create-dynamic-attribute', '78b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-endpoint',
                component: ComponentCreator('/saviynt/create-endpoint', '89a'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-entitlement-type',
                component: ComponentCreator('/saviynt/create-entitlement-type', '147'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-organization',
                component: ComponentCreator('/saviynt/create-organization', 'd56'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-organization-request',
                component: ComponentCreator('/saviynt/create-organization-request', '915'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-password-policy',
                component: ComponentCreator('/saviynt/create-password-policy', 'd13'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-privilege',
                component: ComponentCreator('/saviynt/create-privilege', 'd26'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-request',
                component: ComponentCreator('/saviynt/create-request', '28c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-role-request',
                component: ComponentCreator('/saviynt/create-role-request', '674'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-security-questions',
                component: ComponentCreator('/saviynt/create-security-questions', '537'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-security-system',
                component: ComponentCreator('/saviynt/create-security-system', '674'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-task',
                component: ComponentCreator('/saviynt/create-task', '7f6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-task-remove-entitlement',
                component: ComponentCreator('/saviynt/create-task-remove-entitlement', 'f96'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-technical-rules',
                component: ComponentCreator('/saviynt/create-technical-rules', '680'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-update-entitlement',
                component: ComponentCreator('/saviynt/create-update-entitlement', 'c66'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-update-usergroup',
                component: ComponentCreator('/saviynt/create-update-usergroup', 'd0c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-user',
                component: ComponentCreator('/saviynt/create-user', '094'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/create-user-request',
                component: ComponentCreator('/saviynt/create-user-request', 'c1c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/createdataset',
                component: ComponentCreator('/saviynt/createdataset', '33d'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/createtrigger',
                component: ComponentCreator('/saviynt/createtrigger', '6ef'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/dataset',
                component: ComponentCreator('/saviynt/dataset', '2e2'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-connections',
                component: ComponentCreator('/saviynt/delete-connections', '13e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-delegate',
                component: ComponentCreator('/saviynt/delete-delegate', 'a9e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-dynamic-attribute',
                component: ComponentCreator('/saviynt/delete-dynamic-attribute', '9e7'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-entitlement-types',
                component: ComponentCreator('/saviynt/delete-entitlement-types', '67f'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-organization',
                component: ComponentCreator('/saviynt/delete-organization', '5c6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-privilege',
                component: ComponentCreator('/saviynt/delete-privilege', '356'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-security-system',
                component: ComponentCreator('/saviynt/delete-security-system', 'f38'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-technical-rules',
                component: ComponentCreator('/saviynt/delete-technical-rules', '913'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-trigger',
                component: ComponentCreator('/saviynt/delete-trigger', 'd61'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/delete-usergroup',
                component: ComponentCreator('/saviynt/delete-usergroup', '5ab'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/deletedataset',
                component: ComponentCreator('/saviynt/deletedataset', '8d9'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/discontinue-all-pending-tasks',
                component: ComponentCreator('/saviynt/discontinue-all-pending-tasks', '0fd'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/discontinue-campaigns-and-certifications',
                component: ComponentCreator('/saviynt/discontinue-campaigns-and-certifications', '922'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/discontinue-tasks',
                component: ComponentCreator('/saviynt/discontinue-tasks', '2e3'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/edit-delegate',
                component: ComponentCreator('/saviynt/edit-delegate', '650'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/endpoints',
                component: ComponentCreator('/saviynt/endpoints', '916'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/entitlement-based-role',
                component: ComponentCreator('/saviynt/entitlement-based-role', '1ca'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/entitlement-owner',
                component: ComponentCreator('/saviynt/entitlement-owner', '70b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/entitlements',
                component: ComponentCreator('/saviynt/entitlements', 'd97'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/entitlements-1',
                component: ComponentCreator('/saviynt/entitlements-1', '555'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/export-account',
                component: ComponentCreator('/saviynt/export-account', 'ea8'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/export-package',
                component: ComponentCreator('/saviynt/export-package', '7da'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-account-entitlement-details',
                component: ComponentCreator('/saviynt/fetch-account-entitlement-details', 'efb'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-account-entitlement-details-1',
                component: ComponentCreator('/saviynt/fetch-account-entitlement-details-1', '92c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-account-entitlement-details-2',
                component: ComponentCreator('/saviynt/fetch-account-entitlement-details-2', '61c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-analytics-details',
                component: ComponentCreator('/saviynt/fetch-analytics-details', '237'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-attestation-account-entitlement-details',
                component: ComponentCreator('/saviynt/fetch-attestation-account-entitlement-details', '9a2'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-attestation-details',
                component: ComponentCreator('/saviynt/fetch-attestation-details', '7ae'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-attestation-list',
                component: ComponentCreator('/saviynt/fetch-attestation-list', 'd03'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-campaign-details',
                component: ComponentCreator('/saviynt/fetch-campaign-details', '3ea'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-campaign-list',
                component: ComponentCreator('/saviynt/fetch-campaign-list', '59b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-certification-list',
                component: ComponentCreator('/saviynt/fetch-certification-list', '977'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-control-attributes',
                component: ComponentCreator('/saviynt/fetch-control-attributes', 'dd6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-control-details-es',
                component: ComponentCreator('/saviynt/fetch-control-details-es', 'b42'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-dynamic-attributes',
                component: ComponentCreator('/saviynt/fetch-dynamic-attributes', '89e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-entitlement-owner-campaign-details',
                component: ComponentCreator('/saviynt/fetch-entitlement-owner-campaign-details', '94e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-existing-delegates-list',
                component: ComponentCreator('/saviynt/fetch-existing-delegates-list', '23c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-flat-response-entitlement-owner-campaign-details',
                component: ComponentCreator('/saviynt/fetch-flat-response-entitlement-owner-campaign-details', '5e9'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-job-metadata',
                component: ComponentCreator('/saviynt/fetch-job-metadata', '1b6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-list-of-analytics',
                component: ComponentCreator('/saviynt/fetch-list-of-analytics', 'fc5'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-list-of-analytics-es',
                component: ComponentCreator('/saviynt/fetch-list-of-analytics-es', 'c17'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-request-access-attributes',
                component: ComponentCreator('/saviynt/fetch-request-access-attributes', 'b06'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-request-approval-details',
                component: ComponentCreator('/saviynt/fetch-request-approval-details', '0ea'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-request-history-details',
                component: ComponentCreator('/saviynt/fetch-request-history-details', '92b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-request-history-my-pending-requests',
                component: ComponentCreator('/saviynt/fetch-request-history-my-pending-requests', '954'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-runtime-controls-data',
                component: ComponentCreator('/saviynt/fetch-runtime-controls-data', '1cb'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-runtime-controls-data-v-2',
                component: ComponentCreator('/saviynt/fetch-runtime-controls-data-v-2', '9ec'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-security-questions',
                component: ComponentCreator('/saviynt/fetch-security-questions', '1d3'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-task-details',
                component: ComponentCreator('/saviynt/fetch-task-details', 'af4'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-technical-rules',
                component: ComponentCreator('/saviynt/fetch-technical-rules', 'd04'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/fetch-user-security-questions',
                component: ComponentCreator('/saviynt/fetch-user-security-questions', 'f8b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/file-directory',
                component: ComponentCreator('/saviynt/file-directory', 'cef'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/force-complete',
                component: ComponentCreator('/saviynt/force-complete', 'eb1'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-access-details-for-user',
                component: ComponentCreator('/saviynt/get-access-details-for-user', '6ac'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-access-recommendations',
                component: ComponentCreator('/saviynt/get-access-recommendations', 'c22'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-account-details',
                component: ComponentCreator('/saviynt/get-account-details', '52b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-authorization-token',
                component: ComponentCreator('/saviynt/get-authorization-token', '51e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-child-entitlements',
                component: ComponentCreator('/saviynt/get-child-entitlements', 'd2e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-connections-details',
                component: ComponentCreator('/saviynt/get-connections-details', '70e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-delegate-user-list',
                component: ComponentCreator('/saviynt/get-delegate-user-list', 'b3e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-entitlement-values-for-endpoint',
                component: ComponentCreator('/saviynt/get-entitlement-values-for-endpoint', 'fa7'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-entitlements',
                component: ComponentCreator('/saviynt/get-entitlements', '5ba'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-firefighter-role-details',
                component: ComponentCreator('/saviynt/get-firefighter-role-details', '525'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-flat-response-entitlement-details-for-user',
                component: ComponentCreator('/saviynt/get-flat-response-entitlement-details-for-user', '67c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-flat-response-role-details-for-user',
                component: ComponentCreator('/saviynt/get-flat-response-role-details-for-user', 'bf1'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-list-of-connections',
                component: ComponentCreator('/saviynt/get-list-of-connections', '3d9'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-list-of-endpoints',
                component: ComponentCreator('/saviynt/get-list-of-endpoints', '3ab'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-list-of-entitlement-types',
                component: ComponentCreator('/saviynt/get-list-of-entitlement-types', '7cc'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-list-of-pending-requests-for-approver',
                component: ComponentCreator('/saviynt/get-list-of-pending-requests-for-approver', 'fb1'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-list-of-privileges-for-entitlement-type',
                component: ComponentCreator('/saviynt/get-list-of-privileges-for-entitlement-type', '049'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-list-of-security-systems',
                component: ComponentCreator('/saviynt/get-list-of-security-systems', '78a'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-list-of-usergroups',
                component: ComponentCreator('/saviynt/get-list-of-usergroups', '802'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-list-of-users',
                component: ComponentCreator('/saviynt/get-list-of-users', '1e8'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-organization',
                component: ComponentCreator('/saviynt/get-organization', 'a5f'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-pending-approvals',
                component: ComponentCreator('/saviynt/get-pending-approvals', 'a49'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-requestable-users',
                component: ComponentCreator('/saviynt/get-requestable-users', '292'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-role-details-for-user',
                component: ComponentCreator('/saviynt/get-role-details-for-user', 'b58'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-savroles',
                component: ComponentCreator('/saviynt/get-savroles', 'd4b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-user-details',
                component: ComponentCreator('/saviynt/get-user-details', 'f4c'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/get-user-requestable-entitlements',
                component: ComponentCreator('/saviynt/get-user-requestable-entitlements', '9e2'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/getdatasetvalues',
                component: ComponentCreator('/saviynt/getdatasetvalues', '173'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/import-application-data',
                component: ComponentCreator('/saviynt/import-application-data', '301'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/import-package',
                component: ComponentCreator('/saviynt/import-package', '3d0'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/job-control',
                component: ComponentCreator('/saviynt/job-control', '1f3'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/lock-attestation',
                component: ComponentCreator('/saviynt/lock-attestation', '0bc'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/lock-campaign',
                component: ComponentCreator('/saviynt/lock-campaign', '71f'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/lock-campaign-1',
                component: ComponentCreator('/saviynt/lock-campaign-1', 'c3d'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/lock-campaign-2',
                component: ComponentCreator('/saviynt/lock-campaign-2', '71e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/organization',
                component: ComponentCreator('/saviynt/organization', '992'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/organization-1',
                component: ComponentCreator('/saviynt/organization-1', 'a7f'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/password-policy',
                component: ComponentCreator('/saviynt/password-policy', '31a'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/privileges',
                component: ComponentCreator('/saviynt/privileges', 'ef8'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/reassign-application-owner-for-campaign',
                component: ComponentCreator('/saviynt/reassign-application-owner-for-campaign', '446'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/reassign-certification',
                component: ComponentCreator('/saviynt/reassign-certification', 'db2'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/reassign-certification-at-account-and-entitlement-level-copy',
                component: ComponentCreator('/saviynt/reassign-certification-at-account-and-entitlement-level-copy', '44a'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/reassign-certification-at-account-level',
                component: ComponentCreator('/saviynt/reassign-certification-at-account-level', 'fbf'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/reassign-entitlement-owner-for-campaign',
                component: ComponentCreator('/saviynt/reassign-entitlement-owner-for-campaign', 'f79'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/reassign-usermanager-step-1-for-campaign',
                component: ComponentCreator('/saviynt/reassign-usermanager-step-1-for-campaign', '94b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/refresh-authorization-token',
                component: ComponentCreator('/saviynt/refresh-authorization-token', 'f8b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/remove-entitlement-from-account',
                component: ComponentCreator('/saviynt/remove-entitlement-from-account', '7e6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/remove-entitlement-from-role',
                component: ComponentCreator('/saviynt/remove-entitlement-from-role', '4ca'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/remove-role',
                component: ComponentCreator('/saviynt/remove-role', '29e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/request-approval',
                component: ComponentCreator('/saviynt/request-approval', '794'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/request-history',
                component: ComponentCreator('/saviynt/request-history', '39e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/request-to-create-entitlement-based-role',
                component: ComponentCreator('/saviynt/request-to-create-entitlement-based-role', '36f'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/resumepausejobs',
                component: ComponentCreator('/saviynt/resumepausejobs', '091'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/retrieve-dashboard-account-data',
                component: ComponentCreator('/saviynt/retrieve-dashboard-account-data', 'd20'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/retrieve-dashboard-data',
                component: ComponentCreator('/saviynt/retrieve-dashboard-data', '1c4'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/retrieve-dashboard-tiles-data',
                component: ComponentCreator('/saviynt/retrieve-dashboard-tiles-data', '17e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/roles',
                component: ComponentCreator('/saviynt/roles', '5d5'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/roles-1',
                component: ComponentCreator('/saviynt/roles-1', 'f4f'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/run-analytics-controls',
                component: ComponentCreator('/saviynt/run-analytics-controls', '59d'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/run-job-trigger',
                component: ComponentCreator('/saviynt/run-job-trigger', '058'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/sav',
                component: ComponentCreator('/saviynt/sav', '513'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/saviynt-enterprise-identity-cloud-api-reference',
                component: ComponentCreator('/saviynt/saviynt-enterprise-identity-cloud-api-reference', '988'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/security-systems',
                component: ComponentCreator('/saviynt/security-systems', '5ce'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/send-email',
                component: ComponentCreator('/saviynt/send-email', 'dbc'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/sod-evaluation-for-non-sap-functions',
                component: ComponentCreator('/saviynt/sod-evaluation-for-non-sap-functions', 'c15'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/sod-evaluation-for-sap-functions',
                component: ComponentCreator('/saviynt/sod-evaluation-for-sap-functions', 'c91'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/task-details',
                component: ComponentCreator('/saviynt/task-details', '202'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/tasks',
                component: ComponentCreator('/saviynt/tasks', '564'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/test-connection',
                component: ComponentCreator('/saviynt/test-connection', '4c7'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/transport-status',
                component: ComponentCreator('/saviynt/transport-status', '7a2'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-account',
                component: ComponentCreator('/saviynt/update-account', '044'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-dynamic-attribute',
                component: ComponentCreator('/saviynt/update-dynamic-attribute', '9b4'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-endpoint',
                component: ComponentCreator('/saviynt/update-endpoint', '91d'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-entitlement-type',
                component: ComponentCreator('/saviynt/update-entitlement-type', '97d'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-existing-request',
                component: ComponentCreator('/saviynt/update-existing-request', '39e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-organization',
                component: ComponentCreator('/saviynt/update-organization', 'eec'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-organization-request',
                component: ComponentCreator('/saviynt/update-organization-request', '2c6'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-privilege',
                component: ComponentCreator('/saviynt/update-privilege', '5e4'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-role-request',
                component: ComponentCreator('/saviynt/update-role-request', '4b2'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-security-system',
                component: ComponentCreator('/saviynt/update-security-system', '432'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-task',
                component: ComponentCreator('/saviynt/update-task', 'deb'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-tasks',
                component: ComponentCreator('/saviynt/update-tasks', '94e'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-technical-rules',
                component: ComponentCreator('/saviynt/update-technical-rules', '4bb'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-user',
                component: ComponentCreator('/saviynt/update-user', '468'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/update-user-request',
                component: ComponentCreator('/saviynt/update-user-request', '08b'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/updatedataset',
                component: ComponentCreator('/saviynt/updatedataset', 'b9f'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/updatedatasetvalues',
                component: ComponentCreator('/saviynt/updatedatasetvalues', 'fb7'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/upload-new-file',
                component: ComponentCreator('/saviynt/upload-new-file', '598'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/upload-sod-ruleset',
                component: ComponentCreator('/saviynt/upload-sod-ruleset', 'bbc'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/uploaddatasetcsv',
                component: ComponentCreator('/saviynt/uploaddatasetcsv', '3a9'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/user-groups',
                component: ComponentCreator('/saviynt/user-groups', '73a'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/user-manager',
                component: ComponentCreator('/saviynt/user-manager', '266'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/users',
                component: ComponentCreator('/saviynt/users', '5b0'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/users-1',
                component: ComponentCreator('/saviynt/users-1', '625'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/using-sqa',
                component: ComponentCreator('/saviynt/using-sqa', 'f3d'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/validate-entitlement-request-data',
                component: ComponentCreator('/saviynt/validate-entitlement-request-data', '002'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/validate-user-data',
                component: ComponentCreator('/saviynt/validate-user-data', '289'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/saviynt/validate-user-security-answers',
                component: ComponentCreator('/saviynt/validate-user-security-answers', '628'),
                exact: true,
                sidebar: "saviyntSidebar"
              },
              {
                path: '/sidebars',
                component: ComponentCreator('/sidebars', '95e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/versioning',
                component: ComponentCreator('/versioning', '107'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '1c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
