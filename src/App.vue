<template lang="pug">
  .app
    .item
      h1.title 1、快捷键
      HotKey
    .item
      h1.title 2、时间选择器
      Datepicker
    .item
      h1.title 3、文件上传(拖拽)
      FileUpload
</template>

<script>
import HotKey from './components/HotKey'
import FileUpload from './components/FileUpload'
import Datepicker from './components/Datepicker'
export default {
  data () {
    return {
    }
  },
  components: {
    HotKey,
    Datepicker,
    FileUpload
  }
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  background: transparent;
}

html,
body {
  line-height: 1;
  font-size: 12px;
  width: 100%;
  height: 100%;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

:focus {
  outline: 0;
}

/* remember to highlight inserts somehow! */
ins {
  text-decoration: none;
}

del {
  text-decoration: line-through;
}

/* tables still need 'cellspacing='0'' in the markup */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/*link style*/
a {
  text-decoration: none;
  color: #999;
  cursor: pointer;
}

/*a:visited {color: #666;}*/
a:hover,
a:active {
  color: #cc0000;
}

/*clear style*/
.clear {
  clear: both;
}

.clearfix:after {
  content: '.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.clearfix {
  display: block;
}
a {
  text-decoration: none;
  color: #999;
  cursor: pointer;
}

.hide {
  display: none;
}
.app {
  width: auto;
  margin: 20px;
}
.item {
  width: 100%;
  height: auto;
  margin: 10px 0;
}
h1.title {
  font-size: 20px;
  height: 25px;
  line-height: 25px;
  margin: 5px 0;
}
</style>
