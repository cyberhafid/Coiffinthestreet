import React, {Component} from 'react';
import {Menu} from 'primereact/menu';


  export default class MenuDemo extends React.Component {
 constructor() {
        super();
        this.state = {
            items: [
                {
                    label: 'GENERAL',
                    items: [{label: 'Home', icon: 'pi pi-fw pi-home', url: './api'},
                    {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
                    {label: 'Documentation', icon: 'pi pi-fw pi-file'}]
                }, 


                {
                    label: 'Partenaire',
                    items: [
                        {label:'Users',icon:'pi pi-fw pi-user'},
                        {label:'Search',icon:'pi pi-fw pi-users'},
                        {label:'Filter',icon:'pi pi-fw pi-filter'}]
                },





                {
                    label: 'Api',
                    items: [{label: 'Documentation', icon: 'pi pi-fw pi-file'}
                      ]
                },
                {
                    label: 'Account',
                    items: [{label: 'Configuration', icon: 'pi pi-fw pi-cog', },
                            {label: 'Sign Out', icon: 'pi pi-fw pi-power-off'} ]
                }
            ]
        };
    }

    render() {
        return (

            
     

                <div className="layout-menu">
                
                    <Menu model={this.state.items}/>

                    <h3>Popup</h3>
                    <Menu model={this.state.items} popup={true} ref={el => this.menu = el}/>
                    
                </div>

                
       
        )
    }
}