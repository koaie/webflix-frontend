
/**
 * @roxi/routify 2.15.1
 * File generated Mon May 03 2021 20:20:00 GMT+0100 (British Summer Time)
 */

export const __version = "2.15.1"
export const __timestamp = "2021-05-03T19:20:00.780Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_layout",
  "filepath": "/_layout.svelte",
  "root": true,
  "ownMeta": {
    "preload": "proximity"
  },
  "absolutePath": "/home/user/webflix/src/pages/_layout.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "[watch].svelte",
      "filepath": "/[watch].svelte",
      "name": "[watch]",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/[watch].svelte",
      "importPath": "../src/pages/[watch].svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/:watch",
      "id": "__watch",
      "component": () => import('../src/pages/[watch].svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "checkout.svelte",
      "filepath": "/checkout.svelte",
      "name": "checkout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/checkout.svelte",
      "importPath": "../src/pages/checkout.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/checkout",
      "id": "_checkout",
      "component": () => import('../src/pages/checkout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "forgot-password.svelte",
      "filepath": "/forgot-password.svelte",
      "name": "forgot-password",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/forgot-password.svelte",
      "importPath": "../src/pages/forgot-password.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/forgot-password",
      "id": "_forgotPassword",
      "component": () => import('../src/pages/forgot-password.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "login.svelte",
      "filepath": "/login.svelte",
      "name": "login",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/login.svelte",
      "importPath": "../src/pages/login.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/login",
      "id": "_login",
      "component": () => import('../src/pages/login.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "logout.svelte",
      "filepath": "/logout.svelte",
      "name": "logout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/logout.svelte",
      "importPath": "../src/pages/logout.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/logout",
      "id": "_logout",
      "component": () => import('../src/pages/logout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "movies.svelte",
      "filepath": "/movies.svelte",
      "name": "movies",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/movies.svelte",
      "importPath": "../src/pages/movies.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/movies",
      "id": "_movies",
      "component": () => import('../src/pages/movies.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "premium.svelte",
      "filepath": "/premium.svelte",
      "name": "premium",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/premium.svelte",
      "importPath": "../src/pages/premium.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/premium",
      "id": "_premium",
      "component": () => import('../src/pages/premium.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "register.svelte",
      "filepath": "/register.svelte",
      "name": "register",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/register.svelte",
      "importPath": "../src/pages/register.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/register",
      "id": "_register",
      "component": () => import('../src/pages/register.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "shows.svelte",
      "filepath": "/shows.svelte",
      "name": "shows",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/shows.svelte",
      "importPath": "../src/pages/shows.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/shows",
      "id": "_shows",
      "component": () => import('../src/pages/shows.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_layout.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_layout.svelte",
  "meta": {
    "preload": "proximity",
    "recursive": true,
    "prerender": true
  },
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

