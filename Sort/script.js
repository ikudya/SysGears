function formTable(selector){
    let wrapper = document.querySelector(selector);
    let form = wrapper.getElementsByTagName("form")[0];
    let table = wrapper.getElementsByTagName("table")[0];
    form.onsubmit = function(ev){
        ev = ev || event;
        ev.preventDefault();
        var tBody = document.querySelector('tbody'), tr;
        var tr = document.createElement("tr"), td;
        for(let i = 0; i < 3; i++){
            td = document.createElement("td");
            td.innerHTML = this.elements[i].value;
            tBody.appendChild(tr)
            tr.appendChild(td);
        }
        table.appendChild(tBody);
    }
    el = document.getElementById('capitalize');
    el.onkeydown = function(event) {
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    }
    form.changeHandler=function (val){
        if (Number(val.value) > 100)
        {
            val.value = 100
        } else if (Number(val.value) <= 0){
            val.value = 1
        }
    }
}
formTable(".wrapper");

function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    tBody.append(...sortedRows);

    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}
document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener("click", () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});

