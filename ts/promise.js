class P {
  constructor(executionFunction) {
    this.promiseChain = []
    this.handleError = () => {}
    this.resolve = this.resolve.bind(this)
    this.errMsg = ""
    this.reject = this.reject.bind(this)
    executionFunction(this.resolve, this.reject);
  }

  then(cb) {
    this.promiseChain.push(cb)
    return this
  }

  catch(handleError) {
    this.handleError = handleError
    console.log(this.handleError())
    return this
  }

  resolve(value) {
    try {
      this.promiseChain.forEach((nextFunction) => {
        nextFunction(value)
      })
    }
    catch (error) {
      this.promiseChain = []
      this.reject(error)
    }
  }

  reject(error) {
    this.handleError(error)
  }
}

let api = () => {
    const user = {
      username: 'treyhuffine',
      favoriteNumber: 42,
      profile: 'https://gitconnected.com/treyhuffine'
    };

  // Introduce a randomizer to simulate the
  // the probability of encountering an error
  let n = 1
  if (n > 2) {
    return {
      data: user,
      statusCode: 200,
    };
  }
  else {
    const error = {
      statusCode: 404,
      message: 'Could not find user',
      error: 'Not Found',
    };

    return error;
  }
}




const makeApiCall = () => {
  return new P((resolve, reject) => {
    // Use a timeout to simulate the network delay waiting for the response.
    // This is THE reason you use a promise. It waits for the API to respond
    // and after received, it executes code in the `then()` blocks in order.
    // If it executed is immediately, there would be no data.
    setTimeout(() => {
      const apiResponse = api();
      if (apiResponse.statusCode >= 400) {
        reject(apiResponse);
      } else {
        resolve(apiResponse.data);
      }
    }, 1000);
  });
};


makeApiCall().then(r => r).catch(c => console.log(c))
