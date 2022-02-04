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
    
    function addTask (task) {
    list.push({task, status: STATUS.To_Do, priority: PRIORITY.Low});
    }

    function deleteTask (task) {
        list.find(function(item,index) {
            if (item.task === task) {
                list.splice(index,1);
            }
        });
    }
  
    function changeStatus(task, status){
        list.find(function(item){
            if (item.task === task) {
                item.status = status;
            }
        });
    }

    function changePriority(task, priority){
        list.find(function(item){
            if (item.task === task) {
                item.priority = priority;
            }
        });
    }

    function showList() {

        console.log(STATUS.To_Do + ':')
        list.forEach(function(item){
            if (item.status === STATUS.To_Do) {
                console.log(item.task);
            }
        });

        console.log(STATUS.In_Progress + ':')
        list.forEach(function(item){
            if (item.status === STATUS.In_Progress) {
                console.log(item.task);
            }
        });

        console.log(STATUS.Done + ':')
        list.forEach(function(item){
            if (item.status === STATUS.Done) {
                console.log(item.task);
            }
        });
    }
           
    
    addTask ("homework");
    console.log(list);
    changeStatus ("homework", "Done");
    console.log(list);
    changePriority ("homework", "high");
    console.log(list);
    deleteTask("homework");
    console.log(list);
    showList();
