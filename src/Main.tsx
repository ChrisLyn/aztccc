import * as React from 'react';
import { App } from './App';
import { Heading } from './components/heading/Heading';
import { Body } from './components/body/Body';
import './Main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


export interface IMainProps
{
    app: App;
}

export class Main extends React.Component<IMainProps, {}>
{
    state = {
        bodyView: '我们的团契'
    }
    constructor(props: IMainProps)
    {
        super(props);
    }

    updateBodyText = (event: any) => {
        this.setState({bodyView: event.label});
    }

    public render(): JSX.Element
    {
        return (
            <>
                <Body currentView={this.state.bodyView}/>
            </>
        );
    }
}