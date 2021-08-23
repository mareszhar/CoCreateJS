import { lazyLoad, dependency } from './lazy-loader';

// Dependencies
dependency('utils', import (/*webpackChunkName: "utils-chunk"*/ '@cocreate/utils'));
dependency('socket', import (/*webpackChunkName: "socket-chunk"*/ '@cocreate/socket-client'));
dependency('common-fun', import (/*webpackChunkName: "common-fun-chunk"*/ '@cocreate/socket-client/src/common-fun.js'));
dependency('message', import (/*webpackChunkName: "message-chunk"*/ '@cocreate/message-client'));
dependency('crud', import (/*webpackChunkName: "crud-chunk"*/ '@cocreate/crud-client'));
dependency('crdt', import (/*webpackChunkName: "crdt-chunk"*/ '@cocreate/crdt'));
dependency('domText', import (/*webpackChunkName: "domText-chunk"*/ '@cocreate/domtext'));
dependency('cursors', import (/*webpackChunkName: "cursors-chunk"*/ '@cocreate/cursors'));
dependency('filter', import (/*webpackChunkName: "filter-chunk"*/ '@cocreate/filter'));
dependency('form', import (/*webpackChunkName: "form-chunk"*/ '@cocreate/form'));
dependency('uuid', import (/*webpackChunkName: "uuid-chunk"*/ '@cocreate/uuid'));
dependency('render', import (/*webpackChunkName: "render-chunk"*/ '@cocreate/render'))
// dependency('api', import (/*webpackChunkName: "api-chunk"*/ '@cocreate/api'));

// Core Components
lazyLoad('css', 'body', ()=> import (/*webpackChunkName: "css-chunk"*/ '@cocreate/cocreatecss'))
lazyLoad('logic', '[pass_id], [pass_to], [get-value], [pass-value_to], [pass-value_id], [data-for]', ()=> import (/*webpackChunkName: "logic-chunk"*/ '@cocreate/logic'))
lazyLoad('action', '[actions]', ()=> import (/*webpackChunkName: "action-chunk"*/ '@cocreate/action'))
lazyLoad('room', '[namespace], [room]', ()=> import (/*webpackChunkName: "room-chunk"*/ '@cocreate/room'))
lazyLoad('htmltags', '[collection]', ()=> import (/*webpackChunkName: "htmltags-chunk"*/ '@cocreate/htmltags'))
lazyLoad('input', 'input, textarea, select', ()=> import (/*webpackChunkName: "input-chunk"*/ '@cocreate/input'))
lazyLoad('fetch', '[fetch-collection]', ()=> import (/*webpackChunkName: "fetch-chunk"*/ '@cocreate/fetch'))
lazyLoad('vdom', '[vdom-target]', ()=> import (/*webpackChunkName: "vdom-chunk"*/ '@cocreate/vdom'))
lazyLoad('dnd', '.sortable, .cloneable, [draggable], [cloneable]', ()=> import (/*webpackChunkName: "dnd-chunk"*/ '@cocreate/dnd'))
lazyLoad('conditionalLogic', '[show], [hide]', ()=> import (/*webpackChunkName: "conditionalLogic-chunk"*/ '@cocreate/conditional-logic'))
lazyLoad('clone', '[clone_id]', ()=> import (/*webpackChunkName: "clone-chunk"*/ '@cocreate/clone'))
lazyLoad('toggle', '[toggle], [hover]', ()=> import (/*webpackChunkName: "toggle-chunk"*/ '@cocreate/toggle'))
lazyLoad('selected', '[selected-value]', ()=> import (/*webpackChunkName: "selected-chunk"*/ '@cocreate/selected'))
lazyLoad('scroll', '[scroll]', ()=> import (/*webpackChunkName: "scroll-chunk"*/ '@cocreate/scroll'))
lazyLoad('resize', '[resize]', ()=>import(/*webpackChunkName: "resize-chunk"*/ '@cocreate/resize'))
// lazyLoad('resizeObserver', '[resizeObserver]', ()=>import(/*webpackChunkName: "resizeObserver-chunk"*/ '@cocreate/resize-observer'))
lazyLoad('attributes', '[attribute]', ()=>import(/*webpackChunkName: "attributes-chunk"*/ '@cocreate/attributes'))
lazyLoad('users', '[actions*="createUser"], [actions*="login"], [actions*="logout"]', ()=> import (/*webpackChunkName: "users-chunk"*/ '@cocreate/users'))
lazyLoad('organizations', '[actions*="createOrg"]', ()=> import (/*webpackChunkName: "organizations-chunk"*/ '@cocreate/organizations'))
lazyLoad('industry', '[actions*="createIndustry"], [actions*="runIndustry"]', ()=> import (/*webpackChunkName: "industry-chunk"*/ '@cocreate/industry'))
lazyLoad('uuid', '[uuid], .loginBtn', ()=> import (/*webpackChunkName: "uuid-chunk"*/ '@cocreate/uuid'))
lazyLoad('renderKey', '[data-key]', ()=> import (/*webpackChunkName: "render-key-chunk"*/ '@cocreate/render-key'))
lazyLoad('search', '[search_id]', ()=> import (/*webpackChunkName: "search-chunk"*/ '@cocreate/search'))

// Collabortion Components
lazyLoad('text', 'input, textarea, [contenteditable]', ()=> import (/*webpackChunkName: "text-chunk"*/ '@cocreate/text'))

// UI Components
lazyLoad('floatingLabel', '.floating-label', ()=> import (/*webpackChunkName: "floating-label-chunk"*/ '@cocreate/floating-label'))
lazyLoad('sidenav', '.cocreate-sidenav', ()=> import (/*webpackChunkName: "sidenav-chunk"*/ '@cocreate/sidenav'))
lazyLoad('fullscreen', '[fullscreen]', ()=> import (/*webpackChunkName: "fullscreen-chunk"*/ '@cocreate/fullscreen'))
lazyLoad('modal', '[target="modal"]', ()=> import (/*webpackChunkName: "modal-chunk"*/ '@cocreate/modal'))
lazyLoad('parallax', '[parallax-src]', ()=> import (/*webpackChunkName: "parallax-chunk"*/ '@cocreate/parallax'))
lazyLoad('calculation', '[calculate]', ()=> import (/*webpackChunkName: "calculation-chunk"*/ '@cocreate/calculation'))
lazyLoad('progress', '[data-progress]', ()=> import (/*webpackChunkName: "progress-chunk"*/ '@cocreate/progress'))
lazyLoad('randomColor', '[data-background_color]', ()=> import (/*webpackChunkName: "color-chunk"*/ '@cocreate/random-color'))
lazyLoad('socialShare', '[share-network]', ()=> import (/*webpackChunkName: "social-share-chunk"*/ '@cocreate/social-share'))
lazyLoad('splitview', '.container.svColumn', ()=> import (/*webpackChunkName: "splitview-chunk"*/ '@cocreate/splitview'))
lazyLoad('select', 'cocreate-select', ()=> import (/*webpackChunkName: "select-chunk"*/ '@cocreate/select'))
lazyLoad('toolbar', '[toolbar-target]', ()=> import (/*webpackChunkName: "toolbar-chunk"*/ '@cocreate/toolbar'))

// Modules
lazyLoad('builder', '#canvas', ()=> import (/*webpackChunkName: "builder-chunk"*/ '@cocreate/builder'))
lazyLoad('clipboard', '.clipboard', ()=> import (/*webpackChunkName: "clipboard-chunk"*/ '@cocreate/builder/src/components/clipboard.js'))

// Plugins
lazyLoad('charts', '.cocreate-chart', ()=> import (/*webpackChunkName: "charts-chunk"*/ '@cocreate/charts'))
// lazyLoad('codemirror', '.codemirror', ()=> import (/*webpackChunkName: "codemirror-chunk"*/ '@cocreate/codemirror'))
lazyLoad('croppie', '[data-croppie]', ()=> import (/*webpackChunkName: "croppie-chunk"*/ '@cocreate/croppie'))
lazyLoad('domain', '[data-domain]', ()=> import (/*webpackChunkName: "domain-chunk"*/ '@cocreate/domain'))
lazyLoad('facebook', '[data-facebook]', ()=> import (/*webpackChunkName: "facebook-chunk"*/ '@cocreate/facebook'))
lazyLoad('fullcalendar', '.cal-container', ()=> import (/*webpackChunkName: "fullcalendar-chunk"*/ '@cocreate/fullcalendar'))
lazyLoad('font-awesome', '.fa, .fas, .fab', ()=> import (/*webpackChunkName: "font-awesome-chunk"*/ '@cocreate/font-awesome'))
lazyLoad('google-auth', '[data-googleauth]', ()=> import (/*webpackChunkName: "google-auth-chunk"*/ '@cocreate/google-auth'))
// lazyLoad('google-maps', '[data-google-maps]', ()=> import (/*webpackChunkName: "google-maps-chunk"*/ '@cocreate/google-maps'))
lazyLoad('instagram', '[data-instagram]', ()=> import (/*webpackChunkName: "instagram-chunk"*/ '@cocreate/instagram'))
lazyLoad('lighthouse', '[data-lighthouse]', ()=> import (/*webpackChunkName: "lighthouse-chunk"*/ '@cocreate/lighthouse'))
lazyLoad('linkedin', '[data-linkedin]', ()=> import (/*webpackChunkName: "linkedin-chunk"*/ '@cocreate/linkedin'))
// lazyLoad('monaco', '.monaco', ()=> import (/*webpackChunkName: "monaco-chunk"*/ '@cocreate/monaco'))
// lazyLoad('pickr', '.color-picker', ()=> import (/*webpackChunkName: "pickr-chunk"*/ '@cocreate/pickr'))
lazyLoad('pinterest', '[data-pinterest]', ()=> import (/*webpackChunkName: "pinterest-chunk"*/ '@cocreate/pinterest'))
lazyLoad('plaid', '[data-plaid]', ()=> import (/*webpackChunkName: "plaid-chunk"*/ '@cocreate/plaid'))
lazyLoad('prism', '.language-html, .language-css, .language-js, .language-shell, .language-json', ()=> import (/*webpackChunkName: "prism-chunk"*/ '@cocreate/prism'))
// lazyLoad('quill', '.quill', ()=> import (/*webpackChunkName: "quill-chunk"*/ '@cocreate/quill'))
lazyLoad('sendgrid', '[data-sendgrid]', ()=> import (/*webpackChunkName: "sendgrid-chunk"*/ '@cocreate/sendgrid'))
lazyLoad('shipengine', '[data-shipengine]', ()=> import (/*webpackChunkName: "shipengine-chunk"*/ '@cocreate/shipengine'))
lazyLoad('stripe', '[data-stripe]', ()=> import (/*webpackChunkName: "stripe-chunk"*/ '@cocreate/stripe'))
// lazyLoad('twilio', '[data-twilio]', ()=> import (/*webpackChunkName: "twilio-chunk"*/ '@cocreate/twilio'))
lazyLoad('twitter', '[data-twitter]', ()=> import (/*webpackChunkName: "twitter-chunk"*/ '@cocreate/twitter'))
lazyLoad('uppy', '.uppy', ()=> import (/*webpackChunkName: "uppy-chunk"*/ '@cocreate/uppy'))
