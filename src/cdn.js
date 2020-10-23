/*
 * author: wendux
 * email: 824783146@qq.com
 * source code: https://github.com/wendux/Ajax-hook
 */

import {hook, unHook} from "./xhr-hook";
import {proxy, unProxy} from "./xhr-proxy";
import {justifyUrl} from './white-list-name';
// ah(ajax hook)
export var xhlXML = {
    proxy,
    unProxy,
    hook,
    unHook,
    justifyUrl
};
