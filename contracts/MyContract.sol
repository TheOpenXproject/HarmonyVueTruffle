// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

contract MyContract {
  string public name;

  function setname(string memory _name) public returns(string memory){
    name = _name;
  }

  function getname() public view returns(string memory){
    return name;
  }
}
