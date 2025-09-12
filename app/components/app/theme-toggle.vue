<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate mx-3">
    <input v-model="isDark" type="checkbox">
    <Icon class="swap-on" name="tabler:sun" size="35" />
    <Icon class="swap-off" name="tabler:moon-filled" size="35" />
  </label>
</template>
