<template>
    <DxColorBox
        label="Pick a color"
        value="#000000"
        :edit-alpha-channel="true"
        apply-button-text="Show notification"
        :show-clear-button="true"
        @value-changed="onValueChanged"
    />
</template>

<script>
import 'devextreme/dist/css/dx.light.css';
import { DxColorBox } from 'devextreme-vue/color-box';
import notify from "devextreme/ui/notify";

export default {
    components: {
        DxColorBox
    },
    data() {
        return {
            toastColor: ''
        };
    },
    methods: {
        onValueChanged(e) {
            this.toastColor = e.value;
            if (this.toastColor) {
                notify({
                    message: 'The color has been changed',
                    onShowing: (e) => {
                        e.component.content().style.backgroundColor = this.toastColor;
                    }
                });
            }
        }
    }
}
</script>