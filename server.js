const { https } = require('firebase-functions');
const {region } = require('firebase-functions')
const { default: next } = require('next');
//const config = require("./next.config");

const isDev = process.env.NODE_ENV !== 'production';

const server = next({
    dev: isDev,
    //location of .next generated after running -> yarn build
    conf: { distDir: '.next' },
    image :{ domains :['drcuthebarbersh.web.app'],}
});

const nextjsHandle = server.getRequestHandler();
exports.nextServer = https
    .onRequest((req, res) => {
    return server.prepare()
        .then(() => {
            return nextjsHandle(req, res)
        });
});
// exports.nextServer2 =
//     region('europe-west1')
//     https.onRequest((req, res) => {
//     return server.prepare()
//         .then(() => {
//             return nextjsHandle(req, res)
//         });
// });

/*
firebase-admin,firebase-functions
require these plugins,install them
*/