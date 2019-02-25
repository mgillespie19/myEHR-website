/*
This is a commented patient contract that we won't use, but is useful for learning the basics of Solidity. 

We would not use this because it stores all the data in ETH, which is a bad idea.

Louis Smidt, Feb 19 2019. 
myEHR

*/




pragma solidity  >=0.5.0 <0.6.5;    // Solidity is not backwards version compatible, so set the allowable compiler version range.

contract Patient {                  //'contract' keyword is similar to 'class' in other lang.

    enum Gender { Male, Female, Other} 

    struct Entity {                //group patient info in a struct -- design choice
        string name; 
        uint8 age;                  //8 bit unsigned integer for age
        Gender gender; 
    }

    uint patient_id;                //Patient's unique ID
    address public patient_addr;     //owner of this contact, 
    
    Entity patient;

    event PatientRecordAccessed(address sender);        //event listeners for the front end javascript code -- notify of events that happen in blockchain
    event PatientRecordModified(address sender);

    //modifiers are interfaces for functions, see below. This one set permissions to only allow "owner" (patient_addr) to perform the function.
    modifier onlyOwner() {
        require(msg.sender == patient_addr);
        _;                  // the _ returns control back to the function that implements the modifier. It does this by literally substiuting the code for the _;
    }

    modifier ageRange(uint8 age) {
        require(age > 0 & age < 100);
        _;
    }

    function Patient() public {                             //This is the constructor, called when the contract is initiated. 
        patient_addr = msg.sender;                          //assign the address of the patient to the ethereum address that creates this contract
    }

    function getName() public returns (bytes32){            //Anyone can get the name of the patient.
        emit PatientRecordAccessed(msg.sender);                  //trigger the event so that listeners can find it
        return patient.name;
    }

    function setName(bytes32 name) public onlyOwner {       //implements onlyOwner modifier. 
        PatientRecordAccessed(msg.sender);
        patient.name = name;
    }

    function getAge() public returns (uint8){
        PatientRecordAccessed(msg.sender);
        return patient.age;
    }

    function setAge(uint8 age) public onlyOwner ageRange { //multiple modifiers are possible, they execute in order from left to right. 
        PatientRecordModified(msg.sender);
        patient.age = age;
    }





}