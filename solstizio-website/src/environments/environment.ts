// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    firebase: {
        projectId: 'solstizio-estate',
        appId: '1:928783842786:web:91d997f3c92aff6ea9cdbb',
        storageBucket: 'solstizio-estate.appspot.com',
        locationId: 'europe-west',
        apiKey: 'AIzaSyAkhxAd7IZPsKOHQcLL8hq6gLQAkUr23n4',
        authDomain: 'solstizio-estate.firebaseapp.com',
        messagingSenderId: '928783842786',
        measurementId: 'G-L4KL01DBQ3',
    },
    solstizio: {
        eventsCollPath: 'eventi',
        webpageTitle: 'solstizio-project',
    },
    production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
