import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { ColorBox } from 'devextreme-react/color-box';
import type { ColorBoxTypes } from 'devextreme-react/color-box';
import notify from 'devextreme/ui/notify';
import type { ToastTypes } from 'devextreme-react/toast';

function App(): JSX.Element {
  const onValueChanged = useCallback((e: ColorBoxTypes.ValueChangedEvent) => {
    const toastColor = e.value;
    if (toastColor) {
      notify({
        message: 'The color has been changed',
        onShowing: (args: ToastTypes.ShowingEvent) => {
          args.component.content().style.backgroundColor = toastColor;
        },
      });
    }
  }, []);

  return (
    <div id="container">
      <ColorBox
        label="Pick a color"
        defaultValue="#000000"
        editAlphaChannel={true}
        applyButtonText="Show notification"
        showClearButton={true}
        onValueChanged={onValueChanged}
      />
    </div>
  );
}

export default App;
