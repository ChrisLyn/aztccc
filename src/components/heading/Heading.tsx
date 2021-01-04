
import * as React from "react";
import './Heading.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';

export interface IHeading {
    className: any
}

export class Heading extends React.Component<IHeading, {}>
{
    lastScrollY: number;
    ticking: boolean;
    items: { label: string; icon: string; }[];
    state = {
        componentBackgrounColor: {},
        activeItem: {
            label: '',
            icon: 'pi pi-fw pi-home'
        }
    };

    constructor(props: any) {
        super(props);
        this.lastScrollY = 0;
        this.items =  [
            {label: '我们的团契', icon: 'pi pi-fw pi-home'},
            {label: '我们的聚会', icon: 'pi pi-fw pi-calendar'},
            {label: '联系我们', icon: 'pi pi-fw pi-mobile'},
            {label: '奉献', icon: 'pi pi-fw pi-money-bill'}
        ];
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.lastScrollY = window.scrollY;
        if (this.lastScrollY !== 0) {
            this.setState({componentBackgrounColor: {
                backgroundColor: "#aaa"
            }});
        } else {
            this.setState({componentBackgrounColor: {}});
        }
      };

    public render(): JSX.Element
    {
        return (
            <>
                <div id="heading-main-container" className="heading fixed-possition" style={this.state.componentBackgrounColor}>
                    <Row>
                        <Col xs={5} md={4} lg={3}><span><b className="heading-text">基督徒新叶团契</b></span></Col>
                        <Col xs={6} md={6} lg={7}></Col>
                        <Col xs={1} md={2} lg={2}><span className="float-right"><i className="pi pi-bars heading-menu heading-text-color"></i></span></Col>
                    </Row>
                </div>
            </>
        );
    }
}