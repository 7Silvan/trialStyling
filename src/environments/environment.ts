// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC5wA0uyuaRTcXkH2EdG5-rqPHBoZ7-bsU",
    authDomain: "mortgage-customer-portal.firebaseapp.com",
    databaseURL: "https://mortgage-customer-portal.firebaseio.com",
    projectId: "mortgage-customer-portal",
    storageBucket: "mortgage-customer-portal.appspot.com",
    messagingSenderId: "906096764747"
  }
};
