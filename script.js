function addStudent() {

    const name =
        document.getElementById("name").value;

    const age =
        document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("Please enter all details");
        return;
    }

    const studentList =
        document.getElementById("studentList");

    studentList.innerHTML += `
        <div class="student">
            <h3>${name}</h3>
            <p>Age: ${age}</p>
        </div>
    `;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
}