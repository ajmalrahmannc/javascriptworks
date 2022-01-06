class Bank{
    accounts = {
        1000: {
            accno: 1000, personName: "ram", balance: 5000, password: "userone",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
    
        },
        1001: {
            accno: 1001, personName: "ravi", balance: 7000, password: "usertwo",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1002: {
            accno: 1002, personName: "raju", balance: 8000, password: "userthree",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
        1003: {
            accno: 1003, personName: "vivek", balance: 15000, password: "userfour",
            transactions: {
                creditTransactions: [],
                debitTransactions: []
            }
        },
    
    }

    session={}

    validateAccountNumber(acno){
        return acno in this.accounts?true:false
    }

    authenticate(acno,password){
        if(this.validateAccountNumber(acno)){
            let pwd=this.accounts[acno].password
            if(password==pwd){
                console.log("access granted");
                this.session["user"]=acno
            }
            else{
                console.log("incorrect password");
            }
        }
        else{
            console.log("invalid account number");
        }
    }

    getBalance(acno){
        // if(this.validateAccountNumber(acno)){
        //     console.log(this.accounts[acno].balance); 
        // }
        // else{
        //     console.log("invalid account number");
        // }
        return this.accounts[acno].balance
    }

    balanceEnquiry(){
        if("user" in this.session){
            let loggeduser=this.session["user"]
            console.log(this.getBalance(loggeduser));
        }
        else{
            console.log("invalid session please be login");
        }
    }

    loginRequired(){
        return "user" in this.session?true:false
    }
    loggeduser(){
        if(this.loginRequired()){
            return this.session["user"]
        }
    }
    fundTransfer(to_acno,amount){
        if(this.loginRequired()){
            let loggeduser=this.session["user"]
            if(this.validateAccountNumber(to_acno)){
                let curBal=this.getBalance(loggeduser)
                if(amount>curBal){
                    console.log("insufficient balance");
                }
                else{
                    console.log("transation successfully completed");
                    let user_ac=this.session["user"]
                    let from_ac=this.accounts[user_ac]
                    from_ac.balance-=amount
                    let user_ac_bal=this.getBalance(user_ac)
                    this.accounts[user_ac].transactions.debitTransactions.push(amount)
                    console.log(`your account number ${user_ac} account has been debited with amount ${amount} available balance is ${user_ac_bal}`);


                    this.accounts[to_acno].balance+=amount
                    let to_ac_bal=this.getBalance(to_acno)
                    this.accounts[to_acno].transactions.creditTransactions.push(amount)
                    console.log(`your account number ${to_acno} account has been credited with amount ${amount} available balance is ${to_ac_bal}`);



                }
            }
            else{
                console.log("invalid accout number");
            }
        }
        else{
            console.log("invalid session please be login");
        }
    }

    getDebitTransaction(){
        let user=this.loggeduser()
        console.log(this.accounts[user].transactions.debitTransactions);
    }

    getCreditTransaction(){
        let user=this.loggeduser()
        console.log(this.accounts[user].transactions.creditTransactions);
    }

}
var bank=new Bank()
bank.authenticate(1001,"usertwo")
bank.balanceEnquiry()
bank.fundTransfer(1002,2000)
console.log("your debited transactions are : ",bank.getDebitTransaction());
console.log("your credited transations are : ",bank.getCreditTransaction());

