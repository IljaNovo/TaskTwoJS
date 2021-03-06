function Person(name, birthDateStr) {
    validData(birthDateStr);
    this._name = name;
    this._birthData = new Date();
    parseBirthDate(this._birthData, birthDateStr);
    this._accounts = new Array();
}

Object.defineProperty(Person.prototype, "name", {
    get: function() {
        return this._name;
    }
})

Person.prototype.getData = function() {
    return this._birthData;
}

Object.defineProperty(Person.prototype, "birthDate", {
    get: function() {
        console.log("Год:" + this._birthData.getFullYear() +
            " Месяц: " + (this._birthData.getMonth() + 1) +
            " День: " + this._birthData.getDate());
    }
})

Person.prototype.addAccount = function(account) {
    this._accounts.push(account);
}

Person.prototype.getAccounts = function() {
    return this._accounts;
}

function parseBirthDate(birthDate, dateStr) {
    var dayMonthYear = dateStr.split("/");
    birthDate.setFullYear(Number(dayMonthYear[0]));
    birthDate.setMonth(Number(dayMonthYear[1]) - 1);
    birthDate.setDate(Number(dayMonthYear[2]));
}

function validData(dateStr) {
    var dayMonthYear = dateStr.split("/");
    if (dayMonthYear[0] < 1 || dayMonthYear[1] < 1 ||
       dayMonthYear[2] < 1) {
        throw "invalid Data";
    }
}