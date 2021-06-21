"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.CQStyle = exports.CQStyleGroup = exports.CQStyleGroups = void 0;
var CQStyleGroups = /** @class */ (function () {
    function CQStyleGroups(items) {
        this["@jcr:primaryType"] = "nt:unstructured";
        this.items = items || [];
    }
    CQStyleGroups.prototype.addStyleGroup = function (styleGroup) {
        this.items.push(styleGroup);
    };
    CQStyleGroups.prototype.format = function (output) {
        var _a, _b;
        if (output === void 0) { output = "xml"; }
        if (output === "xml") {
            return __assign((_a = {}, _a["@jcr:primaryType"] = this["@jcr:primaryType"], _a), this.formatItems(output));
        }
        else if (output === "json") {
            return __assign((_b = {}, _b["jcr:primaryType"] = this["@jcr:primaryType"], _b), this.formatItems(output));
        }
    };
    CQStyleGroups.prototype.formatItems = function (output) {
        var formattedItems = {};
        this.items.forEach(function (item, i) { return formattedItems["item" + i] = item.format(output); });
        return formattedItems;
    };
    return CQStyleGroups;
}());
exports.CQStyleGroups = CQStyleGroups;
var CQStyleGroup = /** @class */ (function () {
    function CQStyleGroup(settings) {
        this["@jcr:primaryType"] = "nt:unstructured";
        if (!settings)
            throw new Error("No Settings were passed: " + settings);
        this["@cq:styleGroupLabel"] = settings["@cq:styleGroupLabel"];
        this["@cq:styleGroupMultiple"] = settings["@cq:styleGroupMultiple"] || false;
        this["cq:styles"] = settings["cq:styles"] || [];
    }
    CQStyleGroup.prototype.format = function (output) {
        var _a, _b;
        if (output === void 0) { output = "xml"; }
        if (output === "xml") {
            return _a = {},
                _a["@jcr:primaryType"] = this["@jcr:primaryType"],
                _a["@cq:styleGroupLabel"] = this["@cq:styleGroupLabel"],
                _a["@cq:styleGroupMultiple"] = this["@cq:styleGroupMultiple"],
                _a["cq:styles"] = __assign({ "@jcr:primaryType": "nt:unstructured" }, this.formatStyles(output)),
                _a;
        }
        else if (output === "json") {
            return _b = {},
                _b["jcr:primaryType"] = this["@jcr:primaryType"],
                _b["cq:styleGroupLabel"] = this["@cq:styleGroupLabel"],
                _b["cq:styleGroupMultiple"] = this["@cq:styleGroupMultiple"],
                _b["cq:styles"] = __assign({ "jcr:primaryType": "nt:unstructured" }, this.formatStyles(output)),
                _b;
        }
    };
    CQStyleGroup.prototype.formatStyles = function (output) {
        var formattedStyles = {};
        this["cq:styles"].forEach(function (style, i) { return formattedStyles["item" + i] = style.format(output); });
        return formattedStyles;
    };
    CQStyleGroup.prototype.addStyle = function (style) {
        this["cq:styles"].push(style);
    };
    return CQStyleGroup;
}());
exports.CQStyleGroup = CQStyleGroup;
var CQStyle = /** @class */ (function () {
    function CQStyle(settings) {
        this["@jcr:primaryType"] = "nt:unstructured";
        if (!settings)
            throw new Error("No Settings were passed: " + settings);
        this["@cq:styleId"] = settings["@cq:styleId"];
        this["@cq:styleLabel"] = settings["@cq:styleLabel"];
        this["@cq:styleClasses"] = settings["@cq:styleClasses"] || settings["@cq:styleId"];
    }
    CQStyle.prototype.format = function (output) {
        if (output === void 0) { output = "xml"; }
        if (output === "xml") {
            return {
                "@jcr:primaryType": this["@jcr:primaryType"],
                "@cq:styleId": this["@cq:styleId"],
                "@cq:styleLabel": this["@cq:styleLabel"],
                "@cq:styleClasses": this["@cq:styleClasses"]
            };
        }
        else {
            return {
                "jcr:primaryType": this["@jcr:primaryType"],
                "cq:styleId": this["@cq:styleId"],
                "cq:styleLabel": this["@cq:styleLabel"],
                "cq:styleClasses": this["@cq:styleClasses"]
            };
        }
    };
    return CQStyle;
}());
exports.CQStyle = CQStyle;
