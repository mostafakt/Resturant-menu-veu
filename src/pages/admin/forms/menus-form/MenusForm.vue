<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
  <div class="form-elements grid grid-cols-12 gap-6">
    <va-card class="col-span-12">
      <va-card-title>{{ "Menu details" }}</va-card-title>
      <va-card-content>
        <form>
          <div class="grid grid-cols-12 gap-6">
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="name" placeholder="Menu name" />
            </div>
            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-input v-model="discount" type="number" placeholder="discount value" />
            </div>
            <div class="flex md:col-span-6 col-span-12">
              <va-select v-model="mainCategory" label="Main category" text-by="description" track-by="id"
                :options="categoriesData" />
            </div>

            <div class="flex md:col-span-4 sm:col-span-6 col-span-12">
              <va-button style="margin-right: 0" small @click="onclick">
                submit
              </va-button>
            </div>
          </div>
        </form>
      </va-card-content>
    </va-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { DashboardCategoryService, DashboardMenuService } from "../../../../api/gen";
import { useRouter } from "vue-router";
const categoriesData = ref([]);

DashboardCategoryService.getCategory().then((res) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  categoriesData.value = res.data.map((t) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    id: t.id,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    description: t?.name,
  }));
});
const router = useRouter();

function onclick() {
  DashboardMenuService.postMenus({
    name: name.value,
    mainCategoryId: mainCategory.value.id,
    discountValue: discount.value,
  }).then(() => {
    router.push({ name: "menus-show" });
  });
}
const mainCategory = ref();
const name = ref("");
const discount = ref(0);

const datePlusDay = (date: Date, days: number) => {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
};


</script>

<style lang="scss" scoped>
fieldset {
  margin-bottom: 0.5rem;
}
</style>
