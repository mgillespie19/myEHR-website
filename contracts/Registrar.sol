/*



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

    constructor(string _name, address _addr, string _url) public {
        entityInfo[msg.sender] = Entity(_name, _addr, _url);
        nameAtAddress[msg.sender] = _name;
        entityAtContract[_addr] = msg.sender;
        
    } 



}