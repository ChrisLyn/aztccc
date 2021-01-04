import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import { Main } from "../../Main";
import { Heading } from "../heading/Heading";
import { Belief } from "../belief/belief";

export class AppRouter extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return <>
            <div className="homepage-image">
                <Heading className="vertical-margine" />
            </div>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route exact path="/belief" component={Belief} />
                        <Redirect to="/"/>
                    </Switch>
                </div>
            </Router>
            
        </>
    }
}