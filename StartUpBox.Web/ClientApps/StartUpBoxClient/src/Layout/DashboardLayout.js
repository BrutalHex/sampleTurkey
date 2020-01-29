import React, { Component } from 'react';
import { Route } from 'react-router-dom';
 
import '../style/dashboard.scss';
import AppNavbar from '../components/appNavbar';



export class DashboardLayout extends Component {
    constructor(props) {
        super(props);


    }

    render() {


        return (


            <div className="container-fluid dashboard">
    <AppNavbar />
                       <div className="row children-area px-2 py-4 p-md-4 d-flex">
                    {this.props.children}
                </div>
              
            </div>


        )
    };




}
export const DashboardLayoutRoute =  (({ component: Component, ...rest }) => {
    return (<DashboardLayout>
        <Route {...rest} render={(matchProps) => (


            <Component {...matchProps} />

        )} /> </DashboardLayout>
    )

})

export default DashboardLayoutRoute;  