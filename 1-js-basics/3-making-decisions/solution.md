# challenge subtask 3 part 1
## if... else function
let biggest;<br>
let num=123;<br>
let another=234;<br>
let third=345;<br>
if(third > num && third > another){<br>
    biggest=third;<br>
}else{<br>
    biggest="another number";<br>
}<br>
console.log(`biggest numbeer is ${biggest}`);<br>

## ternary expression
let number=123;<br>
let another=234;<br>
let third=345;<br>
let biggest=third>number && third>another?console.log("${third} is the biggest") : console.log("${third} is not the biggest");<br>

my prefered syntax would be ternary if it is a expression with two conditions and if it contains more than one condition then i would prefer if else function.

# assignment subtask 3 part 1

``let allStudents = ['A','B-',1,4,5,2];<br>
let studentsWhoPass = [];<br>
let pass=["A","A-","B","B-","C"];<br>
for(let i=0;i<allStudents.length;i++){<br>
    for(let j=0;i<allStudents.length;j++){<br>
        console.log(allStudents[i],pass[j]);<br>
        if(typeof allStudents[i] === "string"){<br>
            if(allStudents[i]==pass[j]){<br>
                studentsWhoPass.push(allStudents[i]);<br>
                break;<br>
            }<br>
            else{<br>
                continue;<br>
            }<br>
        }<br>
        else if(typeof allStudents[i] === "number"){<br>
            if(allStudents[i]>=3){<br>
                studentsWhoPass.push(allStudents[i]);<br>
                break;<br>
            }<br>
            else{<br>
                break;<br>
            }<br>
        }<br>
        else{<br>
            break;<br>
        }<br>
    }<br>
}<br>
console.log(studentsWhoPass)<br>``
