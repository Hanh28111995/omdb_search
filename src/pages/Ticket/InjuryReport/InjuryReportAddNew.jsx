import React, { useEffect, useState } from 'react'
import {
    Form,
    DatePicker,
    Col,
    Row,
    Space,
    Input,
    Button,
    Checkbox
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/imgs/Logo__001_no_bg.png'
import body_img from '../../../assets/imgs/body_img.jpg'
import InjuryBodyParts from '../../../modules/InjuryBodyParts/InjuryBodyParts';


const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;

export default function InjuryReportAddNew(props) {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])
    const onChange1 = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    const onOk = (value) => {
        console.log('onOk: ', value);
    };
    const reasonOptions = ['Equipment Malfunction', 'Safety Violation', 'Collision', 'Fall/FallingObject']
    const natureInjuryOptions = ['Burn', 'Cut', 'Bruise', 'Scrape', 'Break', 'Sprain', 'Strain', 'Concussion']
    const bodyPartsOptions = [['Foot', 'Ankle', 'Knee', 'Shin'], ['Caft', 'Thign', 'Buttocks', 'Waist'], ['Hip', 'Groin', 'Stomach', 'Ribs'], ['Chest', 'Back', 'Shoulder', 'Neck'], ['Hand', 'Wrist', 'Forearm', 'Elbow'], ['Bicep', 'Head', 'Forehead', 'Ears'], ['Eyes', 'Nose', 'Mount', 'Chin']]
    const onFinish = (values) => {
        console.log(values)
    }
    const [bodyPart, setBodyPart] = useState([])

    return (
        <Space direction='vertical' className='bg-form pb-5' >
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Create New Injury Report</h4>
                    </div>
                    <NavLink to='/admin/ticket/injury'>
                        <button className='btn btn-success back-btn'>
                            Back
                        </button>
                    </NavLink>
                </div>
            </Space>
            <Space className='w-100 justify-content-center'>
                <div className='d-flex  flex-column text-center'>
                    <img src={logo} alt="WLC logo" className='mb-2 mt-5' />
                    <p className='mb-1'><b>Phone: 909-632-1643</b></p>
                    <p ><b>Fax: 909-632-1208</b></p>
                </div>
            </Space>
            <hr />
            <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                disabled={props.deactive}
                style={{ maxWidth: '100%' }}
                autoComplete='off'
                onFinish={onFinish}
            >
                <p className='text-center'><b>---Information---</b></p>
                <Row gutter={24}>
                    <Col xs={24} sm={12} md={8} lg={8} >
                        <Form.Item
                            label="Full Name"
                            name="fullname"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} >
                        <Form.Item
                            label="Nick Name"
                            name="nickname"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} >
                        <Form.Item
                            label="Department"
                            name="department"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} >
                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} >
                        <Form.Item
                            label="Phone"
                            name="phone"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8} >
                        <Form.Item
                            label="Gender"
                            name="gender"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                </Row>
                <p className='text-center'><b>---Incident---</b></p>
                <Row gutter={24}>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="1) Date of Accident" name="dateAccident">
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date and Time (mm/dd/yyyy --:-- )'
                                showTime={{
                                    format: 'hh:mm A',
                                }}
                                format='MM-DD-YYYY  hh:mm A'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="2) How did the injury occur?"
                            name="describeInjuryOccur1"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="3) Others Involved"
                            name="describeInjuryOccur2"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="4) Caused by" name='causeby' >
                            <CheckboxGroup
                                options={reasonOptions}
                            // value={checkedList} 
                            // onChange={onChange} 
                            />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="5) Other"
                            name="describeInjuryOccur3"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <p className='text-center'><b>--- Injury ---</b></p>
                <Row gutter={24}>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="1) Description of Injury"
                            name="describeInjuryOccur4"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="2) Nature of Injury"
                            name="describeInjuryOccur5"
                        >
                            <CheckboxGroup
                                options={natureInjuryOptions} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="3) Other"
                            name="describeInjuryOccur6"
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <p className='text-center'><b>--- Part(s) of Body Affected ---</b></p>
                <div className='container-fluid'>
                <Checkbox.Group className='w-100' onChange={(checkedValues) => { console.log('checked = ', checkedValues); setBodyPart(checkedValues) }}>
                    <Row gutter={24} className='body-part-effect'>
                        <Col xs={24} sm={24} md={10} lg={10} >
                            <Row gutter={24} className='justify-content-center'><p><b>Left</b></p></Row>
                            {
                                bodyPartsOptions.map((item, index) => {
                                    return (
                                        <Row key={'row' + index} gutter={24}>

                                            {
                                                item.map((item_inside, index) => {
                                                    return (
                                                        <Col key={'col' + index} xs={6} sm={6} md={6} lg={6} >
                                                            <Checkbox value={'Left_' + item_inside}>{item_inside}</Checkbox>
                                                        </Col>
                                                    )
                                                })
                                            }

                                        </Row>
                                    )
                                })
                            }
                        </Col>
                        <Col xs={24} sm={24} md={4} lg={4} className='text-center'>
                            <InjuryBodyParts listInjuryPart={bodyPart} />
                        </Col>
                        <Col xs={24} sm={24} md={10} lg={10} >
                            <Row gutter={24} className='justify-content-center'><p><b>Right</b></p></Row>
                            {
                                bodyPartsOptions.map((item, index) => {
                                    return (
                                        <Row key={'row' + index} gutter={24}>

                                            {
                                                item.map((item_inside, index) => {
                                                    return (
                                                        <Col key={'col' + index} xs={6} sm={6} md={6} lg={6} >
                                                            <Checkbox value={'Right_' + item_inside}>{item_inside}</Checkbox>
                                                        </Col>
                                                    )
                                                })
                                            }

                                        </Row>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Checkbox.Group>
                </div>
                <p className='text-center mt-5'><b>--- Care ---</b></p>
                <Row gutter={24}>
                    <Col xs={24} sm={12} md={12} lg={12} >
                        <Form.Item
                            label="1) Doctor"
                            name="dr"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} >
                        <Form.Item
                            label="2) Hospital"
                            name="hospital"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} >
                        <Form.Item
                            label="3) Insurance"
                            name="insurance"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} >
                        <Form.Item
                            label="4) Account No"
                            name="accnum"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="5) Care Provided"
                            name="careprovide"
                        >
                            <Input disabled={true} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24} style={{ padding: '12px', justifyContent: 'right' }}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Row>
            </Form >
        </Space >
    )
}
