/*
Registrar contract enforces mutual trust and retains lookup table of patient addresses

Louis Smidt, 2019
myEHR

*/

pragma solidity >=0.5.0 <= 0.6.5;

contract Registrar {

    enum Class { Patient, Provider}

    struct Entity {
        string name;                   //this is an ID
        address entityContractAddr;   //points to an Entity.sol contract address for a patient
    }

    mapping (address => Entity) entityInfo;         //
    mapping (address => address) entityAtContract;  //
    mapping (string => address) entityByName;


    constructor(string memory _name, address _contract_address) public {
    /*
    _name --> ID of entity we are registering
    _contract_address --> address of Entity contract defining registree 
    _url --> offsite url where info located
    */
        entityInfo[msg.sender] = Entity(_name, _contract_address);           //        
        entityAtContract[_contract_address] = msg.sender;
        entityByName[_name] = msg.sender;
    } 


    //Setters

    function setEntityContractAddr(address _contract_address) public {
        entityInfo[msg.sender].entityContractAddr = _contract_address;
        entityAtContract[_contract_address] = msg.sender;
    }


    //Getters

    function getEntitytByName(string memory _name) public view returns (address) {
        return entityByName[_name];
    }

    function getEntityName(address _addr) public view returns (string memory) {
        return entityInfo[_addr].name;
    }

    function getEntityContractAddr(address _addr) public view returns (address) {
        return entityInfo[_addr].entityContractAddr;
    }
}