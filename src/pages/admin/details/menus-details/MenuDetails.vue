<!-- eslint-disable prettier/prettier -->
<template  >
    <div class="flex flex-col gap-5">
        <div v-for="menuCategory in menuCategories" :key="menuCategory.order" class="cards-container flex gap-6 ml-50px  ">

            <va-card @click="onclick(menuCategoryDetails)" v-for="menuCategoryDetails in menuCategory.categories"
                :key="menuCategoryDetails?.id" class="w-[200px] md:col-span-3 cursor-pointer rounded-[50px] ">

                <va-image :src="getImage(menuCategoryDetails.categoryChildType)" style="height: 200px">

                    <va-card-title text-color="#ddd">
                        <div class="text-black  ">{{ menuCategoryDetails.name }}</div>
                    </va-card-title>
                </va-image>

            </va-card>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import {

    DashboardCategoryService,
    DashboardMenuService,
} from "../../../../api/gen";
import { log } from "console";
import { useRouter } from "vue-router";

const { t } = useI18n();
const router = useRouter()

let id = router.currentRoute.value.params.id;

let menusData = ref();
let menuCategories = ref<{ order: number, categories: any[] }[]>([{ order: 0, categories: [] }]);

DashboardMenuService.getMenus1(Number(id)).then((res) => {
    menuCategories.value[0].categories.push(res?.mainCategory)
    menuCategories.value.push({ order: 0, categories: res?.mainCategory.childes })
});


const onclick = async (category: any) => {

    if (category?.categoryChildType) {
        menuCategories.value = menuCategories.value.filter(item => item.order <= category.order);


        DashboardCategoryService.getCategory1(Number(category.id)).then((res) => {
            menuCategories.value.push({ order: category.order + 1, categories: res?.childes })

        });
    }

}
const getImage = (type: any) => {
    if (type) return "https://th.bing.com/th/id/R.4396d74119d6fbcf8cee72fb05f708ca?rik=MXvJKaMJzNB%2b2A&pid=ImgRaw&r=0"
    else return 'https://th.bing.com/th/id/OIP.0JDhRnUQYFCCbQUR4IcaOQHaEK?w=308&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
}

</script>
  