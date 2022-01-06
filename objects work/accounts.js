var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

//total number of accounts
//   console.log(accounts.length);

//print all account numbers whose ac-type is savings
//   accounts.filter(data=>data.ac_type=="savings").forEach(data=>console.log(data.acno))

//print balance of acno=1000

// accounts.filter(data=>data.acno==1000).forEach(data=>console.log(data.balance)) 
//                 or
// let bal=accounts.find(data=>data.acno==1000).balance
// console.log(bal);

// print all gpay transactions
// var trans=accounts.map(data=>data.transactions).flat().filter(trns=>trns.method=="g-pay")
// console.log(trans);

//print credt transations of 1002
// accounts.map(data=>data.transactions).flat().filter(trns=>trns.to==1002).forEach(t=>console.log(t))

//print highest balance account details
// var max_bal=accounts.sort((a1,a2)=>a2.balance-a1.balance)[0]
// console.log(max_bal);

//print transaction history of 1002

var debitTransaction = accounts.find(data=>data.acno==1002).transactions

var creditTransactions= accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)

var transactionHistory={"debit Transactions":debitTransaction,"credit Transactions":creditTransactions}
console.log(transactionHistory);