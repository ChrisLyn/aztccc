
import * as React from "react";
import './Body.scss'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export interface IBody {
    currentView: any
}

export class Body extends React.Component<IBody, {}>
{
    state = {
        title: "团契介绍",
        bodyText: "我们是一群年青基督徒，我们当中有已工作的职业青年，也有在ASU就读的博士、研究生及本科生，我们活泼、热爱生活，我们更愿意把我们的信仰分享给周围的人，“我们爱，因为神先爱我们”（约壹四19）。新叶团契成立于2019年2月，从不到十人的小团契开始，神一步一步的带领我们，将得救的人不断加给我们。欢迎你加入我们这个基督大家庭和我们一起传福音、培训门徒并建立教会!",
        secondTitle: "信仰立场",
        secondBodyText: <p></p>
    };

    constructor(props: any) {
        super(props);
        
    }

    componentWillReceiveProps(nextProps : any) {}

    public render(): JSX.Element
    {
        return (
            <>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <div className="text-container">
                            <h3>团契介绍</h3>
                            <br></br>
                            <p>我们是一群年青基督徒，我们当中有已工作的职业青年，
                            也有在ASU就读的博士、研究生及本科生，我们活泼、热爱生活，
                            我们更愿意把我们的信仰分享给周围的人，“我们爱，因为神先爱我们”
                            （约壹四19）。新叶团契成立于2019年2月，从不到十人的小团契开始，
                            神一步一步的带领我们，将得救的人不断加给我们。欢迎你加入我们这个基督大家庭和我们一起传福音、
                            培训门徒并建立教会!</p>
                            <a href="#/belief">了解更多</a>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <div className="text-container-right">
                            <br></br>
                            <br></br>
                            <h5><i>我靠着那加给我力量的，凡事都能做。</i></h5>
                            <p style={{float: "right"}}>腓立比书 4:13</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{backgroundColor: "#efefef"}}>
                    <Col xs={6} md={6} lg={6}>
                        <div className="text-container">
                            <h3>我们的活动</h3>
                            <br/>
                            <p><i>由于现在都是线上聚会，我们所有的聚会都采用ZOOM的形式。</i></p>
                            <p><b>周三: </b>祷告会 7:30 PM - 8:30 PM MST (ZOOM meeting ID: 921 1231 0854)</p>
                            <p><b>周五: </b>中文查经 7:30 PM - 8:45 PM MST (ZOOM meeting ID: 890 7326 3346)</p>
                            <p><b>周日: </b>主日崇拜 1:15 PM - 2:15 PM MST (ZOOM meeting ID: 835 9331 8946)</p>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <div className="text-container-right">
                            <br></br>
                            <br></br>
                            <h5><i>你们不可停止聚会，好像那些停止惯了的人，倒要彼此劝勉；既知道那日子临近，就更当如此。</i></h5>
                            <p style={{float: "right"}}>希伯来书 10:25</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <div className="text-container">
                            <h3>联系我们</h3>
                            <br></br>
                            <ul>
                                <li><b>联系人: </b>海琴</li>
                                <li><b>微信: </b>jesusloveyouall</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={6} md={6} lg={6}>
                        <div className="text-container-right">
                            <h3>支持我们</h3>
                            <br></br>
                            <p>这里是支持我们的方式。</p>
                            <p>欢迎您以Zelle的方式支持我们。</p>
                            <p><b>Zelle 邮箱: </b>newleafasu@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </>
        );
    }
}