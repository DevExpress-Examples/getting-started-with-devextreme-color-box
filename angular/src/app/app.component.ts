import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    toastColor: string;
    onValueChanged(e: { value: string; }) {
        this.toastColor = e.value;
        if (this.toastColor) {
            notify({
                message: 'The color has been changed',
                onShowing: (e: { component: { content: () => { (): any; new(): any; style: { (): any; new(): any; backgroundColor: string; }; }; }; }) => {
                    e.component.content().style.backgroundColor = this.toastColor;
                }
            });
        }
    }
}

