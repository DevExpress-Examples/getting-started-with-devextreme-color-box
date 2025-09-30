<script setup lang="ts">
import DxColorBox from 'devextreme-vue/color-box';
import type { DxColorBoxTypes } from 'devextreme-vue/color-box';
import type { DxToastTypes } from 'devextreme-vue/toast';
import notify from 'devextreme/ui/notify';

function onValueChanged(e: DxColorBoxTypes.ValueChangedEvent): void {
  const toastColor = e.value;
  if (toastColor) {
    notify({
      message: 'The color has been changed',
      onShowing: (args: DxToastTypes.ShowingEvent) => {
        args.component.content().style.backgroundColor = toastColor;
      }
    });
  }
}
</script>

<template>
  <div id="container">
    <DxColorBox
      label="Pick a color"
      value="#000000"
      :edit-alpha-channel="true"
      apply-button-text="Show notification"
      :show-clear-button="true"
      @value-changed="onValueChanged"
    />
  </div>
</template>

<style scoped>
#container {
  width: 400px;
}
</style>
