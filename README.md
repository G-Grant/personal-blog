# 个人博客

## 部分依赖包说明

### react-router-dom

当使用 HTML5 `History API` 时, 所有的 404 请求都会响应 index.html 的内容。 将 `devServer.historyApiFallback` 设为 `true` 开启。

```javascript
module.exports = {
    //...
    devServer: {
        historyApiFallback: true,
    },
};
```

### eslint-config-prettier

禁用所有和 Prettier 产生冲突的规则

`prettier` 放在最后，此时可以覆盖前面所有规则

```javascript
{
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
}
```

### eslint-plugin-prettier

把 Prettier 应用到 Eslint，配合 rules `"prettier/prettier": "error"` 实现 Eslint 提醒

该插件随附有 `plugin:prettier/recommended` 配置，可一次性设置该插件和 `eslint-config-prettier`。

```javascript
{
    "extends": ["plugin:prettier/recommended"]
}
```
