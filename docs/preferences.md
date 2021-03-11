# VS Code 磨刀日记 #1: 配置项

每个配置项标题括号内的即为该配置项的 `id`，在 VS Code 设置页面的搜索框里粘贴 `id` 即可跳转到配置项：

![preference-search](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ff8d67960dee4de38d75def661f72bce~tplv-k3u1fbpfcp-watermark.image)

## Fast Scroll (editor.fastScrollSensitivity)

在速览大文件的时候，除了可以在 `minimap` 中进行拖动，还可以按住 `alt` 键进行快速滚动，滚动的步长可以通过 `editor.fastScrollSensitivity` 配置项进行配置。

![fast-scroll](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6f74663edc814df69219948b920f64f2~tplv-k3u1fbpfcp-watermark.image)

## Linked Editing (editor.linkedEditing)

众所周知，在用 VS Code 编辑 HTML 文件的时候，HTML 的开始标签和配对的结束标签并不会默认关联，也就是说编辑了开始标签，结束标签并不会同步更新：

![linked-editing__default](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ba42f151472243c88f7818dcfe54a774~tplv-k3u1fbpfcp-watermark.image)

通过 `Rename Symbol` 命令 (快捷键 `F2`) 可以实现 HTML 的关联编辑：

![linked-editing__rename-symbol](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2bfc401f9ced41b8b915dc26adcac147~tplv-k3u1fbpfcp-watermark.image)

不错，这样已经实现了关联编辑的功能，但是每次需要执行 `Rename Symbol` 操作，如果能够在编辑开始标签的时候，自动替换与之配对的结束标签就好了，所以就有了 `formulahendry.auto-rename-tag` 插件，安装后，在编辑 `HTML` 或者 `XML` 文件的时候，就能够自动关联编辑标签。

![linked-editing__plugin](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4aa52260f27433caba774784b83d208~tplv-k3u1fbpfcp-watermark.image)

但其实在 1.44 版本之后，VS Code 就内置了这个功能，将 `editor.linkedEditing` 配置项设置为 `true` 即可。

> From 1.44, VS Code offers the built-in Rename On Type support for HTML and Handlebars that can be enabled with the setting editor.renameOnType. If this setting is enabled, this extension will skip HTML and Handlebars files regardless of the languages listed in auto-rename-tag.activationOnLanguage
> <https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag>

![linked-editing__enabled](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c362a339bb2a48d79430c0f6c5a8057a~tplv-k3u1fbpfcp-watermark.image)

## Word Separators (editor.wordSeparators)

此选项可以配置单词的分割规则，默认情况下，类似于 `app_name` 在进行单词相关操作（比如选中、删除单词等）时，会被判定为一个单词，因为 `_` 不是 VS Code 的默认的单词分隔符：

![work-separators__default](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/899174a57bf54d4e93dc5fd43a4f4d76~tplv-k3u1fbpfcp-watermark.image)

可以看到双击 `zh_CN` 的时候，整个 `zh_CN` 都能够被选中，但是双击 `en-US` 的时候，只能选中 `en` 或者 `US`，因为 `editor.wordSeparators` 的默认值为:

```plain
`~!@#$%^&*()-=+[{]}\|;:'",.<>/?
```

可以看到包含了 `-` 但是没有包含 `_`，将 `_` 添加后，就可以将 `zh_CN` 判定为两个单词了：

![work-separators__configured](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7513a9fd7824480e910390c9309449a2~tplv-k3u1fbpfcp-watermark.image)

## Render Side By Side (diffEditor.renderSideBySide)

默认的差异编辑器是并排视图显示，设置 `diffEditor.renderSideBySide` 为 `false` 后，就可以以内联视图显示，此配置也可以在编辑器右上角的菜单按钮中快捷设置：

![render-side-by-side](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f3a28f7c190b4eacb1454bb001e5bcc4~tplv-k3u1fbpfcp-watermark.image)
