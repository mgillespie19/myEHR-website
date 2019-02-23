/*
Entity contract represents either a Patient or a Provider.
First draft of MVP contracts

Louis Smidt, Feb 19 2019
myEHR

*/


pragma solidity >=0.5.0 <0.6.5;


contract Entity {

    address public entity_addr;   //address of this entity
    bool public entity_enabled; //is this entity active?
    string url;                 //URL where offsite resources for this entity are located


    address[] public admins_addrs;   //does this address have rights to manage this account?
    bool[] public admins_enabled;

    address[] public relationships;  //array of Relationship Contracts? 


    // Modifiers

    modifier onlyAdmins() {
    /*
    Test whether sender is an administrator for this entity
    */
        bool isAdmin;

        if (entity_enabled && msg.sender == entity_addr) {
            isAdmin = true;
        }

        for (uint i = 0; i < admins_addrs.length; i++) {
            if (msg.sender == admins_addrs[i] && admins_enabled[i]) {
                isAdmin = true;
                break;
            }
        }
        if(!isAdmin){
            revert("Transaction reverted: Message Sender address is not an authorized Administrator for this Entity");
        }
        _;
    }


    // Events

    event EntityAccessed(address sender);
    event EntityModified(address sender);
    event BlockchainError(address sender);


    // Constructor
    constructor() public {
        entity_addr = msg.sender;
        entity_enabled = true;  //set entity_addr to the address that creates the contract, enable it
    }


    function setEntityAddr(address _addr) public onlyAdmins {
        entity_addr = _addr;
    }

    function toggleAdmin(address _addr) public onlyAdmins {
        for (uint i = 0; i < admins_addrs.length; i++) {
            if (admins_addrs[i] == _addr) {
                admins_enabled[i] = !admins_enabled[i];
                return;
            }
        }
        emit BlockchainError(msg.sender);
        revert("No Admin foumd at this address");
    }

    function addAdmin(address _addr) public onlyAdmins {
        admins_addrs.push(_addr);
        admins_enabled.push(true);
    }

    function getAdmins() public returns(address[] memory) {
    /*
    Test: auto generated getter vs user defined getter.
    */ 
        return admins_addrs;
    }


}