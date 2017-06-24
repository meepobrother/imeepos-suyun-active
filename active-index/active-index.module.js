"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var active_index_routing_module_1 = require("./active-index-routing.module");
var active_index_component_1 = require("./active-index.component");
var active_list_module_1 = require("../active-list/active-list.module");
var ActiveIndexModule = (function () {
    function ActiveIndexModule() {
    }
    return ActiveIndexModule;
}());
ActiveIndexModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            active_index_routing_module_1.ActiveIndexRoutingModule,
            active_list_module_1.ActiveListModule
        ],
        declarations: [active_index_component_1.ActiveIndexComponent]
    })
], ActiveIndexModule);
exports.ActiveIndexModule = ActiveIndexModule;
//# sourceMappingURL=active-index.module.js.map