
/**
 * @roxi/routify 2.18.0
 * File generated Sat May 15 2021 14:13:30 GMT+0100 (British Summer Time)
 */

export const __version = "2.18.0"
export const __timestamp = "2021-05-15T13:13:30.830Z"

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
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
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
      "isFile": false,
      "isDir": true,
      "file": "admin",
      "filepath": "/admin",
      "name": "admin",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/admin",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "content.svelte",
          "filepath": "/admin/content.svelte",
          "name": "content",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/admin/content.svelte",
          "importPath": "../src/pages/admin/content.svelte",
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
          "path": "/admin/content",
          "id": "_admin_content",
          "component": () => import('../src/pages/admin/content.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "genre.svelte",
          "filepath": "/admin/genre.svelte",
          "name": "genre",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/admin/genre.svelte",
          "importPath": "../src/pages/admin/genre.svelte",
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
          "path": "/admin/genre",
          "id": "_admin_genre",
          "component": () => import('../src/pages/admin/genre.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "users.svelte",
          "filepath": "/admin/users.svelte",
          "name": "users",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/admin/users.svelte",
          "importPath": "../src/pages/admin/users.svelte",
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
          "path": "/admin/users",
          "id": "_admin_users",
          "component": () => import('../src/pages/admin/users.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/admin"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "auth",
      "filepath": "/auth",
      "name": "auth",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/auth",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "forgot-password.svelte",
          "filepath": "/auth/forgot-password.svelte",
          "name": "forgot-password",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/auth/forgot-password.svelte",
          "importPath": "../src/pages/auth/forgot-password.svelte",
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
          "path": "/auth/forgot-password",
          "id": "_auth_forgotPassword",
          "component": () => import('../src/pages/auth/forgot-password.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "login.svelte",
          "filepath": "/auth/login.svelte",
          "name": "login",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/auth/login.svelte",
          "importPath": "../src/pages/auth/login.svelte",
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
          "path": "/auth/login",
          "id": "_auth_login",
          "component": () => import('../src/pages/auth/login.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "logout.svelte",
          "filepath": "/auth/logout.svelte",
          "name": "logout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/auth/logout.svelte",
          "importPath": "../src/pages/auth/logout.svelte",
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
          "path": "/auth/logout",
          "id": "_auth_logout",
          "component": () => import('../src/pages/auth/logout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "register.svelte",
          "filepath": "/auth/register.svelte",
          "name": "register",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/auth/register.svelte",
          "importPath": "../src/pages/auth/register.svelte",
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
          "path": "/auth/register",
          "id": "_auth_register",
          "component": () => import('../src/pages/auth/register.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/auth"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "feed",
      "filepath": "/feed",
      "name": "feed",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/feed",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "movies.svelte",
          "filepath": "/feed/movies.svelte",
          "name": "movies",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/feed/movies.svelte",
          "importPath": "../src/pages/feed/movies.svelte",
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
          "path": "/feed/movies",
          "id": "_feed_movies",
          "component": () => import('../src/pages/feed/movies.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "shows.svelte",
          "filepath": "/feed/shows.svelte",
          "name": "shows",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/feed/shows.svelte",
          "importPath": "../src/pages/feed/shows.svelte",
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
          "path": "/feed/shows",
          "id": "_feed_shows",
          "component": () => import('../src/pages/feed/shows.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/feed"
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
      "isFile": false,
      "isDir": true,
      "file": "premium",
      "filepath": "/premium",
      "name": "premium",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/premium",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "checkout.svelte",
          "filepath": "/premium/checkout.svelte",
          "name": "checkout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/premium/checkout.svelte",
          "importPath": "../src/pages/premium/checkout.svelte",
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
          "path": "/premium/checkout",
          "id": "_premium_checkout",
          "component": () => import('../src/pages/premium/checkout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/premium/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/premium/index.svelte",
          "importPath": "../src/pages/premium/index.svelte",
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
          "path": "/premium/index",
          "id": "_premium_index",
          "component": () => import('../src/pages/premium/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/premium"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "user",
      "filepath": "/user",
      "name": "user",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/user/webflix/src/pages/user",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "account.svelte",
          "filepath": "/user/account.svelte",
          "name": "account",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/user/account.svelte",
          "importPath": "../src/pages/user/account.svelte",
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
          "path": "/user/account",
          "id": "_user_account",
          "component": () => import('../src/pages/user/account.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "edit.svelte",
          "filepath": "/user/edit.svelte",
          "name": "edit",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/user/edit.svelte",
          "importPath": "../src/pages/user/edit.svelte",
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
          "path": "/user/edit",
          "id": "_user_edit",
          "component": () => import('../src/pages/user/edit.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "profile.svelte",
          "filepath": "/user/profile.svelte",
          "name": "profile",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/user/webflix/src/pages/user/profile.svelte",
          "importPath": "../src/pages/user/profile.svelte",
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
          "path": "/user/profile",
          "id": "_user_profile",
          "component": () => import('../src/pages/user/profile.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": "proximity",
        "prerender": true
      },
      "path": "/user"
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

