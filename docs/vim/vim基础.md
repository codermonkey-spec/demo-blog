### 一.vim 的移动

```vim
     k
<- h   l ->
     j
```

### 二. vim 的`normal模式`和`insert模式`

```
进入insert模式: i(光标前),a(光标后)

从inser模式进入normal模式: esc, `ctrol-[`,
```

```
// 在vscode中的settings.json中添加如下代码
// 他的意思是我们可以通过`jk`来进入normal模式

 "vim.insertModeKeyBindings": [
    {
        "before":["j","k"],
        "after":["<Esc>"]
    }
  ],
```

### 三. 退出和保存退出

```
// 在normal模式下, `:q! enter` 是强制退出, `:wq enter` 是保存并退出
```

### 四. 移动

```
// `0`键:到本行第一个不是blank字符的位置
// `$`:到本行最后一个不是

// 上面的按键非常的不方便，同样我们也需要修改按键

"vim.normalModeKeyBindings": [
   {
    "before":["H"],
    "after":["^"]
   },
   {
    "before":["L"],
    "after":["g","_"]
   }
  ],

```

`blank`:空格，tab，换行，回车等

### 五.插入

```
I:行首    A:行尾
O:行前    o:行后

```

### 六.复制，删除当前行，粘贴，

```
yy:复制当前行
p:粘贴
dd:删除当前行
```
