pragma solidity ^0.6.10;

interface ERC20 {
  function totalSupply() external view returns (uint256);
  function balanceOf(address account) external view returns (uint256);
  function transfer(address recipient, uint256 amount) external returns (bool);
  function allowance(address owner, address spender) external view returns (uint256);
  function approve(address spender, uint256 value) external returns (bool);
  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
  event Transfer(address from, address to, uint256 value);
  event Approval(address owner, address spender, uint256 value);
}

contract DCAToken is ERC20 {
  //implement the interface here
  mapping (address => uint) balances;

  function mint(uint256 amount) external {
    require(msg.sender == _owner, "Only owner can mint tokens");
    balances[_owner] += amount;
    _totalSupply += amount;
  }
  
  function burn(uint256 amount) external {
    require(msg.sender == _owner, "Only owner can burn tokens");
    require(balances[_owner] >= amount, "You don't have enough tokens in your account to burn");
    balances[_owner] -= amount;
    _totalSupply -= amount;
  }

  //Required ERC20 functions
  function totalSupply() external view returns (uint256){
    //TODO
  }
  function balanceOf(address account) external view returns (uint256){
    //implement me!
  }
  function transfer(address recipient, uint256 amount) external returns (bool){
    //implement me!
  }
  function allowance(address owner, address spender) external view returns (uint256){
    //TODO
  }
  function approve(address spender, uint256 value) external returns (bool){
    //TODO
  }
  function transferFrom(address sender, address recipient, uint256 amount) external returns (bool){
    //TODO
  }
}