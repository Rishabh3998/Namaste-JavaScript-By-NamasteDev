// EP-05 | Promise APIs + Interview Questions

// I - Promise.all()
// Suppose we want to make parallel API calls and get the results.
// Ex: We have 10 userIds and we want to get the data of all the users at once then to get this data
// we need to call GET api for all these users parallely.
// For this use case we can use Promise.all()

// Syntax:
// Promise.all([p1, p2, p3, ...]);  - p1, p1 ... are promises.
// Here parallel API calls will be made for these promises and we will get the results for them.

// Scenarios:

// 1. All the GET API's calls are successful
//    - Output from Promise.all() will be an array with the result of all the API calls.
//    - The time taken by Promise.all() will be decided by the GET API which took the most amount of time
//      to get successfully execute. If p1 - 3s, p2 - 2s, p3 - 5s. Promise.all() will take 5s to give result.
//    - Promise.all() will wait for all of them to finish.

// 2. Suppose one API call gets failed
//    - From p1 (3s), p2 (1s), p3 (2s) one gets rejected Promise.all() will throw error which will be returned
//      by the failed API. The Promise.all() will throw error instantly when any API gets failed. It will not
//      even wait for other promises to execute.
//    - What will happen to the other promises for which API call was made can we cancel it?
//          - We cannot cancel a promise in between so they will either resolve or reject but Promise.all()
//            will throw error when any one promise gets rejected and this throw will be instant.

// II - Promise.allSettled()
// Suppose 10 API calls are parallely running and we don;t care if some of them fails. we just want the data
// of the successful ones. So for this use case we can use allSettled().

// Syntax:
// Promise.allSettled([p1, p2, p3, ...]);  - p1, p1 ... are promises.
// Here parallel API calls will be made for these promises and we will get the results for them.

// This allSettled is like best of both world because it will only throw error if all the the passed promises
// will throw error.

// If all the passed promises ran successfully then this will work like Promise.all(), if any one of the is
// failed then still this will gives us the result of the other ones, and will not throw any error.

// Scenarios:

// 1. All the GET API's calls are successful
//    - Output: [val1, val2, val3]

// 2. Any one of them failed
//    - Still it will wait for all promises to get settled.
//    - Output: [val1, err2, val3]

// PS: Promise.all() is like fail fast. Even if one wait it will quickly gives us the result that one failed.
// Promise.allSettled() will wait for all the promises to get settled and give the results given by all of them.
// Suppose we are fetching five fields from five API calls to do some calculation then we have to use .all()
// because we need all the data for calculation part. But if we are showing 4 cards and they are independent
// from each other and one api call fails then we can show 3 as well it will not be an issue so here we can use
// .allSettled().

// III - Promise.race()
// This API use the concept of finish fast. Whichever promise will execute first this will return the result
// of it.

// Syntax:
// Promise.race([p1, p2, p3, ...]);  - p1, p1 ... are promises.
// Here parallel API calls will be made for these promises and we will get the results for them.

// Result:
// Promise.race([p1, p2, p3]) -> p1(2s) p2(1s) (success) p3(3s)
// Output: val2
// Promise.race([p1, p2, p3]) -> p1(2s) p2(1s) (fails) p3(3s)
// output: error2

// Promise.race() gives the value of the first settled (Success and fail both are included here) promise.

// IV - Promise.any()
// This API will wait for the first promise to get successful. It follows the concept of success seeking
// race. So whenever it gets successful only then it will return the result.

// Syntax:
// Promise.any([p1, p2, p3, ...]);  - p1, p1 ... are promises.
// Here parallel API calls will be made for these promises and we will get the results for them.

// Result:
// Promise.race([p1, p2, p3]) -> p1(2s) (fails) p2(1s) (fails) p3(3s) (success)
// Output: val3 - First successful promise

// What if everything fails?
// The returned result will be an aggregated error. An array of all the 3 errors will be returned.
