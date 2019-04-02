import React, { Component } from 'react';
import './ProviderPortal.css';
import ProviderPortalNavbar from './ProviderPortalNavbar';
import ReactTable from "react-table";
import "react-table/react-table.css";

//import fire from '../../../../config/fire';

var transaction_count_flag = false;
var baseUrl = "https://open-ic.epic.com/FHIR/api/FHIR/DSTU2";
var patientSearchString = "/Patient?given=Jason&family=Argonaut";

function proccessPatientData(xml_data){
    console.log(xml_data);
    var parser = require('xml2json');
 
    console.log(xml_data)
    
    // xml to json
    var json_data = parser.toJson(xml_data);
    console.log(json_data);
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


    outboundRequest = (event) => {
        event.preventDefault();

        console.log("Outbound request button clicked");
    }

    importPatientList = (event) => {
        event.preventDefault();

        console.log("Import patients button clicked");
    }
 

    render() {

        const inbound_request_data = [{
            name: 'Roy Agasthyan',
            status: 'Approved',
            date: '2019-03-08'
          },{
            name: 'Sam Thomason',
            status: 'Pending',
            date: '2018-04-19'
          },{
            name: 'Michael Jackson',
            status: 'Pending',
            date: '2018-06-04'
          },{
            name: 'Samuel Roy',
            status: 'Approved',
            date: '2019-02-11'
          },{
            name: 'Rima Soy',
            status: 'Denied',
            date: '2018-09-23'
          },{
            name: 'Suzi Eliamma',
            status: 'Pending',
            date: '2019-01-17'
          },
        
        
        ];
        const outbound_request_data = [{
            name: 'James Bond',
            status: 'Pending',
            date: '2019-10-18'
          },{
            name: 'Sam Thomason',
            status: 'Pending',
            date: '2018-11-19'
          },{
            name: 'Michael Jackson',
            status: 'Pending',
            date: '2018-06-14'
          },{
            name: 'Samuel Roy',
            status: 'Pending',
            date: '2019-01-21'
          },{
            name: 'Rima Soy',
            status: 'Denied',
            date: '2018-09-03'
          },{
            name: 'Suzi Eliamma',
            status: 'Approved',
            date: '2018-01-17'
          },
          {
            name: 'Mo Farah',
            status: 'Approved',
            date: '2018-06-19'
          },
          {
            name: 'Smith Jones',
            status: 'Approved',
            date: '2018-04-07'
          },
        
        
        ];


        const request_columns = [{
            Header: 'Patient Name',
            accessor: 'name'
          },{
            Header: 'Request Status',
            accessor: 'status'
          },{
            Header: 'Date',
            accessor: 'date'
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
                                        <li>Approved: <strong>{this.state.approved_count}</strong></li>
                                    </ul>
                                    <ul className="pending">
                                        <li>Pending:  <strong>{this.state.pending_count}</strong></li>
                                    </ul>
                                    <ul className="denied">
                                        <li>Denied:  <strong>{this.state.denied_count}</strong></li>
                                    </ul>
                                </div>

                            </div>
                        
                            <div className="button" onClick={this.outboundRequest}>New Outbound Request</div>
                            <div className="button" onClick={this.importPatientList}>Import List of Patients</div>
                        </div>

                        <div className="card transaction-card" id="inbound-request-list">
                            <h2>Inbound</h2>
                            <div>
                                <ReactTable
                                    data={inbound_request_data}
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
                        <div className="card transaction-card" id="outbound-request-list">
                            <h2>Outbound</h2>
                            <div>
                                <ReactTable
                                    data={outbound_request_data}
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