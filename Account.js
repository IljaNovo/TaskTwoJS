function Account (accountName) {
    this._accountName = accountName;
    this._person = undefined;
    this._lastOperation = "no operations";
    this._balance = 0;
    this._isActivated = false;
}

Object.defineProperty(Account.prototype, 'isActivated', {
    get: function() {
        return this._isActivated;
    },
    set: function(isActivated) {
        this._isActivated = isActivated;
    }
})

Object.defineProperty(Account.prototype, 'name', {
    get: function() {
        return this._accountName;
    }
})

Account.prototype.getLastOperation = function() {
    return this._lastOperation;
}

Account.prototype.setLastOperation = function(operation) {
    this._lastOperation = operation;
}

Object.defineProperty(Account.prototype, 'balance', {
    get: function() {
        return this._balance;
    },
    set: function(balance) {
        if (balance <= 0) {
            throw "Negative balance";
        }
        this._balance = balance;
    }
})

Object.defineProperty(Account.prototype, 'person', {
    get: function() {
        return this._person;
    },
    set: function(person) {
        this._person = person;
    }
})