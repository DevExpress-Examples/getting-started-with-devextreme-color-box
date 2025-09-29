import React, { useCallback } from "react";
import "devextreme/dist/css/dx.light.css";

import { ColorBox } from 'devextreme-react/color-box';
import notify from "devextreme/ui/notify";

function App() {
    const onValueChanged = useCallback((e) => {
        const toastColor = e.value;
        if (toastColor) {
            notify({
                message: 'The color has been changed',
                onShowing: (e) => {
                    e.component.content().style.backgroundColor = toastColor;
                }
            });
        }
    }, []);
    
    return (
        <ColorBox 
            label="Pick a color"
            value="#000000"
            editAlphaChannel={true}
            applyButtonText="Show notification"
            showClearButton={true}
            onValueChanged={onValueChanged}
        />
    );
}

export default App;
