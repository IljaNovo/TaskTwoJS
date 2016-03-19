var transferService = (function() {

    function publicRegister(person, accountName, balance) {
        if (balance < 0.0) {
            throw "Negative balance";
        }
        var account = new Account(accountName);
        account.balance = balance;
        account.person = person;
        account.isActivated = true;
        account.setLastOperation("register account");
        person.addAccount(account);
        return account;
    }

    function publicTransfer(accountFrom, accountTo, sum) {
        if (accountFrom === undefined || accountTo === undefined) {
            throw "accountNotFound";
        }
        if (accountFrom.balance < sum) {
            throw "notEnoughMoney";
        }
        if (accountFrom.isActivated === false || accountTo === false) {
            throw "accountNotActivity";
        }
        accountFrom.balance -= sum;
        accountTo.balance += sum;
        accountFrom.isActivated = "transfer";
        accountTo.isActivated = "receipt";
        
        privateShowLogTransfer(accountFrom, accountTo, sum);
    }
    
    function privateShowLogTransfer(accountFrom, accountTo, sum) {
        var data = new Date();
        
        console.log("Аккаунт, с которого производился перевод: " + accountFrom.name + "\n");
        console.log("Аккаунт, куда производился перевод: " + accountTo.name + "\n");
        console.log("Сумма перевода: " + sum + "\n");
        console.log("Время операции: " + "\nГод: " + data.getFullYear() +
                   ", месяц: " +  (data.getMonth() + 1) + ", день: " + data.getDate());
    }    
    
    function publicGetPersonAccounts(person) {
        var personAccounts = person.getAccounts();

        if (personAccounts.length == 0) {
            console.log("Счетов нет");
        } else {
            console.log("Имя пользователя: " + person.name);
            
            for (var i = 0; i < personAccounts.length; ++i) {
                console.log("Имя аккаунта: " + personAccounts[i].name);
            }
        }
    }
    
    return {
        register: publicRegister,
        transfer: publicTransfer,
        getPersonAccounts: publicGetPersonAccounts
    };

})();