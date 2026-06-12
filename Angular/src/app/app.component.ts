import { Component, ChangeDetectionStrategy } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { DxColorBoxTypes } from 'devextreme-angular/ui/color-box';
import { DxToastTypes } from 'devextreme-angular/ui/toast';

import { DxColorBoxModule } from 'devextreme-angular/ui/color-box';

@Component({
    selector: 'app-root',
    imports: [DxColorBoxModule],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./app.component.scss'],
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
