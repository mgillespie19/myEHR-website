import React, { Component } from 'react';
import './ProviderPortal.css';
import ProviderPortalNavbar from './ProviderPortalNavbar';
import ReactTable from "react-table";
import "react-table/react-table.css";

import { web3 } from 'react-web3';


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
            show_patient_modal: {
                display: 'none'
            }
            
        }
         
    }

    componentDidMount(){
        var username='u0pzrkrob7';
        var password='OSS_M1ZqX5ioPAE0itBI3K_iMM7QK3n4j0ChloT8PFU';
        var headers = new Headers();        
        headers.append('Authorization', 'Basic ' + btoa(username+ ':' + password));
        
        fetch('http://u0cvwu91l1-u0h89jef9w-connect.us0-aws.kaleido.io/replies', {headers: headers})
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error));


        // console.log("testing kaleido...");
        // var kaleido = "http://u0cvwu91l1-u0h89jef9w-connect.us0-aws.kaleido.io/replies"
        // fetch(kaleido, {
        //   method: 'GET',
        //   headers: {
        //       'username': 'u0pzrkrob7',
        //       'password': 'OSS_M1ZqX5ioPAE0itBI3K_iMM7QK3n4j0ChloT8PFU',
        //       'Content-Type': 'application/json',
        //   },
        //   // data: '{"where":{"uid":"12312312"}}'
    
        // })
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(error => console.log(error));






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

    viewInboundPatientRequest = (rowInfo) => {
            console.log("viewInboundPatientRequest");
            console.log(rowInfo.name + " clicked");
            console.log(rowInfo.status);
            console.log(rowInfo.date);

            this.viewPatientModal(rowInfo);
        
    }

    viewOutboundPatientRequest = (rowInfo) => {

        console.log("viewOutboundPatientRequest");
        console.log(rowInfo.name + " clicked");
        this.viewPatientModal(rowInfo);

    }


    closeViewPatientModal = () => {
        this.setState({ 
            show_patient_modal: {
                display: 'none'
            }
        });
        document.getElementById("view-patient-name").innerHTML = "";
        document.getElementById("view-patient-status").innerHTML = "";
        document.getElementById("view-patient-date").innerHTML = "";
    }
    closePatientModalListener = (event) => {
        if(event.target==document.getElementById("view-patient-modal")){
            this.closeViewPatientModal();
        }
    }
    viewPatientModal = (rowInfo) => {
        
        this.setState({ 
            show_patient_modal: {
                display: 'block'
            }
        });
        console.log("hello "+ rowInfo.name);
        document.getElementById("view-patient-name").innerHTML = rowInfo.name;
        document.getElementById("view-patient-status").innerHTML = rowInfo.status;
        document.getElementById("view-patient-date").innerHTML = rowInfo.date;
    
    
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
                                    getTdProps={(state, rowInfo) => {
                                        if(rowInfo !== undefined && rowInfo.row !== undefined){

                                        return {
                                          onClick: (e, handleOriginal) => {
                                            this.viewPatientModal(rowInfo.row);
                                     
                                            if (handleOriginal) {
                                              handleOriginal();
                                            }
                                          }
                                        };
                                    } else {
                                        return {
                                            onClick: (e, handleOriginal) => {
                                              if (handleOriginal) {
                                                handleOriginal();
                                              }
                                            }
                                          };

                                    }
                                      
                                    }}
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
                        <div className="card place-holder-card">
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
                                    getTdProps={(state, rowInfo) => {
                                        if(rowInfo !== undefined && rowInfo.row !== undefined){

                                        return {
                                          onClick: (e, handleOriginal) => {
                                            this.viewOutboundPatientRequest(rowInfo.row);
                                     
                                            if (handleOriginal) {
                                              handleOriginal();
                                            }
                                          }
                                        };
                                    } else {
                                        return {
                                            onClick: (e, handleOriginal) => {
                                              if (handleOriginal) {
                                                handleOriginal();
                                              }
                                            }
                                          };

                                    }
                                      
                                    }}
                                    
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
                
                <div id="view-patient-modal" className="modal" style={this.state.show_patient_modal} onClick={(event)=>this.closePatientModalListener(event)}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-header-button" onClick={this.closeViewPatientModal}>
                                <span className="close close-modal">&times;</span>
                                <span className="tooltip">Close</span>
                            </div>
                        </div>
                        <h2 id="view-patient-name">Patient Name</h2>
                        <hr/>
                        <div className="row modal-row">
                            <h3 id="view-patient-status">Request Status</h3>
                        </div>
                        <div className="row modal-row">
                            <h3 id="view-patient-date">Date</h3>
                        </div>
                    </div>
                </div>
            </div> 
        );
    }
}

export default ProviderPortal;