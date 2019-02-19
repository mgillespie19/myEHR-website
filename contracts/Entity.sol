/*
This contract represents both a Patient and a Provider.
First draft of MVP contracts

Louis Smidt, Feb 19 2019
myEHR

*/


pragma solidity >=0.5.0 <0.6.5;


contract Entity {

    address public thisEntityAddr;   //address of this entity
    bool public thisEntityEnabled; //is this entity active?

    address[] public administrators;   //does this address have rights to manage this account?
    bool[] public adminEnabled;

    address[] public relationships;  //array of Relationship Contracts? 

    //This modifier tests whether the message address is either the current entity or in the array of administrators
    modifier isAdmin() {
        bool isAdmin;

        if (thisEntityEnabled && msg.sender == thisEntityAddr) {
            isAdmin = true;
        }

        for (uint i = 0; i < administrators.length; i++) {
            if (msg.sender == administrators[i] && adminEnabled[i]) {
                isAdmin = true;
                break;
            }
        }
        if(!isAdmin){
            revert();
        }
        _;
    }


    //We'd use these events to record modifications made to an Entity's records
    event EntityAccessed(address sender);
    event EntityModified(address sender);

    constructor() public {
        thisEntityAddr = msg.sender;
        thisEntityEnabled = true;  //set thisEntityAddr to the address that creates the contract, enable it
    }


    function setEntityAddr(address _addr) public isAdmin {
        thisEntityAddr = _addr;
    }









}