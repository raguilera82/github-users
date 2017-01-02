"use strict";
var http_1 = require('@angular/http');
var core_1 = require("@angular/core");
var GithubProxy = (function () {
    function GithubProxy(http) {
        this.http = http;
    }
    GithubProxy.prototype.getUsers = function () {
        return this.http.get('https://api.github.com/users');
    };
    GithubProxy = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GithubProxy);
    return GithubProxy;
}());
exports.GithubProxy = GithubProxy;
//# sourceMappingURL=github.proxy.js.map