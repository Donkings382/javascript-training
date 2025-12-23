# GEC: initialization.

# EC: Initialization….

# CP:-

# 1. Const message hoisted, not initialized so TDZ, message variable is stored in stack.(PUSH to callstack1)

# 2. getResult fully hoisted , getResult () is stored in heap but the address is referenced in stack(PUSH to callstack2)

# 3. calc(a, b) fully hoisted, calc() stored in heap but reference address is in stack.(PUSH to callstack3)

# 4. sum(a, b) + mul(a, b), both are hoisted and initialized, sum() and mul() stored in heap but referenced in stack.(PUSH to callstack4)

# 5. mul(a, b) hoisted and initialized, stored in heap but referenced in stack.(PUSH to callstack5)

# 6. sum(a, b) hoisted and initialized, stored in heap but referenced in stack.(PUSH to callstack6)

# EP:-

# 1. FEC for sum(a, b)

# 2. CP for const result hoisted but not initialized so TDZ

# 3. EP for result, initialization to a then b for a + b.(POP off callstack6).

# 4. FEC for mul(a, b).

# 5. CP for const result hoisted and initialized to TBZ.

# 6. EP for result, initialization to a then b for a \ b.(POP off callstack5).

# 7. FEC for calc(a, b), CP for cal(a, b)

# 8. No need for CP for sum(a, b), mul(a,b), EP: result of sum(a, b) and mul(a, b) are initialized and added together then divided by 2 based on the + and / operators(POP off callstack4).

# 9. FEC for getResult(a, b).

# 10. EP inside getResult(a,b), FEC happens for calc(a, b) then CP for calc(a, b).(POP off callstack 3)

# 11. EP causes initialization which assigns the values of 8 and 5 passed as arguments to getResults(a, b) down to calc(a, b) leading to the EP that brings out result for calc(a, b)(POP off callstack 2)

## STACK AND HEAP DIAGRAM FLOW

![Alt text](../day%20eight/image/callstack,%20heap%20flow.PNG)

## GEC, EC, CP, EP FLOW

![Alt text](../day%20eight/image/assignment8-EC-diagram.PNG)

