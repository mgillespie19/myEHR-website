import React, { Component } from 'react';
import './componets.css';
import ProviderPortalNavbar from './navbar.jsx';
import ReactTable from "react-table";
import "react-table/react-table.css";


var transaction_count_flag = false;
var baseUrl = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2";
var patientSearchString = "/Patient?given=Jason&family=Argonaut";

function proccessPatientData(xml_data){
    console.log(xml_data);
    // var parser = require('xml2json');
 
    console.log(xml_data)
    
    // xml to json
    //var json_data = parser.toJson(xml_data);
    var json_data = xml_data;
    //console.log(json_data);
    return json_data;
}

class ProviderPortal extends Component {
    constructor(){
        super();
        this.state = {
            providerName: "Provider Clinic",
            approved_count: 0,
            pending_count: 0,
            denied_count: 0,
            data: null,
            
        }
         
    }

    componentDidMount(){
        var test = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB";
        fetch(test)
        // fetch(baseUrl + patientSearchString)
        .then(response => response.text())
        .then(response => proccessPatientData(response))
        // .then(data => this.setState({ data: data }))
        .catch(error => console.log(error));




        var transaction_count_flag = false;

        
       this.setState({
            //retrieve provider name
            providerName: "Provider",
    
       });
       console.log("Mounted");

    }
  

    componentWillUpdate(){
        transaction_count_flag = true;

    //     this.setState({
    //         approved_count: 0,
    //         pending_count: 0,
    //         denied_count: 0,
    
    //    });
        
    }

    componentWillUnmount(){
    
     
        console.log("unmount");
        
    }
 

    render() {

        const request_data = [{
            name: 'Roy Agasthyan',
            status: 'Approved'
          },{
            name: 'Sam Thomason',
            status: 'Pending'
          },{
            name: 'Michael Jackson',
            status: 'Pending'
          },{
            name: 'Samuel Roy',
            status: 'Approved'
          },{
            name: 'Rima Soy',
            status: 'Denied'
          },{
            name: 'Suzi Eliamma',
            status: 'Pending'
          },
        
        
        ];

        const request_columns = [{
            Header: 'Patient Name',
            accessor: 'name'
          },{
            Header: 'Request Status',
            accessor: 'status'
          }];




        return(
            <div className="provider-portal">
                <ProviderPortalNavbar></ProviderPortalNavbar>
                <div className="dashboard">
                    <div className="provider-header">
                        <h1>Welcome {this.state.providerName}</h1>
                    </div>
                    <div className="provider-content provider-grid">
                        <div className="card account-total-card">
                            <h2>Account Transactions</h2>
                            <div className="line-break"></div>
                            <div className="transaction-count-table">
                                <div className="transaction-label">
                                    <ul className="approved">
                                        <li>Approved:</li>
                                    </ul>
                                    <ul className="pending">
                                        <li>Pending:</li>
                                    </ul>
                                    <ul className="denied">
                                        <li>Denied:</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <li>{this.state.approved_count}</li>
                                    </ul>
                                    <ul>
                                        <li>{this.state.pending_count}</li>
                                    </ul>
                                    <ul>
                                        <li>{this.state.denied_count}</li>
                                    </ul>

                                </div>

                            </div>



                            
              

                            
                        </div>
                        <div className="card transaction-card">
                            <div>
                                <ReactTable
                                    data={request_data}
                                    columns={request_columns}
                                    defaultPageSize = {10}
                                    pageSizeOptions = {[10, 25, 50]}
                                    className = {'-highlight'}
                                    resizable = {false}
                                    getTrProps={(state, rowInfo) => {
                                        if(rowInfo !== undefined && rowInfo.row !== undefined){
                                            var status_color = "white";
                                            switch(rowInfo.row.status){
                                                case "Approved":
                                                    if(!transaction_count_flag){
                                                        this.state.approved_count++;
                                                    }
                                                    status_color = "rgb(210, 245, 200)";
                                                    break;
                                                case "Denied":
                                                    if(!transaction_count_flag){
                                                        this.state.denied_count++;
                                                    }
                                                    status_color = "rgb(255, 210, 210)";
                                                    break;
                                                case "Pending":
                                                    if(!transaction_count_flag){
                                                        this.state.pending_count++;
                                                    }
                                                    status_color = "rgb(255, 250, 210)";
                                                    break;
                                                default:
                                                status_color = "white";

                                            }
                                            return {
                                                style: {
                                                  background: status_color
                                                }
                                              };
                                        } else {
                                            return {
                                                style: {
                                                  background: "white"
                                                }
                                              };
                                        }
                                        
                                      }}
                                />
                            </div>

                        </div>


                    </div>
                </div>
            </div> 
        );
    }
}

export default ProviderPortal;