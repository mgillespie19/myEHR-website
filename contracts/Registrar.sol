/*
Draft of the Registrar contract which retains the mapping of addresses to patient contracts.

Louis Smidt, 2019
myEHR

*/

pragma solidity >=0.5.0 <= 0.6.5;

contract Registrar {

    enum class { Patient, Provider}

    struct Entity {
        string name;
        address entityContractAddr;
        string url;
    }

    mapping (address => Entity) entityInfo;
    mapping (address => string) nameAtAddress;
    mapping (address => address) entityAtContract;
    mapping (string => address) entityByName;


    //Registrar must be initialized with at least one Entity
    constructor(string memory _name, address contractAddr, string memory _url) public {
        entityInfo[msg.sender] = Entity(_name, contractAddr, _url);
        nameAtAddress[msg.sender] = _name;
        entityAtContract[contractAddr] = msg.sender;
    } 

    function setEntityContractAddr(address contractAddr) public {
        entityInfo[msg.sender].entityContractAddr = contractAddr;
        entityAtContract[contractAddr] = msg.sender;
    }

    function getEntitytByName(string memory name) public view returns (address) {
        return entityByName[name];
    }

    function getEntityName(address addr) public view returns (string memory) {
        return entityInfo[addr].name;
    }

    function getEntityContractAddr(address addr) public view returns (address) {
        return entityInfo[addr].entityContractAddr;
    }

    function getEntityHost(address addr) public view returns (string memory) {
        return entityInfo[addr].url;
    }

    function setAgentHost(string memory _url) public {
        entityInfo[msg.sender].url = _url;
    }

}