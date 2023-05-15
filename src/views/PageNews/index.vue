<template>
  <div class="news">
    <PageHeader currentMenu="NEWS" />
    <div class="main">NEWS</div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import PageFooter from "@/components/common/PageFooter";
export default {
  name: "News",
  components: { PageHeader, PageFooter },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.news {
  height: 100%;
  .main {
    min-height: 100%;
  }
}
</style>
