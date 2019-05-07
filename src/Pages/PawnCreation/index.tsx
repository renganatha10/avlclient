import React from 'react';
import { Form, Select, Button, Upload, Icon, Row, Col, Input } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

const { Option } = Select;

class PawnCreation extends React.Component<FormComponentProps> {
  public handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        //eslint-disable-next-line
        console.log('Received values of form: ', values);
      }
    });
  };

  public normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  public render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item required label="Pawn Entry Number">
          <Input placeholder="Pawn Entry Number" />
        </Form.Item>
        <Form.Item required label="Jewel Item Name">
          <Input placeholder="Jewel Item Name" />
        </Form.Item>
        <Form.Item required label="Jewel Item Cost">
          <Input type={'number'} placeholder="Jewel Item Cost" />
        </Form.Item>
        <Form.Item required label="Jewel Item Weight">
          <Input type={'number'} placeholder="Jewel Item Weight" />
        </Form.Item>
        <Form.Item label="Jewel Keeper">
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please Select the User' }],
          })(
            <Select mode="tags" placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item style={{ display: 'none' }} label="Checkbox.Group">
          <Row>
            <Col span={8} />
          </Row>
        </Form.Item>
        <Form.Item label="Jewel Image">
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger multiple={false} name="filee" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">
                  Click to Upload the Jewel Image
                </p>
              </Upload.Dragger>
            )}
          </div>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 0 }}>
          <Button type="primary" style={{ width: '100%' }} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const PawnCreationWrapper = Form.create({ name: 'pawn_creation' })(
  PawnCreation
);

export default PawnCreationWrapper;
