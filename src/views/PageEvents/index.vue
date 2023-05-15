<template>
  <div class="events">
    <PageHeader currentMenu="EVENTS" />
    <div class="main">EVENTS</div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import PageFooter from "@/components/common/PageFooter";
export default {
  name: "Events",
  components: { PageHeader, PageFooter },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.events {
  height: 100%;
  .main {
    min-height: 100%;
  }
}
</style>
