function testarBluetooth(){
    navigator.bluetooth.requestDevice(options).then(function(device) {
        console.log('Name: ' + device.name);
        // Do something with the device.
      })
      .catch(function(error) {
        console.log("Something went wrong. " + error);
      });
}