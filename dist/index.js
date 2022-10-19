'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildMockComponent = exports.registerResources = exports.registerServices = exports.registerFactories = exports.registerFilters = exports.registerStates = exports.registerLayouts = exports.registerConfigs = exports.registerConstants = exports.registerRuns = exports.registerProviders = exports.registerEnums = exports.registerComponents = exports.Component = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _decorators = require('./core/decorators.js');

var _registry = require('./core/registry.js');

var _validators = require('./core/validators.js');

var _path = require('./core/transformers/path.js');

var _value = require('./core/transformers/value.js');

var _testing = require('./core/testing.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component decorator
 * @type {Function}
 */
var Component = exports.Component = (0, _decorators.createPrototypeDecorator)(_decorators.ENUMS.COMPONENT);

var registerComponents = exports.registerComponents = (0, _registry.createFolderNameRegistry)('Component', [_path.buildNameFromPath, _lodash2.default.lowerFirst], [_validators.indexFileValidator, _validators.componentConfigurationValidator], [_value.buildComponentConfig, _value.forceControllerAsVm], function (application, name, component) {
    return application.component(name, component);
});

var registerEnums = exports.registerEnums = (0, _registry.createFolderNameRegistry)('Enum', [_path.buildNameFromPath, (0, _path.addNameSuffix)('ENUM'), _lodash2.default.snakeCase, _lodash2.default.toUpper], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.factory(name, value);
});

var registerProviders = exports.registerProviders = (0, _registry.createFolderNameRegistry)('Provider', [_path.buildNameFromPath, _lodash2.default.lowerFirst], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.provider(name, value);
});

var registerRuns = exports.registerRuns = (0, _registry.createFolderNameRegistry)('Run', [function () {
    return 'N/A';
}], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.run(value);
});

var registerConstants = exports.registerConstants = (0, _registry.createFolderNameRegistry)('Constant', [_path.buildNameFromPath, _lodash2.default.snakeCase, _lodash2.default.toUpper], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.constant(name, value);
});

var registerConfigs = exports.registerConfigs = (0, _registry.createFolderNameRegistry)('Config', [function () {
    return 'N/A';
}], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.config(value);
});

var registerLayouts = exports.registerLayouts = (0, _registry.createFolderNameRegistry)('Layout', [_path.buildNameFromPath, (0, _path.addNameSuffix)('Layout')], [_validators.indexFileValidator, _validators.layoutConfigurationValidator], [_value.forceControllerAsVm, _value.forceAbstract], function (application, name, value) {
    return application.config(function ($stateProvider) {
        return $stateProvider.state(name, value);
    });
});

var registerStates = exports.registerStates = (0, _registry.createFolderNameRegistry)('State', [_path.buildNameFromPath, _lodash2.default.snakeCase, function (name) {
    return name.replace(new RegExp('_', 'g'), '.').toLowerCase();
}], [_validators.indexFileValidator, _validators.stateConfigurationValidator], [_value.forceControllerAsVm], function (application, name, value) {
    return application.config(function ($stateProvider) {
        return $stateProvider.state(name, value);
    });
});

var registerFilters = exports.registerFilters = (0, _registry.createFolderNameRegistry)('Filter', [_path.buildNameFromPath, _lodash2.default.camelCase], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.filter(name, value);
});

var registerFactories = exports.registerFactories = (0, _registry.createFolderNameRegistry)('Factory', [_path.buildNameFromPath, (0, _path.addNameSuffix)('Factory')], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.factory(name, value);
});

var registerServices = exports.registerServices = (0, _registry.createFolderNameRegistry)('Service', [_path.buildNameFromPath, (0, _path.addNameSuffix)('Service')], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.service(name, value);
});

var registerResources = exports.registerResources = (0, _registry.createFolderNameRegistry)('Resource', [_path.buildNameFromPath, (0, _path.addNameSuffix)('Resource')], [_validators.indexFileValidator], [], function (application, name, value) {
    return application.service(name, value);
});

/**
 *
 * @type {Function}
 */
var buildMockComponent = exports.buildMockComponent = _testing.buildMockComponent;
//# sourceMappingURL=data:application/json;base64,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O0FBQUEsV0FBOEIsWUFBWSxPQUFaLENBQW9CLElBQXBCLEVBQTBCLEtBQTFCLENBQTlCO0FBQUEsQ0FMNkIsQ0FBMUI7O0FBUVA7Ozs7QUFJTyxJQUFNLDZFQUFOIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUHJvdG90eXBlRGVjb3JhdG9yLCBFTlVNUyB9IGZyb20gJy4vY29yZS9kZWNvcmF0b3JzLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlRm9sZGVyTmFtZVJlZ2lzdHJ5IH0gZnJvbSAnLi9jb3JlL3JlZ2lzdHJ5LmpzJztcclxuaW1wb3J0IHsgaW5kZXhGaWxlVmFsaWRhdG9yLCBsYXlvdXRDb25maWd1cmF0aW9uVmFsaWRhdG9yLCBzdGF0ZUNvbmZpZ3VyYXRpb25WYWxpZGF0b3IsIGNvbXBvbmVudENvbmZpZ3VyYXRpb25WYWxpZGF0b3IgfSBmcm9tICcuL2NvcmUvdmFsaWRhdG9ycy5qcyc7XHJcbmltcG9ydCB7IGJ1aWxkTmFtZUZyb21QYXRoLCBhZGROYW1lU3VmZml4IH0gZnJvbSAnLi9jb3JlL3RyYW5zZm9ybWVycy9wYXRoLmpzJztcclxuaW1wb3J0IHsgYnVpbGRDb21wb25lbnRDb25maWcsIGZvcmNlQ29udHJvbGxlckFzVm0sIGZvcmNlQWJzdHJhY3QgfSBmcm9tICcuL2NvcmUvdHJhbnNmb3JtZXJzL3ZhbHVlLmpzJztcclxuXHJcbmltcG9ydCB7IGJ1aWxkTW9ja0NvbXBvbmVudCBhcyB0ZXN0aW5nTW9ja0NvbXBvbmVudCB9IGZyb20gJy4vY29yZS90ZXN0aW5nLmpzJztcclxuXHJcbi8qKlxyXG4gKiBDb21wb25lbnQgZGVjb3JhdG9yXHJcbiAqIEB0eXBlIHtGdW5jdGlvbn1cclxuICovXHJcbmV4cG9ydCBjb25zdCBDb21wb25lbnQgPSBjcmVhdGVQcm90b3R5cGVEZWNvcmF0b3IoRU5VTVMuQ09NUE9ORU5UKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlckNvbXBvbmVudHMgPSBjcmVhdGVGb2xkZXJOYW1lUmVnaXN0cnkoXHJcbiAgICAnQ29tcG9uZW50JyxcclxuICAgIFtidWlsZE5hbWVGcm9tUGF0aCwgbG9kYXNoLmxvd2VyRmlyc3RdLFxyXG4gICAgW2luZGV4RmlsZVZhbGlkYXRvciwgY29tcG9uZW50Q29uZmlndXJhdGlvblZhbGlkYXRvcl0sXHJcbiAgICBbYnVpbGRDb21wb25lbnRDb25maWcsIGZvcmNlQ29udHJvbGxlckFzVm1dLFxyXG4gICAgKGFwcGxpY2F0aW9uLCBuYW1lLCBjb21wb25lbnQpID0+IGFwcGxpY2F0aW9uLmNvbXBvbmVudChuYW1lLCBjb21wb25lbnQpXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJFbnVtcyA9IGNyZWF0ZUZvbGRlck5hbWVSZWdpc3RyeShcclxuICAgICdFbnVtJyxcclxuICAgIFtidWlsZE5hbWVGcm9tUGF0aCwgYWRkTmFtZVN1ZmZpeCgnRU5VTScpLCBsb2Rhc2guc25ha2VDYXNlLCBsb2Rhc2gudG9VcHBlcl0sXHJcbiAgICBbaW5kZXhGaWxlVmFsaWRhdG9yXSxcclxuICAgIFtdLFxyXG4gICAgKGFwcGxpY2F0aW9uLCBuYW1lLCB2YWx1ZSkgPT4gYXBwbGljYXRpb24uZmFjdG9yeShuYW1lLCB2YWx1ZSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclByb3ZpZGVycyA9IGNyZWF0ZUZvbGRlck5hbWVSZWdpc3RyeShcclxuICAgICdQcm92aWRlcicsXHJcbiAgICBbYnVpbGROYW1lRnJvbVBhdGgsIGxvZGFzaC5sb3dlckZpcnN0XSxcclxuICAgIFtpbmRleEZpbGVWYWxpZGF0b3JdLFxyXG4gICAgW10sXHJcbiAgICAoYXBwbGljYXRpb24sIG5hbWUsIHZhbHVlKSA9PiBhcHBsaWNhdGlvbi5wcm92aWRlcihuYW1lLCB2YWx1ZSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclJ1bnMgPSBjcmVhdGVGb2xkZXJOYW1lUmVnaXN0cnkoXHJcbiAgICAnUnVuJyxcclxuICAgIFsoKSA9PiAnTi9BJ10sXHJcbiAgICBbaW5kZXhGaWxlVmFsaWRhdG9yXSxcclxuICAgIFtdLFxyXG4gICAgKGFwcGxpY2F0aW9uLCBuYW1lLCB2YWx1ZSkgPT4gYXBwbGljYXRpb24ucnVuKHZhbHVlKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyQ29uc3RhbnRzID0gY3JlYXRlRm9sZGVyTmFtZVJlZ2lzdHJ5KFxyXG4gICAgJ0NvbnN0YW50JyxcclxuICAgIFtidWlsZE5hbWVGcm9tUGF0aCwgbG9kYXNoLnNuYWtlQ2FzZSwgbG9kYXNoLnRvVXBwZXJdLFxyXG4gICAgW2luZGV4RmlsZVZhbGlkYXRvcl0sXHJcbiAgICBbXSxcclxuICAgIChhcHBsaWNhdGlvbiwgbmFtZSwgdmFsdWUpID0+IGFwcGxpY2F0aW9uLmNvbnN0YW50KG5hbWUsIHZhbHVlKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyQ29uZmlncyA9IGNyZWF0ZUZvbGRlck5hbWVSZWdpc3RyeShcclxuICAgICdDb25maWcnLFxyXG4gICAgWygpID0+ICdOL0EnXSxcclxuICAgIFtpbmRleEZpbGVWYWxpZGF0b3JdLFxyXG4gICAgW10sXHJcbiAgICAoYXBwbGljYXRpb24sIG5hbWUsIHZhbHVlKSA9PiBhcHBsaWNhdGlvbi5jb25maWcodmFsdWUpXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJMYXlvdXRzID0gY3JlYXRlRm9sZGVyTmFtZVJlZ2lzdHJ5KFxyXG4gICAgJ0xheW91dCcsXHJcbiAgICBbYnVpbGROYW1lRnJvbVBhdGgsIGFkZE5hbWVTdWZmaXgoJ0xheW91dCcpXSxcclxuICAgIFtpbmRleEZpbGVWYWxpZGF0b3IsIGxheW91dENvbmZpZ3VyYXRpb25WYWxpZGF0b3JdLFxyXG4gICAgW2ZvcmNlQ29udHJvbGxlckFzVm0sIGZvcmNlQWJzdHJhY3RdLFxyXG4gICAgKGFwcGxpY2F0aW9uLCBuYW1lLCB2YWx1ZSkgPT4gYXBwbGljYXRpb24uY29uZmlnKCRzdGF0ZVByb3ZpZGVyID0+ICRzdGF0ZVByb3ZpZGVyLnN0YXRlKG5hbWUsIHZhbHVlKSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclN0YXRlcyA9IGNyZWF0ZUZvbGRlck5hbWVSZWdpc3RyeShcclxuICAgICdTdGF0ZScsXHJcbiAgICBbYnVpbGROYW1lRnJvbVBhdGgsIGxvZGFzaC5zbmFrZUNhc2UsIChuYW1lKSA9PiBuYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnXycsICdnJyksICcuJykudG9Mb3dlckNhc2UoKV0sXHJcbiAgICBbaW5kZXhGaWxlVmFsaWRhdG9yLCBzdGF0ZUNvbmZpZ3VyYXRpb25WYWxpZGF0b3JdLFxyXG4gICAgW2ZvcmNlQ29udHJvbGxlckFzVm1dLFxyXG4gICAgKGFwcGxpY2F0aW9uLCBuYW1lLCB2YWx1ZSkgPT4gYXBwbGljYXRpb24uY29uZmlnKCRzdGF0ZVByb3ZpZGVyID0+ICRzdGF0ZVByb3ZpZGVyLnN0YXRlKG5hbWUsIHZhbHVlKSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlckZpbHRlcnMgPSBjcmVhdGVGb2xkZXJOYW1lUmVnaXN0cnkoXHJcbiAgICAnRmlsdGVyJyxcclxuICAgIFtidWlsZE5hbWVGcm9tUGF0aCwgbG9kYXNoLmNhbWVsQ2FzZV0sXHJcbiAgICBbaW5kZXhGaWxlVmFsaWRhdG9yXSxcclxuICAgIFtdLFxyXG4gICAgKGFwcGxpY2F0aW9uLCBuYW1lLCB2YWx1ZSkgPT4gYXBwbGljYXRpb24uZmlsdGVyKG5hbWUsIHZhbHVlKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyRmFjdG9yaWVzID0gY3JlYXRlRm9sZGVyTmFtZVJlZ2lzdHJ5KFxyXG4gICAgJ0ZhY3RvcnknLFxyXG4gICAgW2J1aWxkTmFtZUZyb21QYXRoLCBhZGROYW1lU3VmZml4KCdGYWN0b3J5JyldLFxyXG4gICAgW2luZGV4RmlsZVZhbGlkYXRvcl0sXHJcbiAgICBbXSxcclxuICAgIChhcHBsaWNhdGlvbiwgbmFtZSwgdmFsdWUpID0+IGFwcGxpY2F0aW9uLmZhY3RvcnkobmFtZSwgdmFsdWUpXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTZXJ2aWNlcyA9IGNyZWF0ZUZvbGRlck5hbWVSZWdpc3RyeShcclxuICAgICdTZXJ2aWNlJyxcclxuICAgIFtidWlsZE5hbWVGcm9tUGF0aCwgYWRkTmFtZVN1ZmZpeCgnU2VydmljZScpXSxcclxuICAgIFtpbmRleEZpbGVWYWxpZGF0b3JdLFxyXG4gICAgW10sXHJcbiAgICAoYXBwbGljYXRpb24sIG5hbWUsIHZhbHVlKSA9PiBhcHBsaWNhdGlvbi5zZXJ2aWNlKG5hbWUsIHZhbHVlKVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyUmVzb3VyY2VzID0gY3JlYXRlRm9sZGVyTmFtZVJlZ2lzdHJ5KFxyXG4gICAgJ1Jlc291cmNlJyxcclxuICAgIFtidWlsZE5hbWVGcm9tUGF0aCwgYWRkTmFtZVN1ZmZpeCgnUmVzb3VyY2UnKV0sXHJcbiAgICBbaW5kZXhGaWxlVmFsaWRhdG9yXSxcclxuICAgIFtdLFxyXG4gICAgKGFwcGxpY2F0aW9uLCBuYW1lLCB2YWx1ZSkgPT4gYXBwbGljYXRpb24uc2VydmljZShuYW1lLCB2YWx1ZSlcclxuKTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYnVpbGRNb2NrQ29tcG9uZW50ID0gdGVzdGluZ01vY2tDb21wb25lbnQ7XHJcbiJdfQ==