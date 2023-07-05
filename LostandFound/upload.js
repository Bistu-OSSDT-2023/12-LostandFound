<!-- upload.js -->
<script>
window.addEventListener('beforeunload', function() {
  // 清空 localStorage 中的数据
  localStorage.removeItem('items');
});

function saveItem() {
var itemName = document.getElementById("itemName").value;
      var itemOwner = document.getElementById("itemOwner").value;
      var contactInfo = document.getElementById("contactInfo").value;
      var itemDescription = document.getElementById("itemDescription").value;

      var newItem = {
        name: itemName,
        owner: itemOwner,
        contact: contactInfo,
        description: itemDescription
      };

      // 先从localStorage中获取已有的失物信息
      var items = localStorage.getItem("items");
      if (items) {
        // 如果已存在失物信息，则将新失物添加到数组中
        items = JSON.parse(items);
        items.push(newItem);
      } else {
        // 如果还没有失物信息，则创建一个新的数组并添加新失物
        items = [newItem];
      }

      // 将更新后的失物信息保存回localStorage中
      localStorage.setItem("items", JSON.stringify(items));

      // 清空表单字段
      document.getElementById("itemName").value = "";
      document.getElementById("itemOwner").value = "";
      document.getElementById("contactInfo").value = "";
      document.getElementById("itemDescription").value = "";

      alert("失物信息已保存！");
	displayItems();
    }
function displayItems() {
      var items = localStorage.getItem("items");
      if (items) {
        items = JSON.parse(items);
        var itemList = document.getElementById("itemList");

        // 清空失物列表
        while (itemList.firstChild) {
          itemList.firstChild.remove();
        }

        // 遍历失物信息，动态添加到列表中
        for (var i = 0; i < items.length; i++) {
          var item = items[i];

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