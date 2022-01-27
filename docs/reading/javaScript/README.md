# JavaScript + DOM 编程艺术
*一些随意的阅读记录 读到哪句话自我感觉不错，就记录下（当然一长串代码之类的我可懒得抄一遍）*
---
1. 书真正的目的是为了理解DOM脚本编程技术背后的思想和原则，利用DOM以一种既方便自己更体贴用户的方式去完善网页
2. 此书主要是一些DOM脚本的基本原则，良好习惯和正确思路
3. 使网页具备交互能力的语言---JavaScript
4. 什么是DOM， 简单说 DOM是一套对文档的内容进行抽象和概念化的方法
5. W3C 对DOM的定义: 一个与平台和编程语言无关的接口，程序和脚本可以通过这个接口动态的访问和修改文档的内容，结构和样式。
6. 各个浏览器支持自己的方法，使得编写脚本代码及其不方便，最终定制了统一标准，将DOM标准化
7. **DOM的标准化使得开发不再为了各个浏览器写不同的脚本代码，标注哪些浏览器支持哪些方法和函数**
---
1. JavaScript解释型语言，无须编译，但许多语法错误只有在执行时才能被发现
2. 每条语句末尾都加上分号 一个良好的习惯
3. 单引号 双引号都可以 但是最好在同一代码中保持一致，别混着用，转义字符(\\)转义单双引号 
4. 普通数组和关联数组
5. 可以试试命名变量用下划线区分 命名函数用小驼峰
6. 说起变量的作用域自然是为了防止污染变量，那其实闭包也是一种隔离变量的方式（看怎么理解了）
7. 内置对象 Math Date 宿主对象 比如document等
-----
1. DOM常用的节点：元素节点 文本节点 属性节点
2. 获取元素 getElementById getElementsByClassName getElementsByTagName 
3. getAttribute setAttrtibute 
4. 阻止默认行为 return false
-------
--------
直接第五章 中间跳过了 有空在看
-------
1. 平稳退化：确保网页在没有JavaScript的情况下也能正常工作
2. 渐进增强：用一些额外的数据去包裹原始的数据，按照渐进增强原则创建出来的网页几乎都符合平稳退化的原则
3. 向后兼容：兼容一些古老的浏览器 他们对js的支持程度不一样 比如
    `if (!document.getElementById) return false;`
4. 性能优化：js尽量减少访问dom和减少标记（过多不必要的元素只会增加dom树的规模，进而增加遍历dom树以查找特定元素的时间），减少搜索dom树
5. js脚本的优化可以有：合并脚本（把多个js文件合并到一个脚本中，减少加载页面的请求数量）放置脚本（将js文件放在最后，</body>之前，配合window.onload）压缩脚本
-----
1. 比如把a标签中的href属性赋值为一个真是的链接或者地址，这样当js禁用时仍能保持跳转-----平稳退化
2. 如果想用js给网页添加一些行为，就不应该让js代码对这个网页的结构有依赖
3. 按理说函数只有一个入口和一个出口，但实际中感觉如果函数有多个出口，只要这些出口集中出现在函数的开头 还是可以接口的，比如

    `function demo() {
      if (!document.getElementById) return false;
      if (!document.getElementsByTagName) return false;
      var dom = document.getElementById('btn');
      console.log(dom)
    }`
4. onload函数 的最佳解决方案
      function addLoadEvent(func) {
        var oldonload = window.onload;
        if (typeof window.onload !== 'function') {
          window.onload = func;
        }else {
          window.onload = function() {
            oldonload();
            func();
          }
        }
      }

      addLoadEvent(fun1)
      addLoadEvent(fun2)
5. 理想情况下，js脚本不应该对html文档的内容和结构做太多的假设，这方面要根据实际情况来确定
6. onclick 与 onkeypresss 事件，其实用tab键移动到某个链接然后按下回车键的动作也会触发onclik事件 onclick涉及的很好 已经满足需要了
7. 支持dom的任何一种程序设计语言 是啥 ？？
8. 简单区分下DOM Core 和 HTML-DOM 
  1.DOM Core: abc.setAttribute('src', source)
  2.HTML-DOM: abc.src = source
  个人简单的理解 DOM Core 方法是不专属于js，支持dom的任何一种程序设计语言都可以使用，并且不仅限于处理网页 也可以处理任何一种其他的标记语言（比如XML）编写出来的文档，两者使用根据个人喜好来（其实感觉DOM Core更稳妥点）
--------
1. innerHTML 是带着标签的 innerHTML 是HTML 的专有属性，不能用于任何其他标记语言文档
2. 再次感受到渐进增强： 比如一个打开链接操作 一开始就依赖于JavaScript伪协议去处理链接的操作是不对的， 我们可以设计的时候是开始使用常规真实的链接，然后通过JavaScript去拦截他，同样，比如构建ajax网站最好的方法，也是先构建一个常规的网站，然后用ajax去拦截他
3. createElement createTextNode appendChild insertBefore
--------
1. 多定义一些变量可以方便阅读代码
2. continue 的使用（平时使用的是比较少的）
<!-- 8.5章没看直接第九了 -->
3. 
--------
1. 我们看到的网页是三层信息的共同体：结构层 表现层 行为层
2. css可以利用伪类走入dom的领地 如:hover，但dom也可以给元素设定样式
3. 
