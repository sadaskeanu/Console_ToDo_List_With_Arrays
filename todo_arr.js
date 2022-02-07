const list = [
    {task:"walk dog", status: "In Progress", priority: "high"},
    {task: "read book", status: "To Do", priority: "low"},
    {task: "work", status: "Done", priority: "high"},
    ];
    
    const STATUS = {
    To_Do: "To Do",
    In_Progress: "In Progress",
    Done: "Done",
    } 
    
    const PRIORITY = {
    High: "high",
    Low: "low",
    }
    
    function addTask (task, status, priority) {
    list.push({task, status, priority});
    }

    function deleteTask (task) {
        list.find(function(item,index) {
            if (item.task === task) {
                list.splice(index,1);
            }
        });
    }
  
    function changeStatusAndPrioity(task, status, priority){
        list.find(function(item){
            if (item.task === task) {
                item.status = status;
                item.priority = priority;
            } 
        });
    }

    function showList() {

        console.log(STATUS.To_Do + ':')
        list.find(function(item){
            if (item.status === STATUS.To_Do) {
                console.log(item.task);
            }
        });

        console.log(STATUS.In_Progress + ':')
        list.find(function(item){
            if (item.status === STATUS.In_Progress) {
                console.log(item.task);
            }
        });

        console.log(STATUS.Done + ':')
        list.find(function(item){
            if (item.status === STATUS.Done) {
                console.log(item.task);
            }
        });
    }
           
    


    addTask ("sport", "To Do", "low");
    console.log(list);
    deleteTask ("sport");
    console.log(list);
    changeStatusAndPrioity ("read book", STATUS.Done, PRIORITY.High);
    console.log(list);
    changeStatusAndPrioity ("walk dog", STATUS.Done, PRIORITY.Low);
    console.log(list);
    addTask("coffee break", STATUS.To_Do, PRIORITY.Low);
    showList()
