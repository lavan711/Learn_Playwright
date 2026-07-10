//enum is used for defining the set of named constants. It is a way to give more friendly names to sets of numeric values or string values. In TypeScript, enums can be defined using the `enum` keyword.
enum TestStatus {
    Pass = "PASS",
    Fail = "FAIL",
    Skip = "SKIP",
    Pending = "PENDING",
    Blocked = "BLOCKED"
}
console.log(TestStatus.Pass);