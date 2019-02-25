/*
Entity contract represents either a Patient or a Provider.
First draft of MVP contracts

Louis Smidt, Feb 19 2019
myEHR

*/


pragma solidity >=0.5.0 <0.6.5;

contract Entity {
    address public addr;
    bool public enabled;
    uint256 UUID;

    constructor(uint256 _uuid) public {
        addr = msg.sender; 
        enabled = true;
        UUID = _uuid;
    }

    // Events

    event EntityAccessed(address sender);
    event EntityModified(address sender);
    event BlockchainError(address sender);


    // Modifiers

    modifier onlyAdmins() {
    /*
    Test whether sender is an administrator for this entity
    */
        bool isAdmin = false;

        if (enabled && msg.sender == addr) { isAdmin = true; }
        if(!isAdmin){ revert("Transaction Reverted: Message Sender address is not the owner of this entity."); }
        _;
    }


    // Functions

    function setEntityAddr(address _addr) public onlyAdmins{
        addr = _addr;
    }

    function toggleEnabled() public onlyAdmins{

    }

}


contract Patient is Entity {

    //Identifying information (later on we wouldn't encode this on the blockchain)
    string first_name;
    string last_name;
    uint256 DOB;

    //admins have rights to manage patient records legally on their behalf
    address[] internal admins_addrs;  
    bool[] internal admins_enabled;

    //viewers have rights to see a patient's records
    address[] internal viewers;

    struct Record {
        string ID;
        uint8 record_class;          
    }

    address[] public records; 
    mapping(address => Record) recordInfo;

    // Modifiers

    modifier onlyAdmins() {
    /*
    Override. Test whether sender is an administrator for this Patient.
    */
        bool isAdmin;

        if (enabled && msg.sender == addr) { isAdmin = true; }

        for (uint i = 0; i < admins_addrs.length; i++) {
            if (msg.sender == admins_addrs[i]) {
                isAdmin = true;
                break;
            }
        }
        if(!isAdmin){ revert("Transaction Reverted: Message Sender address is not an authorized Administrator for this Patient's records"); }
        _;
    }


    function toggleActiveAdmin(address _addr) public onlyAdmins {
    /*
    Toggle the "active" property of an andministrator to this entity (give or revoke access)
    */
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
    /*
    Add an Admin
    */
        admins_addrs.push(_addr);
        admins_enabled.push(true);
    }

    function getAdmins() public view returns(address[] memory) {
    /*
    Test: auto generated getter vs user defined getter.
    */ 
        return admins_addrs;
    }

    function getMedicalRecords() public view returns(address[] memory) {
    /*
    Return array of addresses of all MedicalRecord(s) this Patient has 
    */
        return records;
    }

    function linkRecord(address _new_record_address, string memory _ID) public onlyAdmins{
    /*
    Link a new record to this Patient.
    */
        records.push(_new_record_address);
        recordInfo[_new_record_address].ID = _ID;
    }

    function removeRecord(address _addr) public  onlyAdmins{
        
    }

    function 

}


/*
Defines a care provider
*/

contract Provider is Entity{

    string provider_name;



    struct Patient {
        uint256 patient_id;
    }

    address[] public patients;
    mapping(address => Patient) patientsInfo;

    function getPatientAddr(uint256 _id) public view returns(address) {
    /*
    Look up Patient contract by ID
    */
        for (uint i = 0; i < patients.length; i++){
            if (patientsInfo[patients[i]].patient_id == _id) {
                return patients[i]; 
            }
        }
    }

    function getAllPatients() public view returns(address[] memory) {
    /*
    Return array of addresses of all Patient contracts in this Provider's care. 
    */
        return patients;
    }
    

}



/*
Defines a medical record. 

Louis Smidt, 2019
myEHR
*/

contract MedicalRecord {
    string public ID;
    address owner;
    address author;
    
    address[] permitted;
    bytes32[] hashes;

    string pointer;
    uint256 version;

}