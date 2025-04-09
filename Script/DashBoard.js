// document.querySelector('.add-user-button').addEventListener('click', function() {
//     window.location.href = 'Registration.html';
// });

$(document).ready(function () {
    $('.add-user-button').click(function () {
        window.location.href = 'Registration.html';
    });
});


// $(document).ready(function () {


//     const url = "http://localhost:3000/employees";

//     $.ajax({
//       url: `${url}/${id}`,
//       type: "GET",
//       contentType: "application/json",
//       data: JSON.stringify(employee),
//       success: (response) => {
//         console.log(`Employee Get successfully:`, response)
//       },
//       error: (error) => {
//         console.error("Error:", error)
//         alert(`Error in Get  employee. Please try again.`)
//       },
//     })


//     const tableBody = $("#tableBody");
  
//     employee.forEach((emp, index) => {
//       const $row = $('<tr>');
//       const departments = Array.isArray(emp.department)? emp.department: [emp.department];
  
//       $row.append(
//         `<td class="name-cell">
//           <img src="${emp.profile}" alt="Profile" class="table-profile-img">
//           <span>${emp.name}</span>
//         </td>
//         <td>${emp.gender}</td>
//         <td>
//         <div class="department-tags">
//           ${departments.map(
//             (dept) => `<span class="tag ${dept.toLowerCase()}-tag">${dept}</span>`
//           ).join("")}
//         </div>
//         </td>
//         <td>${emp.salary}</td>
//         <td>${emp.startDate.day} ${emp.startDate.month} ${emp.startDate.year}</td>
//         <td class="actions-cell">
//           <span class="material-icons action-icon delete-icon" onclick="deleteEmployee(${index})">delete</span>
//           <span class="material-icons action-icon edit-icon" onclick="editEmployee(${index})">edit</span>
//         </td>`
//       );
  
//       tableBody.append($row);
//     });
  
//   });

//   function deleteEmployee(index) {
//     const employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
  
//     if (index >= 0 && index < employeeList.length) {
//       employeeList.splice(index, 1); 
//       localStorage.setItem("employeeList", JSON.stringify(employeeList)); 
//       location.reload(); 
//     }
//   }

$(document).ready(function () {
  const url = "http://localhost:3000/employees";
  const tableBody = $("#tableBody");

  $.ajax({
    url: url,
    type: "GET",
    success: (employees) => {
      console.log("Employees fetched:", employees);

      employees.forEach((emp) => {
        const departments = Array.isArray(emp.department) ? emp.department : [emp.department];

        const $row = $(`
          <tr>
            <td class="name-cell">
              <img src="${emp.profile}" alt="Profile" class="table-profile-img">
              <span>${emp.name}</span>
            </td>
            <td>${emp.gender}</td>
            <td>
              <div class="department-tags">
                ${departments.map(dept => `<span class="tag ${dept.toLowerCase()}-tag">${dept}</span>`).join("")}
              </div>
            </td>
            <td>${emp.salary}</td>
            <td>${emp.startDate.day} ${emp.startDate.month} ${emp.startDate.year}</td>
            <td class="actions-cell">
            <span class="material-icons action-icon delete-icon" data-id="${emp.id}">delete</span>
            <span class="material-icons action-icon edit-icon" data-id="${emp.id}">edit</span>
            </td>
          </tr>
        `);

        tableBody.append($row);
      });
    },
    error: (error) => {
      console.error("Error fetching employees:", error);
      alert("Failed to fetch employees.");
    }
  });


//  delegated event handler for dynamically added elements brcouce elements are added after the DOM is loaded
// Use event delegation to handle clicks on dynamically added elements

  $("#tableBody").on("click", ".delete-icon", function () {
    const id = $(this).data("id");
    deleteEmployee(id);
  });
  
  $("#tableBody").on("click", ".edit-icon", function () {
    const id = $(this).data("id");
    editEmployee(id);
  });
  
  
  function deleteEmployee(id) {  
    if (confirm("Are you sure you want to delete this employee?")) {
      $.ajax({
        url: `${url}/${id}`,
        type: "DELETE",
        success: () => {
          location.reload(); 
        },
        error: (error) => {
          console.error("Error deleting employee:", error);
          alert("Failed to delete employee.");
        }
      });
  
    }
  }

  function editEmployee(id) {
    $.ajax({
      url: `${url}/${id}`,
      type: "GET",
      success: (employee) => {
        const queryParams = new URLSearchParams({
          ...employee,
       
          edit: true,


        }).toString();
        window.location.href = `Registration.html?${queryParams}`;
      },
      error: (error) => {
        console.error("Error fetching employee for edit:", error);
        alert("Failed to fetch employee for editing.");
      }
    });
   

  }


});











// Future User

// $(document).ready(function () {

//     const employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
//     const tableBody = $("#tableBody");

//     employeeList.fetch((emp, index) => {

//         const $row = $('<tr>');

//         $row.append(
//             `<td class="name-cell">
//              <img src="${emp.profile}" alt="Profile" class="table-profile-img">
//             <span>${emp.name}</span>
//             </td>
//             <td>${emp.gender}</td>
//             <td><div class="department-tags">
//             ${emp.department.map(
//                 (dept) =>
//                     `<span class="tag ${dept.toLowerCase()}-tag">${dept}</span>`
//             ).join("")}
//             </div></td>
//             <td>₹ ${emp.salary}</td>
//             <td>${emp.startDate.day} ${emp.startDate.month} ${emp.startDate.year}</td>
//             <td class="actions-cell">
//             <span class="material-icons action-icon delete-icon" onclick="deleteEmployee(${index})">delete</span>
//             <span class="material-icons action-icon edit-icon" onclick="editEmployee(${index})">edit</span>
//             </td>`
//         );
//         tableBody.append($row);
//     });

// });


  

// window.addEventListener("DOMContentLoaded", function () {
//     const employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
//     const tableBody = document.getElementById("tableBody");
  
//     employeeList.forEach((emp, index) => {
//       const row = document.createElement("tr");
  
//       row.innerHTML = `
//         <td class="name-cell">
//           <img src="profile-img ${emp.profile}" alt="Profile" class="table-profile-img">
//           <span>${emp.name}</span>
//         </td>
//         <td>${emp.gender}</td>
//         <td>
//           <div class="department-tags">
//             ${emp.department.map(
//               (dept) =>
//                 `<span class="tag ${dept.toLowerCase()}-tag">${dept}</span>`
//             ).join("")}
//           </div>
//         </td>
//         <td>₹ ${emp.salary}</td>
//         <td>${emp.startDate.day} ${emp.startDate.month} ${emp.startDate.year}</td>
//         <td class="actions-cell">
//           <span class="material-icons action-icon delete-icon" onclick="deleteEmployee(${index})">delete</span>
//           <span class="material-icons action-icon edit-icon" onclick="editEmployee(${index})">edit</span>
//         </td>
//       `;
  
//       tableBody.appendChild(row);
//     });
//   });
  
