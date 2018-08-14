pragma solidity ^0.4.14;

contract HelloWorld {
	uint a = 71;

	function set(uint b) public {
		a = b;
	}

	function get() constant public returns (uint){
		return a;
	}

	// function grow(uint b) public {
	// 	a = Utility.add(a, b);
	// }

	// function shrink(uint b) piblic {
	// 	a = Utility.subtract(a, b);
	// }

}