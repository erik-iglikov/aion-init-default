var HelloWorld = artifacts.require("./HelloWorld.sol");

contract('HelloWorld', function(accounts) {
	it("should init as 71. (also testing getter)", function(){
		return HelloWorld.deployed().then(function(instance){
			return instance.get.call();
		}).then(function(value) {
		assert.equal(value.valueOf(), 71, "not inited with 71.");
		});
	});
	it("should change val to 87. (testing setter)", function(){
		var contract;
		return HelloWorld.deployed().then(function(instance){
			contract = instance;
			return contract.set(87, {from: accounts[0]});
		}).then(function() {
			return contract.get.call();
		}).then(function(value) {
			assert.equal(value.valueOf(), 87, "not changed to 87.");
		});
	});
});
