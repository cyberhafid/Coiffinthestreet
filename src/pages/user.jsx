import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';



const cars = [
  {
    vin : "Plus pres de soi",
    year: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum." ,
    brand: "active",
    color: "active"
  }, 
  {
    vin : "Plus pres de soi",
    year: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum." ,
    brand: "active",
    color: "active"
  }, 
  {
    vin : "Plus pres de soi",
    year: "Lorem ipsum du Lorem ipsum du Lorem ipsum Lorem ipsum." ,
    brand: "active",
    color: "active"
  }
]
export default class Ficheuser extends Component {


    constructor() {
        super();
        this.state = {
            cars: []
        };
        
    }

    componentDidMount() {
       
    }

    render() {
        const columns = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        const dynamicColumns = columns.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return (
            <div>
          

                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>DataTable</h1>
                        <p>DataTable displays data in tabular format.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <h3>Basic</h3>
                    <DataTable value={this.state.cars}>
                        <Column field="vin" header="Vin" />
                        <Column field="year" header="Year" />
                        <Column field="brand" header="Brand" />
                        <Column field="color" header="Color" />
                    </DataTable>

                

                </div>

               
            </div>
        );
    }
}






