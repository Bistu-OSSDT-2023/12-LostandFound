<!-- search.js -->
<script>
function searchItems() {
      var searchTerm = document.getElementById("searchTerm").value.toLowerCase();
      var items = localStorage.getItem("items");
      if (items) {
        items = JSON.parse(items);
        var filteredItems = items.filter(function(item) {
          // 使用toLowerCase()将搜索词和失物信息转换为小写，以实现不区分大小写的搜索
          return (
            item.name.toLowerCase().includes(searchTerm) ||
            item.owner.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
          );
        });

        var itemList = document.getElementById("itemList");

        // 清空失物列表
        while (itemList.firstChild) {
          itemList.firstChild.remove();
        }

        // 遍历过滤后的失物信息，动态添加到列表中
        for (var i = 0; i < filteredItems.length; i++) {
          var item = filteredItems[i];

          var li = document.createElement("li");
          li.className = "item";

          var h3 = document.createElement("h3");
          h3.innerText = item.name;
          li.appendChild(h3);

          var p1 = document.createElement("p");
          p1.innerHTML = "<span>姓名：</span>" + item.owner;
          li.appendChild(p1);

          var p2 = document.createElement("p");
          p2.innerHTML = "<span>联系方式：</span>" + item.contact;
          li.appendChild(p2);

          var p3 = document.createElement("p");
          p3.innerHTML = "<span>描述：</span>" + item.description;
          li.appendChild(p3);

          itemList.appendChild(li);
        }
      }
    }
</script>
