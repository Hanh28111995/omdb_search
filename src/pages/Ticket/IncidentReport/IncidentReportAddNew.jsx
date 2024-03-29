import React from 'react'
import { Space, Form, Input, Col, Row, DatePicker, Button, Select, Radio } from 'antd'
import { Editor } from '@tinymce/tinymce-react';
import { NavLink } from 'react-router-dom';

const { Option } = Select;
export default function IncidentReportAddNew(props) {
    const onChange1 = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    const onOk = (value) => {
        console.log('onOk: ', value);
    };
    function handleChange(value) { console.log(`Selected ${value}`); }
    function handleBlur() { console.log('blur'); }
    function handleFocus() { console.log('focus'); }
    function handleSearch(value) { console.log('search:', value); }
    return (
        <Space direction='vertical' className='bg-form pb-5' >
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Create New Incident Report</h4>
                    </div>
                    <NavLink to='/admin/ticket/incident'>
                        <Button className='back-btn'>
                            Back
                        </Button>
                    </NavLink>
                </div>
            </Space>
            <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                disabled={props.deactive}
                style={{ maxWidth: '100%' }}
                autoComplete='off'
            >
                <Row gutter={24}>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Type" name='type_incident'
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Type Incident!",
                                },
                            ]}
                        >
                            <Radio.Group>
                                <Radio value="MLK1"> MLK1 </Radio>
                                <Radio value="CTR1"> CTR1 </Radio>
                                <Radio value="VN"> VN </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Location" name='location'
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Location!",
                                },
                            ]}>
                            <Radio.Group>
                                <Radio value="Warehouse"> Warehouse </Radio>
                                <Radio value="Office"> Office </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Manager"
                            name="manager"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Manager!",
                                },
                            ]}
                        >
                            <Select
                                className='w-100'
                                showSearch
                                placeholder="Select your Manager"
                                optionFilterProp="children"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onSearch={handleSearch}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
                                <Option value="">----</Option>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Date Of Incident"
                            name="dateIncident"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Date Of Incident!",
                                },
                            ]}
                        >
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date and Time'
                                showTime={{
                                    format: 'hh:mm A',
                                }}
                                format='MM-DD-YYYY  hh:mm A'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Witness" name="witness"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Witness!",
                                },
                            ]}
                        >
                            <Select
                                className='w-100'
                                showSearch
                                placeholder="Select your Manager"
                                optionFilterProp="children"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onSearch={handleSearch}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
                                <Option value="">----</Option>
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Reference"
                            name="reference"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Reference!",
                                },
                            ]}
                        >
                            <Input placeholder='Reference' />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input Description!",
                                },
                            ]}
                        >
                            <Editor
                                apiKey='t9w3mxyyc7148r0r70mz3vlfoljkm2a80yta7b9dncznkebx'
                                name='description'
                                initialValue="<p></p>"
                                init={{
                                    menubar: false,
                                    selector: 'textarea',
                                    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                }}
                            // onEditorChange={handleEditorChange}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24} style={{ padding: '12px', justifyContent: 'right' }}>
                    <Form.Item>
                        <Button className='create_new_btn' htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Row>
            </Form >
        </Space >
    )
}

