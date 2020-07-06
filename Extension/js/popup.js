
document.addEventListener('DOMContentLoaded', function() {
  if (typeof web3 !== 'undefined') {
    console.log('Web3 Detected! ' + web3.currentProvider.constructor.name)
    window.web3 = new Web3(web3.currentProvider);
} else {
    console.log('No Web3 Detected... using HTTP Provider')
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
}
function getBalance() {
  var address, wei, balance
  address = document.getElementById("address").value
  try {
      web3.eth.getBalance(address, function (error, wei) {
          if (!error) {
              var balance = web3.fromWei(wei, 'ether');
              document.getElementById("output").innerHTML = balance + " ETH";
          }
      });
  } catch (err) {
      document.getElementById("output").innerHTML = err;
  }
}


  //------------------Button Eventlisteners----------------------------
  //-----------------------------------------------------------------------------
  //document.getElementById("msg").innerHTML = tenure + "\nPublickey";
  // var c = document.getElementById('login');
  // c.addEventListener('click', function() {
  //   $(".demo-card-event").hide();// prompt("Please enter preferred tenure in years", "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqGKukO1De7zhZj6+H0qtjTkVxwTCpvKe4eCZ0FPqri0cb2JZfXJ/DgYSF6vUpwmJG8wVQZKjeGcjDOL5UlsuusFncCzWBQ7RKNUSesmQRMSGkVb13j+skZ6UtW+5u09lHNsj6tQ51s1SPrCBkedbNf0Tp0GbMJDyR4e9T04ZZwIDAQAB");
  // });

  var d = document.getElementById('balance');
  d.addEventListener('click', function() {
    getBalance()
  });
});
