import React, { useContext } from 'react';
import { UserContext } from '../app-context/userContext';
import { DatePicker, Form, Input } from 'antd';

const EditProfile = () => {
    const { user, dispatch } = useContext(UserContext);

    const handleChangeName = (e) => {
        dispatch({ type: 'SET_NAME', payload: e.target.value });
    };

    const handleChangeLastName = (e) => {
        dispatch({ type: 'SET_LAST_NAME', payload: e.target.value });
    };

    const handleChangeBirthPlace = (e) => {
        dispatch({ type: 'SET_BIRTH_PLACE', payload: e.target.value });
    };

    const handleChangeBirthDate = (dateString) => {
        dispatch({ type: 'SET_BIRTH_DATE', payload: dateString });
    };

    return (
        <Form
            name="basic"
            layout='vertical'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600, margin: 16 }}
            initialValues={{        
                name: user.name,
                lastName: user.lastName,
                birthPlace: user.birthPlace,
                birthDate: user.birthDate
            }}
            autoComplete="off"
        >
            <Form.Item
                label="Name"
                name="name"
                onChange={handleChangeName}
                rules={[{ required: true, message: 'Please input your name!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Last Name"
                name="lastName"
                onChange={handleChangeLastName}
                rules={[{ required: true, message: 'Please input your last name!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Birth Place"
                name="birthPlace"
                onChange={handleChangeBirthPlace}
                rules={[{ required: true, message: 'Please input your birth place!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Birth Date"
            >
                <DatePicker name="birthDate" onChange={handleChangeBirthDate}/>
            </Form.Item>
        </Form>
    );
};

export default EditProfile;