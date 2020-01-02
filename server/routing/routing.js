const routing = (app, connection) => {

    const phonesRoute = require('./phones');
    const notesRoute = require('./notebooks');
    const watchesRoute = require('./watches');
    const videocardsRoute = require('./videocards');
    const processorsRoute = require('./processors');
    const ssdsRoute = require('./ssds');

    phonesRoute(app, connection);
    notesRoute(app, connection);
    watchesRoute(app, connection);
    videocardsRoute(app,connection);
    processorsRoute(app,connection);
    ssdsRoute(app,connection);
};

module.exports = routing;