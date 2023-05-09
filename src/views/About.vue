<template>
  <ul class="menu">
    <li class="active"><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
    <li class="line"></li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" },
        { id: 3, name: "Item 3" },
        { id: 4, name: "Item 4" },
      ],
      selectedItem: { id: 1, name: "Item 1" },
      showList: false,
    };
  },
  computed: {
    isWeb() {
      return window.innerWidth >= 768; // 假设大于等于768像素为Web端
    },
  },
  methods: {
    selectItem(item) {
      this.selectedItem = item;
      this.showList = false;
    },
  },
};
</script>
<style lang="less" scoped>

.menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
}

.menu li {
  margin-right: 20px;
}

.menu li:last-child {
  margin-right: 0;
}

.menu li a {
  color: #333;
  text-decoration: none;
  padding-bottom: 5px;
}

.menu .line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: #f00;
  transition: transform 0.3s ease-out;
}

.menu li.active a,
.menu li a:hover {
  color: #f00;
}

.menu li.active ~ .line {
  transform: translateX(calc((100% / 5) * (var(--active) - 1)));
}
</style>
