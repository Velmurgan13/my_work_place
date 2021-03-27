class Bank{
 
    constructor(code, address){
        this.code = code
        this.address = address
    }
    
    getAccounts(){
        return []
    }
}

class Account{
    constructor(number, balance){
        this.number = number
        this.balance = balance || 0
    }

    deposit(amount){
        this.balance += amount
        return this.balance
    }

    withdraw(amount){
        if(this.balnce < amount){
            console.log("insufficient Balance")
            return false
        }

        this.balance -= amount
        return this.balance

    }
}

class Customer{
    constructor(name, address, dob, card_number, pin){
        this.name = name
        this.address = address
        this.dob = dob
        this.card_number = card_number
        this.pin = pin 
    }

    verifyPassword(pin){
        if(this.pin === pin){
            console.log("Verified Pin Successfull")
            return true
        } else {
            console.log("Incorrect Pin")
            return false
        }    
    }

}

class ATM extends Bank{

    constructor(location, managedBy){
        this.location = location
        this.managedBy = managedBy
    }
    withdraw(){
        console.log("money is withdraw")
    }

    deposit(){
        console.log("money is deposited")
    }

    checkBalance(){
        console.log(" your account balance is $1234")
    }
}

class ATMTransction extends Account{
    constructor(transctionId, date, type, amount, postBalance){
        this.transctionId = transctionId
        this.date = date
        this.type = type
        this.amount = amount
        this.postBalance = postBalance
    }

    modifies(){
        console.log("your account is updated")
    }
}