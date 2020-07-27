
//10015
self.repairCar = ko.observableArray([]);
self.showRepairTable = ko.observable(false);
self.repairSubTotal = ko.computed(function () {
    var total = 0;
    for (var i = 0; i < self.repairCar().length; i++) {
        if (self.repairCar()[i].isCheck()) {
            total = new Decimal(total).add(new Decimal(self.repairCar()[i].price()).mul(new Decimal(self.repairCar()[i].buyNum()))).toNumber()
        }
    }
    return total;
});
self.repairCheck = ko.observable(false);
//全选和反选
self.repairCheck.subscribe(function (newValue) {
    if (self.repairCar().length) {
        for (var i = 0; i < self.repairCar().length; i++) {
            self.repairCar()[i].isCheck(newValue);
        }
    }
});
self.repairBudget = ko.observable(0);
self.availableRepairBudget = ko.computed(function () {
    var repairBudget = self.repairBudget();
    var repairSubTotal = self.repairSubTotal();
    var value = new Decimal(repairBudget).sub(new Decimal(repairSubTotal)).toNumber();
    return value;
});