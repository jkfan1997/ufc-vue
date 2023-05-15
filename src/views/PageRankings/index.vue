<template>
  <div class="rankings">
    <PageHeader currentMenu="RANKINGS" />
    <div class="main">RANKINGS</div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import PageFooter from "@/components/common/PageFooter";
export default {
  name: "Rankings",
  components: { PageHeader, PageFooter },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.rankings {
  height: 100%;
  position: relative;
  .main {
    min-height: 100%;
  }
}
</style>
