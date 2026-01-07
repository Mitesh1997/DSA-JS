studentDataBase=["mitesh","kk","nitesh","dipak","sahil"]


function findStudent(allStudent,studentName){
    for(i=0;i<allStudent.length;i++){
        if(allStudent[i]===studentName){
            console.log(`Found the student ${studentName}`)
    }
}
}
findStudent(studentDataBase,"dipak")