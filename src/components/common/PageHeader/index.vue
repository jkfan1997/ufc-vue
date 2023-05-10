<template>
  <div class="page-header" :class="{ fixed: fixed }">
    <!-- <div class="header-logo">ufc</div> -->
    <div class="header-container">
      <div class="header-menu">
        <template v-for="(menu, index) in menus">
          <div
            class="header-menu-item"
            :class="{
              active: currentMenu == menu.name,
            }"
            :key="index"
            v-if="menu.name"
            @click="menuClick(menu)"
          >
            {{ menu.name }}
          </div>
          <div
            class="header-menu-item-home"
            :class="{
              active: !currentMenu,
            }"
            v-else
            :key="index"
            @click="menuClick()"
          >
            LFC
          </div>
        </template>
      </div>
      <div class="mobile-header-menu">
        <div class="mobile-header-l">LFC</div>
        <div class="mobile-header-c">{{ currentMenu }}</div>
        <div class="mobile-header-r">
          <span class="icon van-icon van-icon-menu"></span>
          <div class="mobile-menu-list"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    currentMenu: { type: String },
  },
  data() {
    return {
      menus: [
        { name: "EVENTS", path: "/events", cname: "事件" },
        { name: "RANKINGS", path: "/rankings", cname: "排行榜" },
        { name: "ATHLETES", path: "/athletes", cname: "运动员" },
        { name: "NEWS", path: "/news", cname: "新闻" },
        {},
        { name: "UFC 30TH", path: "/ufc-30th", cname: "UFC-30年" },
        { name: "CONNECT", path: "/connect", cname: "链接" },
        { name: "WATCH", path: "/watch", cname: "观察" },
        { name: "SHOP", path: "/shop", cname: "商店" },
      ],
      fixed: false,
    };
  },
  mounted() {
    // 获取菜单的初始高度离顶部的距离
    this.menuHeight = this.$el.offsetTop;
    // 监听窗口滚动事件
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    // 移除窗口滚动事件监听
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    menuClick(menu) {
      if (!menu) {
        this.$router.push("/");
      }
      this.$router.push(menu.path);
    },
    handleScroll() {
      // 获取窗口滚动距离
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      // 判断是否需要固定菜单
      this.fixed = scrollTop >= this.menuHeight;
    },
  },
};
</script>

<style scoped lang="less">
// 通用样式变量
// @default-bg-color: #fff;
// @dark-bg-color: #000;
// @default-text-color: #fff;
// @dark-text-color: #000;
// @activeColor: #d20a0a;
@default-bg-color: #fff;
@dark-bg-color: #d20a0a;
@default-text-color: #fff;
@dark-text-color: #000;
@default-active-color: #d20a0a;
@dark-active-color: #fff;
.page-header {
  width: 100%;
  position: absolute;
  top: 40px;
  transition: top 0.2s linear;
  @media only screen and (max-width: 768px) {
    // background-color: green;
    top: 0;
    position: fixed;
  }

  .header-container {
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    transition: max-width 0.2s linear;
  }
  .header-menu {
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    background-color: @default-bg-color;
    color: @dark-text-color;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 768px) {
      // background-color: green;
      display: none;
    }
    .header-menu-item {
      font-size: 16px;
      font-weight: 600;
    }
    .header-menu-item-home {
      width: 200px;
      font-size: 35px;
      font-weight: 900;
      font-style: oblique;
    }
    .header-menu-item,
    .header-menu-item-home {
      line-height: 70px;
      height: 70px;
      text-align: center;
      box-sizing: border-box;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: calc(50% - 20px);
        width: 40px;
        height: 3px;
        background-color: @default-active-color;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
      }

      &:hover {
        cursor: pointer;
        color: @default-active-color;
        &::after {
          opacity: 1;
        }
      }
    }
    .active {
      color: @default-active-color;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: calc(50% - 20px);
        width: 40px;
        height: 3px;
        background-color: @default-active-color;
        opacity: 1;
      }
    }
  }
  .mobile-header-menu {
    width: 100%;
    background-color: @default-bg-color;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: relative;
    @media only screen and (min-width: 768px) {
      display: none;
    }
    .mobile-header-l {
      line-height: 60px;
      font-size: 35px;
      font-weight: 600;
      box-sizing: border-box;
      color: @default-active-color;
      // position: absolute;
      // top: 0;
      // left: 20px;
    }
    .mobile-header-c {
      line-height: 60px;
      font-size: 18px;
      font-weight: 600;
      box-sizing: border-box;
      color: @dark-text-color;
      // margin: 0 auto;
    }
    .mobile-header-r {
      // position: absolute;
      // top: 0;
      // right: 20px;
      line-height: 60px;
      .van-font {
        font-size: 20px;
      }
      .mobile-menu-list {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0;
        background: red;

        bottom: -100px;
        transition: height 0.2s linear;
      }
      &:hover {
        .mobile-menu-list {
          height: 100px;
        }
      }
    }
  }
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: none;
  z-index: 999;
  // background-color: @dark-bg-color;
  /* 设置固定菜单的样式 */
  .header-container {
    max-width: 100%;
    background-color: @dark-bg-color;
    box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.2);
  }
  .header-menu {
    // width: 100%;
    max-width: 1200px;
    padding: 0 35rpx;
    margin: 0 auto;

    background-color: @dark-bg-color;
    color: @default-text-color;
    box-shadow: none;
    .header-menu-item,
    .header-menu-item-home {
      &::after {
        background-color: @dark-active-color;
      }

      &:hover {
        cursor: pointer;
        color: @dark-active-color;
        &::after {
          opacity: 1;
        }
      }
    }
    .active {
      color: @dark-active-color;
      &::after {
        background-color: @dark-active-color;
      }
    }
  }
}
</style>
