import { isValidDateString, wrapString } from "../src/utilities";

test("wrapString: wrap single word over two lines", () => {
    expect(wrapString("Long", 3)).toBe("Lo-\nng");
});

test("wrapString: wrap multiple words over two lines", () => {
    expect(wrapString("Too long", 4)).toBe("Too\nlong");
});

test("wrapString: wrap complex sentence", () => {
    expect(wrapString("This is a complex sentence that needs to be wrapped", 6)).toBe("This\nis a\ncompl-\nex se-\nntence\nthat\nneeds\nto be\nwrapp-\ned");
});

// PLACE TESTS FOR isValidDateString UNDER HERE

// Test for invalid string

// Test for the wrong amount of "date segments" (see comments in utilities.js for more info)

// Test for wrong number of digits in the day

// Test for wrong number of digits in the month

// Test for wrong number of digits in the year

// Test for day outside of month's number of days

// Test for month greater than 12

// Test for day <= 0


// *********************************************

// Test for completely invalid strings
// Examples: "", "foobar", "123456"

// test("isValidDateString: completely invalid string", () => {
//    expect(1).toBe(1); // This test will always fail
// });

test("isValidDateString: returns false for non-date strings", () => {
    expect(isValidDateString("thisisnotadate")).toBe(false);
});



// Test for wrong number of date segments
// Examples: "15/08", "15-08-2023", "15/08/2023/extra"
test("isValidDateString: returns false when date does not have three segments", () => {
    expect(isValidDateString("12/2023")).toBe(false); // missing day
    expect(isValidDateString("12/11/2023/01")).toBe(false); // extra segment
});


// Test for wrong number of digits in day
// Examples: "5/08/2023", "105/08/2023"
test("isValidDateString: returns false when day does not have 2 digits", () => {
    expect(isValidDateString("1/12/2023")).toBe(false);
    expect(isValidDateString("123/12/2023")).toBe(false);
});


// Test for wrong number of digits in month
// Examples: "15/8/2023", "15/108/2023"
test("isValidDateString: returns false when month does not have 2 digits", () => {
    expect(isValidDateString("12/1/2023")).toBe(false);
    expect(isValidDateString("12/123/2023")).toBe(false);
});

// Test for wrong number of digits in year
// Examples: "15/08/123", "15/08/12345"
test("isValidDateString: returns false when year does not have 4 digits", () => {
    expect(isValidDateString("12/12/23")).toBe(false);
    expect(isValidDateString("12/12/20234")).toBe(false);
});


// Test for day outside the month's number of days
// Examples: "31/04/2023", "30/02/2023"
test("isValidDateString: returns false when day exceeds days in month", () => {
    expect(isValidDateString("31/04/2023")).toBe(false); // April has 30 days
    expect(isValidDateString("32/01/2023")).toBe(false); // January has 31 days
});


// Test for day <= 0
// Examples: "00/08/2023"
test("isValidDateString: returns false when day is zero or negative", () => {
    expect(isValidDateString("00/12/2023")).toBe(false);
    expect(isValidDateString("-1/12/2023")).toBe(false);
});


// Test for month > 12
// Examples: "15/13/2023"
test("isValidDateString: returns false when month is greater than 12", () => {
    expect(isValidDateString("12/13/2023")).toBe(false);
});


// Test for month <= 0
// Examples: "15/00/2023"
test("isValidDateString: returns false when month is zero or negative", () => {
    expect(isValidDateString("12/00/2023")).toBe(false);
    expect(isValidDateString("12/-1/2023")).toBe(false);
});

// Test for year <= 0
// Examples: "15/08/0000"
test("isValidDateString: returns false when year is zero or negative", () => {
    expect(isValidDateString("12/12/0")).toBe(false);
    expect(isValidDateString("12/12/-2023")).toBe(false);
});


// Test for February edge cases
// a) 29 Feb in non-leap year → "29/02/2023"
// b) 28 Feb → "28/02/2023"
// c) 30 Feb → "30/02/2023"

// Test for leading/trailing spaces
// Examples: " 15/08/2023", "15/08/2023 "

// Test for extra separators
// Examples: "15//08/2023", "15/08/2023/"

// Test for non-string input (optional)
// Examples: null, undefined, 15082023