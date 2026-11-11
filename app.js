const toDolist = [];

const todoHistory = [];

let taskNum = 0;

function btnAdd() {
    let title = document.getElementById("lblTitle").value;
    let activity = document.getElementById("lblActivity").value;

    if (title === "" || activity === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill in both title and activity!',
        });
        return;
    }

    toDolist.push({
        cardTitle: title,
        cardActivity: activity
    });

    todoHistory.push({
        action: 'Added Task',
        title: title,
        time: new Date().toLocaleTimeString()
    });

    taskNum++;

    let body = `
    <hr>
    <tr>
        <td>
            <div id="lblTaskCard" class="container mb-3">
                <div class="card text-center shadow">
                    <div class="card-header bg-dark text-white">
                        Task No : ${taskNum}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold text-primary">${title}</h5>
                        <p class="card-text" id="lblDesc">${activity}</p>
                        <div class="d-flex justify-content-center gap-2">
                            <button type="button" class="btn btn-outline-primary btn-sm" onclick="btnEdit(this)">✎</button>
                            <button type="button" class="btn btn-outline-danger btn-sm" onclick="btnDelete(this)">🗑</button>
                            <button type="button" class="btn btn-outline-success btn-sm" onclick="btnDone(this)">✓</button>
                        </div>
                    </div>
                    <div class="card-footer text-muted">
                        ToDo works
                    </div>
                </div>
            </div>
        </td>
    </tr>`;

    document.getElementById("toDoCards").innerHTML += body;

    document.getElementById("lblTitle").value = "";
    document.getElementById("lblActivity").value = "";

    console.log(toDolist);
    console.log(todoHistory);
    

}

function btnDelete(button) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            let tdElement = button.closest('td');

            let cardTitle = tdElement.querySelector('.card-title').innerText;

            let index = toDolist.findIndex(item => item.cardTitle === cardTitle);
            if(index != -1) {
                toDolist.splice(index,1);
            }

            todoHistory.push({
                action: 'Deleted Task',
                title: cardTitle,
                time: new Date().toLocaleTimeString()
            });

            tdElement.remove();

            console.log(toDolist);
            console.log(todoHistory);
            
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
        }
    });
}

async function btnEdit(button) {
    const { value: formValues } = await Swal.fire({
        title: "Edit Title and Activity",
        html: `
            <input id="swal-input1" class="swal2-input" placeholder = "Enter new Title">
            <input id="swal-input2" class="swal2-input" placeholder = "Enter new Activity">
        `,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById("swal-input1").value,
                document.getElementById("swal-input2").value
            ];
        }
    });

    if (formValues) {
        let cardBody = button.closest('.card-body');
        if (formValues[0]) cardBody.querySelector('.card-title').innerText = formValues[0];
        if (formValues[1]) cardBody.querySelector('.card-text').innerText = formValues[1];

        console.log(todoHistory);
        console.log(toDolist);
    }
}


function btnDone(button) {
    let card = button.closest('.card');

    let cardTitle = card.querySelector('.card-title').innerText;

    card.classList.toggle('bg-light');

    todoHistory.push({
        action: 'Completed',
        title: cardTitle,
        time: new Date().toLocaleTimeString()
    });

    console.log("Current History : ",todoHistory);
    
}