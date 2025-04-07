document.querySelector(".submit-btn").addEventListener("click", function (e) {
    e.preventDefault();

  
    const name = document.getElementById("name").value;

    const profile = document.querySelector("input[name='profile']:checked")?.nextElementSibling.className;

    const gender = document.querySelector("input[name='gender']:checked")?.nextElementSibling.innerText;
  
    const salary = document.getElementById("salary").value;
  
    const department = Array.from(document.querySelectorAll("input[name='department']:checked"))
      .map(chk => chk.nextElementSibling.innerText);
  
    const dateSelects = document.querySelectorAll(".date-select select");
    const startDate = {
      day: dateSelects[0].value,
      month: dateSelects[1].value,
      year: dateSelects[2].value,
    };

    const notes = document.getElementById("textarea").value;

    const employee = {
      name,
      profile,
      gender,
      salary,
      department,
      startDate,
      notes,
    };

  
    let employeeList = JSON.parse(localStorage.getItem("employeeList")) || [];
    employeeList.push(employee);
    localStorage.setItem("employeeList", JSON.stringify(employeeList));
    alert("Data saved successfully!");
    document.getElementById("form").reset();
  });

  document.querySelector(".reset-btn").addEventListener("click", function () {
    document.getElementById("form").reset();
  });
  
  document.querySelector(".cancel-btn").addEventListener("click", function () {
    window.location.href = "D:/Employee PayRoll/Pages/DashBoard.html"; 
  });

  