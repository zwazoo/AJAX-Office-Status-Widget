;
(function () {
    "use strict";

    const xhr = new XMLHttpRequest();

    const employeesList = document.querySelector('.bulleted'),
        employeeTmpl = document.querySelector('#li-tmpl').innerHTML;

    let employeeListHTML;

    xhr.open('GET', "./data/employees.json");

    xhr.send();

    xhr.onload = function () {
        let ajax = this;
        const data = JSON.parse(ajax.response);

        data.forEach(function (employees) {
            let status;
            if(employees.inoffice==true) {
                status="in";
            }else{
                status="out";
            }
            
            employeeListHTML += employeeTmpl
            .replace(/{{inoffice}}/ig, status)
            .replace(/{{name}}/ig, employees.name)
        });

        employeesList.innerHTML = employeeListHTML;

    };

})();