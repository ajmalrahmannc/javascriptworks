var users={
    1000:{accno:1000,personName:"ram",balance:5000,password:"userone",transactions:[]},
    1001:{accno:1001,personName:"ravi",balance:7000,password:"usertwo",transactions:[]},
    1002:{accno:1002,personName:"raju",balance:8000,password:"userthree",transactions:[]},
    1003:{accno:1003,personName:"vivek",balance:15000,password:"userfour",transactions:[]},
}

//print dtails of 1000
// console.log(users[1000]);

//print balance of 1002
// console.log(users[1002].balance);

//1005 is exist or not
// console.log(1005 in users);

// function authentication(ac_no,password){
//     if(ac_no in users){
//         let pwd=users[ac_no].password
//         if(pwd==password){
//             // console.log("access granted");
//             return 1
//         }
//         else{
//             // console.log("invalid password");
//             return -1
//         }
//     }
//     else{
//         // console.log("invalid account number");
//         return 0
//     }
// }

// console.log(authentication(1000,"userone"));

function validateAccountNumber(ac_no){
    return ac_no in users?"true":"false"
}
function fundTransfer(from_acno,to_acno,amount){
    if (validateAccountNumber(from_acno) && validateAccountNumber(to_acno)){
        let avl_bal=users[from_acno].balance
        if(amount>avl_bal){
            console.log("insufficient balance");
        }
        else{
            users[from_acno].balance-=amount
            let from_acno_bal=balanceEnquiry(from_acno)
            console.log(`your account number ${from_acno} account has been debited with amount ${amount} available balance is ${from_acno_bal}`);
            users[to_acno].balance+=amount
            let to_acno_bal=balanceEnquiry(to_acno)
            console.log(`your account number ${to_acno} account has been credited with amount ${amount} available balance is ${to_acno_bal}`);

        }
    }
    else{
        console.log("invalid account numbers");
    }
}
console.log(fundTransfer(1000,1001,3000));



function balanceEnquiry(ac_no){
    if(ac_no in users){
        return users[ac_no].balance
    }
    else{
        console.log("invalid account number");
    }
}
// console.log(balanceEnquiry(1000));