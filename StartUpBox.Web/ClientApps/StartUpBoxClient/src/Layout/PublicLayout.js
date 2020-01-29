import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../style/public.scss';

import BreadCrumb from '../components/breadCrumb';
import AppNavbar from '../components/appNavbar';

export class PublicLayout extends Component {
    constructor(props) {
        super(props);


    }

    render() {


        return (


            <div className="container-fluid dashboard">

                <AppNavbar />
                <BreadCrumb />
                <div className="row children-area px-2 py-4 p-md-4 d-flex">
                    {this.props.children}
                </div>
            
            </div>


        )
    };




}
export const PublicLayoutRoute = ({ component: Component, ...rest }) => {
    return (<PublicLayout>
        <Route {...rest} render={(matchProps) => (


            <Component {...matchProps} />

        )} /> </PublicLayout>
    )

}

export default PublicLayoutRoute;  