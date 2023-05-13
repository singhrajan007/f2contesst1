/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    var result = arr.map(function (element, index) {
        if(arr[index].marks > 50){
            return element
        }
    });
    console.log(result)
  }
  
  function PrintStudentsbyForEach() {
    const copy = [];
    arr.forEach(function (element, index, arr) {
        if(arr[index].marks > 50){
            copy.push(element);
        }
        
    });
    console.log(copy);
  }
  
  function addData() {
    arr.push({id: 4,name: "susan",age: "20",marks: 75});
    console.log(arr);
  }
  
  function removeFailedStudent() {
    arr = arr.filter(function(element, i, arr) {
        if(arr[i].marks > 50){      
            return element
        }
    })

    console.log(arr)
  }
  
  function concatenateArray() {
    let arr2 = [
        { id: 5, name: "Sohan", age: "13", marks: 70 },
        { id: 6, name: "Mohan", age: "14", marks: 80 },
        { id: 7, name: "Rohan", age: "15", marks: 95 },];
    console.log(arr.concat(arr2));
  }