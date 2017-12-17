import isClass from 'is-class';

const plugins = new Map();

/**
 * 返回一个字符串，该字符串是根据指定插件类型及别名组合生成的唯一键。
 */
function getKey(pluginType, pluginAlias) {
  return `${pluginType}/${pluginAlias}`;
}

/**
 * 返回指定插件类型及别名是否已被注册。
 */
export function hasPluginClass(pluginType, pluginAlias) {
  const key = getKey(pluginType, pluginAlias);
  return plugins.has(key);
}

/**
 * 注册指定插件类型及别名对应的类。
 */
export function registerPluginClass(pluginType, pluginAlias, pluginClass) {
  if (hasPluginClass(pluginType, pluginAlias)) {
    throw new Error(`Plugin alias of "${pluginType}/${pluginAlias}" has already been registered.`);
  }
  if (!isClass(pluginClass)) {
    throw new Error('The "pluginClass" argument must be an ES6 class.');
  }
  const key = getKey(pluginType, pluginAlias);
  plugins.set(key, pluginClass);
  return key;
}

/**
 * 返回指定插件类型及别名对应的类。
 */
export function getPluginClass(pluginType, pluginAlias) {
  if (!hasPluginClass(pluginType, pluginAlias)) {
    throw new Error(`Plugin alias of "${pluginType}/${pluginAlias}" has not been registered yet.`);
  }
  const key = getKey(pluginType, pluginAlias);
  return plugins.get(key);
}

export function registerMessageClass(pluginAlias, pluginClass) {
  return registerPluginClass('message', pluginAlias, pluginClass);
}

export function registerCardClass(pluginAlias, pluginClass) {
  return registerPluginClass('card', pluginAlias, pluginClass);
}
