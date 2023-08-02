// Handle and propagate errors in a Promise chain
function asyncFunction1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate an error
        reject(new Error('Error occurred in asyncFunction1.'));
      }, 1000);
    });
  }
  
  function asyncFunction2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate another error
        reject(new Error('Error occurred in asyncFunction2.'));
      }, 1000);
    });
  }
  
  asyncFunction1()
    .then(result => {
      console.log(result);
      return asyncFunction2();
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error.message); // Error occurred in asyncFunction1.
    });
  