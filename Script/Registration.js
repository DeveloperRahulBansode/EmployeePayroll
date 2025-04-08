// document.querySelector(".submit-btn").addEventListener("click", function (e) {
//     e.preventDefault();


//     const name = document.getElementById("name").value;

//     const profile = document.querySelector("input[name='profile']:checked")?.nextElementSibling.className;

//     const gender = document.querySelector("input[name='gender']:checked")?.nextElementSibling.innerText;

//     const salary = document.getElementById("salary").value;

//     const department = Array.from(document.querySelectorAll("input[name='department']:checked"))
//       .map(chk => chk.nextElementSibling.innerText);

//     const dateSelects = document.querySelectorAll(".date-select select");
//     const startDate = {
//       day: dateSelects[0].value,
//       month: dateSelects[1].value,
//       year: dateSelects[2].value,
//     };

//     const notes = document.getElementById("textarea").value;

//     const employee = {
//       name,
//       profile,
//       gender,
//       salary,
//       department,
//       startDate,
//       notes,
//     };


//     let employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
//     employeeList.push(employee);

//     localStorage.setItem("employeeList", JSON.stringify(employeeList));
//     alert("Data saved successfully!");

//     document.getElementById("form").reset();
//   });

//   document.querySelector(".reset-btn").addEventListener("click", function () {
//     document.getElementById("form").reset();
//   });

//   document.querySelector(".cancel-btn").addEventListener("click", function () {
//     window.location.href = "D:/Employee PayRoll/Pages/DashBoard.html"; 
//   });

$(document).ready(function () {
  $(".submit-btn").click(function (e) {
    e.preventDefault();

    const name = $("#name").val();
    const profile = $("input[name='profile']:checked").next(".profile-img").css("background-image").slice(5, -2);;
    const gender = $("input[name='gender']:checked").next().text();
    const salary = $("#salary").val();
    const department = $("input[name='department']:checked").map(function () {return $(this).next().text();}).get();
    const startDate = {
      day: $("#day").val(),
      month: $("#month").val(),
      year: $("#year").val(),
    };
    const notes = $("#textarea").val();

    const employee = {
      name,
      profile,
      gender,
      salary,
      department,
      startDate,
      notes,
    };



      //Data Store in Local Storage
    // let employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
    // employeeList.push(employee);
    // localStorage.setItem("employeeList", JSON.stringify(employeeList));



    const url = "http://localhost:3000/employees";

    $.ajax({
      url: url,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(employee),
      success: (response) => {
        console.log(`Employee Added successfully:`, response)
        window.location.href = "dashboard.html"
      },
      error: (error) => {
        console.error("Error:", error)
        alert(`Error in Adding  employee. Please try again.`)
      },
    })

    // $.ajax({
    //   url: url,
    //   type: isEdit ? "PUT" : "POST",
    //   contentType: "application/json",
    //   data: JSON.stringify(formData),
    //   success: (response) => {
    //     console.log(`Employee ${isEdit ? 'updated' : 'added'} successfully:`, response)
    //     window.location.href = "dashboard.html"
    //   },
    //   error: (error) => {
    //     console.error("Error:", error)
    //     alert(`Error ${isEdit ? 'updating' : 'adding'} employee. Please try again.`)
    //   },
    // })

    alert("Data saved successfully!");
    $("#form")[0].reset();
  });

  $(document).ready(function (e) {
    $(".reset-btn").click(function () {
      $("#form")[0].reset();
    });
  });

  $(document).ready(function (e) {
    $(".cancel-btn").click(function () {
      window.location.href = "D:/Employee PayRoll/Pages/DashBoard.html";
    });
  });

});




