const accountId = 1456789
let accountEmail = "kayush614@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState;


// prefer not to use var 
// because of issue in block scope and functional scope

// accountId = 2   not allowed


accountEmail = "ayush@google.com"
accountPassword = "2345"
accountCity = "Bhiwadi"

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
