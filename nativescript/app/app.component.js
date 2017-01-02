"use strict";
var github_proxy_1 = require('./github/github.proxy');
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(github) {
        this.github = github;
        this.getUsers();
    }
    AppComponent.prototype.getUsers = function () {
        var _this = this;
        this.github.getUsers().subscribe(function (response) {
            console.log(response.json());
            _this.users = response.json();
            _this.users.forEach(function (element) {
                console.log(element.avatar_url);
            });
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [github_proxy_1.GithubProxy])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map