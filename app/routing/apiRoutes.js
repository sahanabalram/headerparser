module.exports = function (app) {
    var apiURL = "/api/whoami";
    app.get(apiURL, function (request, response) {
        var language = request.acceptsLanguages();
        var software = "OS: " + request.useragent.os + " Browser: " + request.useragent.browser;
        var ipAddress = request.ip;
        response.json({
            "ipAddress": ipAddress,
            "language": language[0],
            "software": software
        });
    });
};