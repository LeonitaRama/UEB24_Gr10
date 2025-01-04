let currentSortColumn = -1;
let currentSortOrder = "asc"; 

document.getElementById('search-input').addEventListener('keyup', function() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => searchTable(this.value), 1000); 
});

function sortTable(columnIndex) {
    const table = document.getElementById("movie-table");
    const rows = Array.from(table.rows).slice(1); 
    const isAscending = currentSortColumn === columnIndex && currentSortOrder === "asc";

    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText.trim();
        let cellB = rowB.cells[columnIndex].innerText.trim();

        if (columnIndex === 2) { 
            cellA = parseDate(cellA);
            cellB = parseDate(cellB);
        }

        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

  
    rows.forEach(row => table.appendChild(row));

    
    updateSortIcons(columnIndex, isAscending);
    currentSortColumn = columnIndex;
    currentSortOrder = isAscending ? "desc" : "asc";
}

function parseDate(dateStr) {
    const months = { "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06",
                     "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12" };
    const parts = dateStr.split(" ");
    return parts.length === 3 ? `${parts[2]}-${months[parts[1]]}-${parts[0].padStart(2, '0')}` : dateStr;
}

function updateSortIcons(columnIndex, isAscending) {
    document.querySelectorAll("thead th").forEach((th, index) => {
        const icon = th.querySelector(".icon-arrow");
        if (index === columnIndex) {
            th.classList.toggle("asc", !isAscending);
            th.classList.toggle("desc", isAscending);
        } else {
            th.classList.remove("asc", "desc");
        }
    });
}

function searchTable(query) {
    const rows = document.querySelectorAll("#movie-table tbody tr");
    query = query.toLowerCase();
    
    let matchFound = false;
    rows.forEach(row => {
        const match = Array.from(row.cells).some(cell => cell.textContent.toLowerCase().includes(query));
        row.style.display = match ? "" : "none";
        if (match) matchFound = true;
    });

    
    if (!matchFound && query.trim() !== "") {
        alert("No results found for your search.");
    }

    
    if (currentSortColumn !== -1) {
        sortTable(currentSortColumn); 
    }
}
