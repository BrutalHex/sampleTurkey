import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/common.scss';

const SharedLayout = ({ children }) => (
    <div className="row">
            {children}
    </div>
);

export default SharedLayout;