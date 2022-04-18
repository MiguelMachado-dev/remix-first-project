var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/migtito/Development/remix-first-project/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LHUXZZQV.css";

// route:/home/migtito/Development/remix-first-project/app/root.tsx
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en",
    className: "h-full"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "h-full"
  }, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:/home/migtito/Development/remix-first-project/app/routes/github.$username.tsx
var github_username_exports = {};
__export(github_username_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => github_username_default,
  loader: () => loader
});
var import_react6 = require("@remix-run/react");

// app/features/github/GithubContainer.tsx
var import_react3 = require("react");
var import_react4 = require("@remix-run/react");
var import_react5 = require("@headlessui/react");
var import_solid = require("@heroicons/react/solid");
var import_outline = require("@heroicons/react/outline");

// app/utils/index.ts
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// app/features/github/util.ts
var navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Domains", href: "#", current: false }
];
var userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" }
];

// app/features/github/GithubContainer.tsx
function GithubContainer({ user, repos }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "fixed top-0 left-0 w-1/2 h-full bg-white",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "fixed top-0 right-0 w-1/2 h-full bg-gray-50",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "relative min-h-full flex flex-col"
  }, /* @__PURE__ */ React.createElement(import_react5.Disclosure, {
    as: "nav",
    className: "flex-shrink-0 bg-indigo-600"
  }, ({ open }) => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto px-2 sm:px-4 lg:px-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "relative flex items-center justify-between h-16"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center px-2 lg:px-0 xl:w-64"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-auto",
    src: "https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg",
    alt: "Workflow"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 flex justify-center lg:justify-end"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "w-full px-2 lg:px-6"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "search",
    className: "sr-only"
  }, "Search projects"), /* @__PURE__ */ React.createElement("div", {
    className: "relative text-indigo-200 focus-within:text-gray-400"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
  }, /* @__PURE__ */ React.createElement(import_solid.SearchIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("input", {
    id: "search",
    name: "search",
    className: "block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm",
    placeholder: "Search projects",
    type: "search"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex lg:hidden"
  }, /* @__PURE__ */ React.createElement(import_react5.Disclosure.Button, {
    className: "bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open main menu"), open ? /* @__PURE__ */ React.createElement(import_outline.XIcon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }) : /* @__PURE__ */ React.createElement(import_outline.MenuAlt1Icon, {
    className: "block h-6 w-6",
    "aria-hidden": "true"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "hidden lg:block lg:w-80"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-end"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement("a", {
    key: item.name,
    href: item.href,
    className: "px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white",
    "aria-current": item.current ? "page" : void 0
  }, item.name))), /* @__PURE__ */ React.createElement(import_react5.Menu, {
    as: "div",
    className: "ml-4 relative flex-shrink-0"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react5.Menu.Button, {
    className: "bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "sr-only"
  }, "Open user menu"), /* @__PURE__ */ React.createElement("img", {
    className: "h-8 w-8 rounded-full",
    src: user.avatar_url,
    alt: user.login
  }))), /* @__PURE__ */ React.createElement(import_react5.Transition, {
    as: import_react3.Fragment,
    enter: "transition ease-out duration-100",
    enterFrom: "transform opacity-0 scale-95",
    enterTo: "transform opacity-100 scale-100",
    leave: "transition ease-in duration-75",
    leaveFrom: "transform opacity-100 scale-100",
    leaveTo: "transform opacity-0 scale-95"
  }, /* @__PURE__ */ React.createElement(import_react5.Menu.Items, {
    className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
  }, userNavigation.map((item) => /* @__PURE__ */ React.createElement(import_react5.Menu.Item, {
    key: item.name
  }, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: item.href,
    className: classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")
  }, item.name)))))))))), /* @__PURE__ */ React.createElement(import_react5.Disclosure.Panel, {
    className: "lg:hidden"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 pt-2 pb-3 space-y-1"
  }, navigation.map((item) => /* @__PURE__ */ React.createElement(import_react5.Disclosure.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: classNames(item.current ? "text-white bg-indigo-800" : "text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600", "block px-3 py-2 rounded-md text-base font-medium"),
    "aria-current": item.current ? "page" : void 0
  }, item.name))), /* @__PURE__ */ React.createElement("div", {
    className: "pt-4 pb-3 border-t border-indigo-800"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "px-2 space-y-1"
  }, userNavigation.map((item) => /* @__PURE__ */ React.createElement(import_react5.Disclosure.Button, {
    key: item.name,
    as: "a",
    href: item.href,
    className: "block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600"
  }, item.name))))))), /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 min-w-0 bg-white xl:flex"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-1 space-y-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "space-y-8 sm:space-y-0 sm:flex sm:justify-between sm:items-center xl:block xl:space-y-8"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-shrink-0 h-12 w-12"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "h-12 w-12 rounded-full",
    src: user.avatar_url,
    alt: user.login
  })), /* @__PURE__ */ React.createElement("div", {
    className: "space-y-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-sm font-medium text-gray-900"
  }, user.login), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "group flex items-center space-x-2.5"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "h-5 w-5 text-gray-400 group-hover:text-gray-500",
    "aria-hidden": "true",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z",
    clipRule: "evenodd"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-500 group-hover:text-gray-900 font-medium"
  }, "github/", user.login)))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col sm:flex-row xl:flex-col"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xl:w-full"
  }, "New Project"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "mt-3 inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 xl:ml-0 xl:mt-3 xl:w-full"
  }, "Invite Team"))), /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 xl:flex-col xl:space-x-0 xl:space-y-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /* @__PURE__ */ React.createElement(import_solid.BadgeCheckIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-500 font-medium"
  }, "Pro Member")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /* @__PURE__ */ React.createElement(import_solid.CollectionIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-500 font-medium"
  }, repos.length, " Projects"))))))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-white lg:min-w-0 lg:flex-1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "flex-1 text-lg font-medium"
  }, "Projects"), /* @__PURE__ */ React.createElement(import_react5.Menu, {
    as: "div",
    className: "relative"
  }, /* @__PURE__ */ React.createElement(import_react5.Menu.Button, {
    className: "w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement(import_solid.SortAscendingIcon, {
    className: "mr-3 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  }), "Sort", /* @__PURE__ */ React.createElement(import_solid.ChevronDownIcon, {
    className: "ml-2.5 -mr-1.5 h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement(import_react5.Menu.Items, {
    className: "origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "py-1"
  }, /* @__PURE__ */ React.createElement(import_react5.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Name")), /* @__PURE__ */ React.createElement(import_react5.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Date modified")), /* @__PURE__ */ React.createElement(import_react5.Menu.Item, null, ({ active }) => /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: classNames(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-sm")
  }, "Date created"))))))), /* @__PURE__ */ React.createElement("ul", {
    className: "relative z-0 divide-y divide-gray-200 border-b border-gray-200"
  }, repos.map((repo) => /* @__PURE__ */ React.createElement("li", {
    key: repo.id,
    className: "relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-between space-x-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "min-w-0 space-y-3"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center space-x-3"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bg-green-100 h-4 w-4 rounded-full flex items-center justify-center",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "bg-green-400 h-2 w-2 rounded-full"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "block"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-sm font-medium"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "absolute inset-0",
    "aria-hidden": "true"
  }), repo.full_name)))), /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "relative group flex items-center space-x-2.5"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.99917 0C4.02996 0 0 4.02545 0 8.99143C0 12.9639 2.57853 16.3336 6.15489 17.5225C6.60518 17.6053 6.76927 17.3277 6.76927 17.0892C6.76927 16.8762 6.76153 16.3104 6.75711 15.5603C4.25372 16.1034 3.72553 14.3548 3.72553 14.3548C3.31612 13.316 2.72605 13.0395 2.72605 13.0395C1.9089 12.482 2.78793 12.4931 2.78793 12.4931C3.69127 12.5565 4.16643 13.4198 4.16643 13.4198C4.96921 14.7936 6.27312 14.3968 6.78584 14.1666C6.86761 13.5859 7.10022 13.1896 7.35713 12.965C5.35873 12.7381 3.25756 11.9665 3.25756 8.52116C3.25756 7.53978 3.6084 6.73667 4.18411 6.10854C4.09129 5.88114 3.78244 4.96654 4.27251 3.72904C4.27251 3.72904 5.02778 3.48728 6.74717 4.65082C7.46487 4.45101 8.23506 4.35165 9.00028 4.34779C9.76494 4.35165 10.5346 4.45101 11.2534 4.65082C12.9717 3.48728 13.7258 3.72904 13.7258 3.72904C14.217 4.96654 13.9082 5.88114 13.8159 6.10854C14.3927 6.73667 14.7408 7.53978 14.7408 8.52116C14.7408 11.9753 12.6363 12.7354 10.6318 12.9578C10.9545 13.2355 11.2423 13.7841 11.2423 14.6231C11.2423 15.8247 11.2313 16.7945 11.2313 17.0892C11.2313 17.3299 11.3937 17.6097 11.8501 17.522C15.4237 16.3303 18 12.9628 18 8.99143C18 4.02545 13.97 0 8.99917 0Z",
    fill: "currentcolor"
  })), /* @__PURE__ */ React.createElement("span", {
    className: "text-sm text-gray-500 group-hover:text-gray-900 font-medium truncate"
  }, repo.full_name))), /* @__PURE__ */ React.createElement("div", {
    className: "sm:hidden"
  }, /* @__PURE__ */ React.createElement(import_solid.ChevronRightIcon, {
    className: "h-5 w-5 text-gray-400",
    "aria-hidden": "true"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "hidden sm:flex flex-col flex-shrink-0 items-end space-y-3"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "flex items-center space-x-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: repo.html_url,
    className: "relative text-sm text-gray-500 hover:text-gray-900 font-medium"
  }, "Visit site"), /* @__PURE__ */ React.createElement("button", {
    type: "button",
    className: "relative bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, repo.stargazers_count, /* @__PURE__ */ React.createElement(import_solid.StarIcon, {
    className: "h-5 w-5 text-yellow-300 hover:text-yellow-400",
    "aria-hidden": "true"
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "flex text-gray-500 text-sm space-x-2"
  }, /* @__PURE__ */ React.createElement("span", null, repo.language), /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), /* @__PURE__ */ React.createElement("span", null, "Brazil"))))))))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)))));
}

// app/features/github/api.ts
var api_exports = {};
__export(api_exports, {
  getCommits: () => getCommits,
  getGithubUser: () => getGithubUser,
  getUserRepos: () => getUserRepos
});
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var config = {
  headers: {
    accept: "application/vnd.github.v3+json",
    Authorization: `token ${process.env.GITHUB_API_TOKEN}`
  }
};
var getGithubUser = async (username) => {
  (0, import_tiny_invariant.default)(username, "Please provide a username as a string.");
  const res = await fetch(`https://api.github.com/users/${username}`, config);
  const { login, avatar_url, html_url, bio } = await res.json();
  return { login, avatar_url, html_url, bio };
};
var getUserRepos = async (username) => {
  (0, import_tiny_invariant.default)(username, "Please provide a username as a string.");
  const res = await fetch(`https://api.github.com/users/${username}/repos`, config);
  return (await res.json()).map(({ id, full_name, name, stargazers_count, html_url, language }) => ({
    id,
    full_name,
    name,
    stargazers_count,
    html_url,
    language
  }));
};
var getCommits = async (repoName) => {
  (0, import_tiny_invariant.default)(repoName, "Please provide a repository name as a string.");
  const res = await fetch(`https://api.github.com/repos/${repoName}/commits`, config);
  return await res.json();
};

// route:/home/migtito/Development/remix-first-project/app/routes/github.$username.tsx
var loader = async ({ params }) => {
  return {
    user: await api_exports.getGithubUser(params.username),
    repos: await api_exports.getUserRepos(params.username)
  };
};
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("h3", null, "Whoops! \u{1F4A3}");
}
function github_username_default() {
  const { user, repos } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(GithubContainer, {
    user,
    repos
  });
}

// route:/home/migtito/Development/remix-first-project/app/routes/github.$username/$repoName.tsx
var repoName_exports = {};
__export(repoName_exports, {
  default: () => repoName_default,
  loader: () => loader2
});
var import_react7 = require("@remix-run/react");
var loader2 = async ({ params }) => {
  return await getCommits(params.repoName);
};
function repoName_default() {
  const { repoName } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "pl-6 lg:w-80"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "pt-6 pb-2"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-sm font-semibold"
  }, "Activity")), /* @__PURE__ */ React.createElement("div", null, repoName, /* @__PURE__ */ React.createElement("div", {
    className: "py-4 text-sm border-t border-gray-200"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "#",
    className: "text-indigo-600 font-semibold hover:text-indigo-900"
  }, "View all activity ", /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2192")))));
}

// route:/home/migtito/Development/remix-first-project/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/blog",
    rel: "noreferrer"
  }, "15m Quickstart Blog Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/tutorials/jokes",
    rel: "noreferrer"
  }, "Deep Dive Jokes App Tutorial")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: "https://remix.run/docs",
    rel: "noreferrer"
  }, "Remix Docs"))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "ade9c229", "entry": { "module": "/build/entry.client-5ITFGA3N.js", "imports": ["/build/_shared/chunk-2LKANNDY.js", "/build/_shared/chunk-RKOYF2NQ.js", "/build/_shared/chunk-OGYP3M3B.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-NSLMYPR7.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/github.$username": { "id": "routes/github.$username", "parentId": "root", "path": "github/:username", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/github.$username-BRXJLFCW.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/github.$username/$repoName": { "id": "routes/github.$username/$repoName", "parentId": "routes/github.$username", "path": ":repoName", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/github.$username/$repoName-BPNQC2VR.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EXVEA7F4.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-ADE9C229.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/github.$username": {
    id: "routes/github.$username",
    parentId: "root",
    path: "github/:username",
    index: void 0,
    caseSensitive: void 0,
    module: github_username_exports
  },
  "routes/github.$username/$repoName": {
    id: "routes/github.$username/$repoName",
    parentId: "routes/github.$username",
    path: ":repoName",
    index: void 0,
    caseSensitive: void 0,
    module: repoName_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
