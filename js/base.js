const apiURL = 'https://statfin.stat.fi/PxWeb/sq/4e244893-7761-4c4f-8e55-7a8d41d86eff';
window.onload = function() {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            createTable(data);
        })
};

function createTable(data) {
    const municipalities = data.dataset.dimension.Alue.category.label;
    const populations = data.dataset.value;

    const table = document.getElementById('table');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const thMunicipality = document.createElement('th');
    thMunicipality.textContent = 'Municipality';
    headerRow.appendChild(thMunicipality);

    const thPopulation = document.createElement('th');
    thPopulation.textContent = 'Population';
    headerRow.appendChild(thPopulation);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    Object.keys(municipalities).forEach((municipality, population) => {
        const row = document.createElement('tr');

        const tdMunicipality = document.createElement('td');
        tdMunicipality.textContent = municipalities[municipality];
        row.appendChild(tdMunicipality);

        const tdPopulation = document.createElement('td');
        tdPopulation.textContent = populations[population];
        row.appendChild(tdPopulation);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}