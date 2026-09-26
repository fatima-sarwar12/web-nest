
let students = [

    {
        id: 1,
        name: "Fatima Sarwar",
        age: 20,
        department: "BSCS",
        marks: 90,
        semester: "5th"
    },

    {
        id: 2,
        name: "Areesha",
        age: 21,
        department: "BBA",
        marks: 85,
        semester: "4th"
    },

    {
        id: 3,
        name: "Ahmed",
        age: 22,
        department: "BSCS",
        marks: 45,
        semester: "5th"
    },

    {
        id: 4,
        name: "Ayesha",
        age: 20,
        department: "BSIT",
        marks: 91,
        semester: "3rd"
    },

    {
        id: 5,
        name: "Hamza",
        age: 23,
        department: "BSCS",
        marks: 55,
        semester: "6th"
    }

];



let studentContainer =
    document.getElementById("studentContainer");

let studentForm =
    document.getElementById("studentForm");

let searchInput =
    document.getElementById("search");



function displayStudents(studentList) {

    studentContainer.innerHTML = "";

    studentList.map(function(student) {

        let card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `

            <h3>${student.name}</h3>

            <p><strong>Age:</strong> ${student.age}</p>

            <p>
                <strong>Department:</strong>
                ${student.department}
            </p>

            <p>
                <strong>Marks:</strong>
                ${student.marks}
            </p>

            <p>
                <strong>Semester:</strong>
                ${student.semester}
            </p>

            <div class="card-buttons">

                <button
                    class="edit-btn"
                    onclick="editStudent(${student.id})"
                >
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteStudent(${student.id})"
                >
                    Delete
                </button>

            </div>
        `;

        studentContainer.appendChild(card);

    });

}


displayStudents(students);



studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
        document.getElementById("name").value;

    let age =
        document.getElementById("age").value;

    let department =
        document.getElementById("department").value;

    let marks =
        document.getElementById("marks").value;

    let semester =
        document.getElementById("semester").value;


    let newStudent = {

        id: Date.now(),

        name: name,

        age: Number(age),

        department: department,

        marks: Number(marks),

        semester: semester
    };


    students.push(newStudent);


    displayStudents(students);


    runAllLogic();


    studentForm.reset();

});



function deleteStudent(id) {


    students = students.filter(function(student) {

        return student.id !== id;

    });


    displayStudents(students);


    runAllLogic();

}



let editingId = null;


function editStudent(id) {

    let student = students.find(function(student) {

        return student.id === id;

    });


    editingId = id;


    document.getElementById("editName").value =
        student.name;

    document.getElementById("editAge").value =
        student.age;

    document.getElementById("editDepartment").value =
        student.department;

    document.getElementById("editMarks").value =
        student.marks;

    document.getElementById("editSemester").value =
        student.semester;


    document.getElementById("editModal").style.display =
        "flex";
}


document.getElementById("editForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        
        let student = students.find(function(student) {

            return student.id === editingId;

        });


        student.name =
            document.getElementById("editName").value;

        student.age =
            Number(document.getElementById("editAge").value);

        student.department =
            document.getElementById("editDepartment").value;

        student.marks =
            Number(document.getElementById("editMarks").value);

        student.semester =
            document.getElementById("editSemester").value;


        displayStudents(students);


        runAllLogic();


        closeModal();

    });



function closeModal() {

    document.getElementById("editModal").style.display =
        "none";
}



searchInput.addEventListener("input", function() {

    let searchValue =
        searchInput.value.toLowerCase();


    let filteredStudents =
        students.filter(function(student) {

            return (

                student.name
                    .toLowerCase()
                    .includes(searchValue)

                ||

                student.department
                    .toLowerCase()
                    .includes(searchValue)

                ||

                student.semester
                    .toLowerCase()
                    .includes(searchValue)

            );

        });


    displayStudents(filteredStudents);

});



function filterStudents(type) {

    let filteredStudents;


    if (type === "all") {

        filteredStudents = students;

    }


    else if (type === "passed") {

        filteredStudents = students.filter(function(student) {

            return student.marks >= 50;

        });

    }


    else if (type === "failed") {

        filteredStudents = students.filter(function(student) {

            return student.marks < 50;

        });

    }


    else if (type === "high") {

        filteredStudents = students.filter(function(student) {

            return student.marks >= 80;

        });

    }

    else if (type === "low") {

        filteredStudents = students.filter(function(student) {

            return student.marks < 60;

        });

    }


    else if (type === "BSCS") {

        filteredStudents = students.filter(function(student) {

            return student.department === "BSCS";

        });

    }


    displayStudents(filteredStudents);

}



function runIfElseLogic() {

    let output =
        document.getElementById("conditionOutput");

    output.innerHTML = "";


    students.forEach(function(student) {

        let result;

        if (student.marks >= 80) {

            result =
                student.name +
                " has Excellent marks.";

        }



        else if (student.marks >= 70) {

            result =
                student.name +
                " has Good marks.";

        }


        else if (student.marks >= 60) {

            result =
                student.name +
                " has Average marks.";

        }


        else if (student.marks >= 50) {

            result =
                student.name +
                " has Passed.";

        }


        else {

            result =
                student.name +
                " has Failed.";

        }


        output.innerHTML += `

            <div class="logic-item">
                ${result}
            </div>

        `;

    });

}


function runForLoop() {

    let output =
        document.getElementById("forLoopOutput");

    output.innerHTML = "";


    // For loop
    for (let i = 0; i < students.length; i++) {

        output.innerHTML += `

            <div class="logic-item">

                Student ${i + 1}:
                ${students[i].name}

            </div>

        `;

    }

}



function runWhileLoop() {

    let output =
        document.getElementById("whileLoopOutput");

    output.innerHTML = "";


    let i = 0;


    while (i < students.length) {

        output.innerHTML += `

            <div class="logic-item">

                ${students[i].name}
                has
                ${students[i].marks}
                marks.

            </div>

        `;


        i++;

    }

}



function runLoopWithConditions() {

    let output =
        document.getElementById("categoryOutput");

    output.innerHTML = "";


    for (let i = 0; i < students.length; i++) {

        let student = students[i];

        let category;


        if (student.marks >= 80) {

            category = "Excellent";

        }

        else if (student.marks >= 60) {

            category = "Good";

        }

        else if (student.marks >= 50) {

            category = "Pass";

        }

        else {

            category = "Fail";

        }


        output.innerHTML += `

            <div class="logic-item">

                <strong>
                    ${student.name}
                </strong>

                →
                ${category}

            </div>

        `;

    }

}



function runAllLogic() {

    runIfElseLogic();

    runForLoop();

    runWhileLoop();

    runLoopWithConditions();

}


runAllLogic();