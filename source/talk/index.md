---
title: talk
date: 2021-08-05 13:58:41
---

{% raw %}
<div id="hpp_talk"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@1.2.0/talk.css" />
<script src="https://cdn.jsdelivr.net/gh/HexoPlusPlus/HexoPlusPlus@1.2.0/talk_user.js"></script>
<script>
new hpp_talk({
    id: "hpp_talk",
    domain: "admin.bhwlm.top",
    limit: 10,//单次获取的最多条数
    start: 0,//从第几条开始
});
const setCustom = (s) => {
   htalk.dark({
       id:"h",
       dark:s==='dark'?true:false
   })
  }


</script>

{% endraw %}
