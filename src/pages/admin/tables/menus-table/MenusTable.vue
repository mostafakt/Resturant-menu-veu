<!-- eslint-disable prettier/prettier -->
<template>
  <va-card class="markup-tables mb-8">
    <va-card-title>{{ t("tables.basic") }}</va-card-title>
    <va-card-content class="overflow-auto">
      <table class="va-table w-full">
        <thead>
          <tr>
            <th>{{ t("tables.headings.name") }}</th>
            <th>{{ t("category name") }}</th>
            <th>{{ t("discount value") }}</th>
            <th>{{ t("creator") }}</th>
          </tr>
        </thead>

        <tbody>

          <tr class=" cursor-pointer" @click="onclick(menuData?.id)" v-for="menuData in menusData" :key="menuData?.id">
            <td>{{ menuData?.name }}</td>
            <td>{{ menuData?.mainCategory?.name }}</td>
            <td>{{ menuData?.discountValue }}%</td>
            <td>{{ menuData?.createdBy.firstName + " " + menuData?.createdBy.lastName }}</td>
          </tr>
        </tbody>
      </table>
    </va-card-content>
  </va-card>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import {

  DashboardMenuService,
} from "../../../../api/gen";
import { log } from "console";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter()
const onclick = (id: number) => {

  router.push({ name: `menu-details`, params: { id: id } });
}
let menusData = ref();

DashboardMenuService.getMenus().then((res) => {
  menusData.value = res.data;
});

watch(menusData, () => {
  console.log("ok...");
});
</script>
