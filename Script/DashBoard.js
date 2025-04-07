// document.querySelector('.add-user-button').addEventListener('click', function() {
//     window.location.href = 'Registration.html';
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
  
