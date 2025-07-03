let todo =[];

let req = prompt("Please Enter your Request");

while (true) {
    if(req == "quit"){
        console.log("Quiting the app");
        break;
    }
    if (req == "list") {
        console.log("---------");
        for(let i =0;i<=todo.length;i++){
            console.log(i , todo[i]);
        }
        console.log("-----------");    
    }else if(req == "add"){
        let task = prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added")
    }else if(req == "delete"){
        let ind = prompt("Enter the task index you want to delete");
        todo.splice(ind , 1);
        console.log("task delete")
    }else{
        console.log("Wrong Request")
    }
    req = prompt("Please Enter your Request");

}
