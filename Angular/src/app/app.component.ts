import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxColorBoxTypes } from 'devextreme-angular/ui/color-box';
import { DxToastTypes } from 'devextreme-angular/ui/toast';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  toastColor: string = '';

  onValueChanged(e: DxColorBoxTypes.ValueChangedEvent): void {
    this.toastColor = e.value;
    if (this.toastColor) {
      notify({
        message: 'The color has been changed',
        onShowing: (args: DxToastTypes.ShowingEvent) => {
          args.component.content().style.backgroundColor = this.toastColor;
        },
      });
    }
  }
}
