// task - title, body, date, isDone
if (localStorage.getItem("tasks")) {
    var tasks;
    tasks = JSON.parse(localStorage.getItem("tasks"));
} else {
    var tasks = [];
    localStorage.setItem("tasks", tasks);
}
console.log(tasks);
console.log("NOW");

const app = new Vue({
    el: "#app",
    data: { tasks },
    methods: {
        clearTask(n) {
            console.log(n);
            var i = 0;
            while (i > this.tasks.length) {
                if (this.tasks[i].id == n) {
                    var index = i;
                    break;
                }
                i += 1;
            }
            this.tasks.pop(this.tasks[index]);
            const parsed = JSON.stringify(this.tasks);
            localStorage.setItem("tasks", parsed);
        },
    },
});

const appinput = new Vue({
    el: "#app-input",
    data: { tasks },
    methods: {
        addTask() {
            var title = document.getElementById("newtasktitle");
            var body = document.getElementById("newtaskbody");
            var datetime = new Date();
            var date =
                datetime.getDate() +
                "/" +
                (datetime.getMonth() + 1) +
                "/" +
                datetime.getFullYear();
            var id = this.tasks.length;
            var newtask = {
                id: id,
                title: title.value,
                body: body.value,
                date: date,
                isDone: false,
            };
            this.tasks.push(newtask);
            const parsed = JSON.stringify(this.tasks);
            localStorage.setItem("tasks", parsed);
            title.value = title.defaultValue;
            body.value = body.defaultValue;
            console.log("hel");
        },
    },
});

const clear = new Vue({
    el: "#clear",
    data: { tasks },
    methods: {
        clear() {
            console.log("herererer");
            this.tasks.splice(0, this.tasks.length);
            localStorage.setItem("tasks", JSON.stringify(this.tasks));
        },
    },
});
/*
<div class="scard">
    <div class="scard-header">
        <!--TITLE-->
        <p>
            Studying studying studying lol dont do an hour
            cba cba
        </p>
    </div>
    <div class="scard-body">
        <!--TASK-->
        <p>
            Chemistry : Chemical Bonding
        </p>
        <p class="small text-right">
            Date : 20th July 1919
        </p>
    </div>
</div>
*/

/*<div class="col-md-4 pb-3">
    <div class="card mb-2">
        <div class="card-header">
            <!--TITLE-->
            <p>
                {{task.title}}
            </p>
            <input
                type="button"
                value="Done"
                class="button-dark fontfam"
                @click="clearTask(task.id)"
            />
        </div>
        <div class="card-body">
            <!--TASK-->
            <p>
                {{task.body}}
            </p>
            <p class="small text-right">
                Date : {{task.date}}
            </p>
        </div>
    </div>
</div>*/
