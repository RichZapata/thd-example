import React, { useContext } from 'react';
import { UserContext } from '../app-context/userContext';
import { Card,Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user } = useContext(UserContext);
    

    return (
        <Row className="posts-container" gutter={16}>
            <Card  title={`${user.name} ${user.lastName}`} style={{ margin: 16 }} extra={<Link to={`/profile/edit`}>Edit</Link>}>
                <Typography>
                    Birth date: {user.birthDate}
                </Typography>
                <Typography>
                    Birth place: {user.birthPlace}
                </Typography>
            </Card>
        </Row>
    );
};

export default UserProfile;