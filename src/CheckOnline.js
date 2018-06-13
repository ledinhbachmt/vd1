import React, { Component } from 'react';
import { Row, Col, Icon, Input } from 'antd';

class CheckOnline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
        };
    }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }
    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <Row style={{borderLeft:'1px solid #ccced0',borderRight:'1px solid #ccced0', width: 276, height: 'auto' }}>
                <Row style={{backgroundColor:'#4080ff',padding:8,color:'white' }}><b>Chat</b></Row>
                <Row className="user" type='flex' justify='space-between' align='center'>
                    <Col style={{padding:7}}>
                        <img  alt="avatar" src="https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-1/p48x48/31967998_959412870899099_5725950433663385600_n.jpg?_nc_cat=0&amp;oh=98a0f22b60e3ead16a48f3e1e7231298&amp;oe=5BB26236" style={{ width: 34, height: 34, borderRadius: 100 }} />
                        <span style={{paddingLeft:7}}>An Lan Can</span>
                    </Col>
                    <Col style={{marginTop:13,marginRight:10}}>
                        <span style={{ background: 'rgb(66, 183, 42)', borderRadius: '50%', display: 'inline-block', height: 6, marginLeft: 4, width: 6 }}></span>
                    </Col>
                </Row>
                <Row>
                    <Input
                        placeholder="Search"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                </Row>
            </Row>
        );
    }
}

export default CheckOnline;