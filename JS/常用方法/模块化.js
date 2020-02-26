// UMD, 糅合了AMD+CMD+CommonJS

// AMD，异步加载，依赖前置，需要提前写好要加载的module【工厂模式】
// define(id?, dependencies?, factory);require([module], callback);
// RequireJS

// CMD，异步加载，依赖就近，需要使用时，require
// SeaJS 

// CommonJS，同步加载，使用exports.xxx/module.export导出
// const fs = require('fs')
// exports.fs = fs
// module.exports = fs

; (function () {
    function MyModule () {
        // ...
    }

    var moduleName = MyModule;
    if (typeof module !== 'undefined' && typeof exports === 'object') {
        module.exports = moduleName;
    } else if (typeof define === 'function' && (define.amd || define.cmd)) {
        define(function () { return moduleName; });
    } else {
        this.moduleName = moduleName;
    }
}).call(this || (typeof window !== 'undefined' ? window : global));


// ES6 import/export

// a.js
function func1 () {
    // ...
}
export { func1 }
export function func2 () {
    // ...
}
// export default obj，仅一个 相当于这个模块对象
// import obj from './a.js'

// b.js
import { func1, func2 } from '.／a.js'