import { Main } from './Main';
import ReactDOM from 'react-dom';
import React from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import { AppRouter } from './components/router/Router';

export class App
{
    constructor()
    {
        this.render();
    }

    public static addTwoNumbers(num1: number, num2: number): number
    {
        return num1 + num2;
    }

    private render(): void {
        ReactDOM.render(React.createElement(AppRouter, { app: this }),
            document.getElementById("app")
        );
    }
}

new App();