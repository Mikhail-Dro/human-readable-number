const arrUnits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const arrTens10_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const arrTens20_90 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

let units;
let tens;
let hundreds;
let ans;

const toReadable = (num) => {
    num = num.toString()
    if (num == 0) {
        return('zero');
    //единицы:
    } else if (num.length === 1) {
        ans = arrUnits[num[num.length - 1]];
        return(ans);
    //десятки 10-19:
    } else if (num.length == 2 && num[num.length - 2] == 1) {
        ans = arrTens10_19[num[num.length - 1]];
        return(ans);
    //десятки 20-90:
    } else if (num.length == 2 && num[num.length - 2] > 1 && num[num.length - 1] == 0) {
        tens = arrTens20_90[num[num.length - 2]];
        ans = tens;
        return(ans);
    //десятки 21-99:
    } else if (num.length == 2 && num[num.length - 2] > 1 && num[num.length - 1] > 0) {
        tens = arrTens20_90[num[num.length - 2]];
        units = arrUnits[num[num.length - 1]];
        ans = `${tens} ${units}`;
        return(ans);
    //сотни _00:
    } else if (num.length == 3 && num[num.length - 1] == 0 && num[num.length - 2] == 0) {
        hundreds = `${arrUnits[num[0]]} ${'hundred'}`;
        ans = hundreds;
        return(ans);
    //сотни _0_:
    } else if (num.length == 3 && num[num.length - 1] > 0 && num[num.length - 2] == 0) {
        hundreds = `${arrUnits[num[0]]} ${'hundred'}`;
        units = arrUnits[num[num.length - 1]];
        ans = `${hundreds} ${units}`;
        return(ans);
    //сотни _1_:
    } else if (num.length == 3 && num[num.length - 2] == 1) {
        hundreds = `${arrUnits[num[0]]} ${'hundred'}`;
        tens = arrTens10_19[num[num.length - 1]];
        ans = `${hundreds} ${tens}`;
        return(ans);
    //сотни _20:
    } else if (num.length == 3 && num[num.length - 1] == 0 && num[num.length - 2] > 1) {
        hundreds = `${arrUnits[num[0]]} ${'hundred'}`;
        tens = arrTens20_90[num[num.length - 2]];
        ans = `${hundreds} ${tens}`;
        return(ans);
    //сотни _21:
    } else if (num.length == 3 && num[num.length - 1] > 0 && num[num.length - 2] > 1) {
        hundreds = `${arrUnits[num[0]]} ${'hundred'}`;
        tens = arrTens20_90[num[num.length - 2]];
        units = arrUnits[num[num.length - 1]];
        ans = `${hundreds} ${tens} ${units}`;
        return(ans);
    }     
}

toReadable (0);
