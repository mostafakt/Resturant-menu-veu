<template>
  <div class="profile-dropdown-wrapper">
    <va-dropdown v-model="isShown" class="profile-dropdown" stick-to-edges :offset="[13, 0]">
      <template #anchor>
        <span class="profile-dropdown__anchor">
          <slot />
          <va-icon class="px-2" :name="isShown ? 'angle_up' : 'angle_down'" :color="colors.primary" />
        </span>
      </template>
      <va-dropdown-content class="profile-dropdown__content">
        <va-list-item v-for="option in options" :key="option.name" class="p-2">
          <router-link :to="{ name: option.redirectTo }" @click.stop="option.onClick" class="profile-dropdown__item">
            {{ t(`user.${option.name}`) }}
          </router-link>
        </va-list-item>
      </va-dropdown-content>
    </va-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useColors } from "vuestic-ui";
import { ACCESS_TOKEN } from "../../../../utils/constants";

const { t } = useI18n();
const { colors } = useColors();

withDefaults(
  defineProps<{
    options?: { name: string; redirectTo: string; onClick?: () => void }[];
  }>(),
  {
    options: () => [
      {
        name: "profile",
        redirectTo: "",
      },
      {
        name: "logout",
        redirectTo: "login",
        onClick: () => { localStorage.removeItem(ACCESS_TOKEN) }
      },
    ],
  }
);

const isShown = ref(false);
</script>

<style lang="scss" scoped>
.profile-dropdown {
  cursor: pointer;

  &__anchor {
    display: inline-block;
  }

  &__item {
    display: block;
    color: var(--va-gray);

    &:hover,
    &:active {
      color: var(--va-primary);
    }
  }
}
</style>
