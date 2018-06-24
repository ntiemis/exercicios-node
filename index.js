const Excel = require('exceljs');
let clientes = require('clients.json');
let workbook = new Excel.Workbook();
let clientsSheets = workbook.addWorksheet();

clientsSheets.columns = [
    {header: 'id', key: 'id', width: '50'},    
    {header: 'name', key: 'name', width: '50'},
    {header: 'email', key: 'email', width: '50'},
    {header: 'city', key: 'city', width: '50'}
];

for(let i in clientes){
    clientsSheets.addRow({id: i['id'], name: i['name'], email: i['email'], city: i['city']});
}

workbook.xlsx.writeFile('clients.xlsx')
    .then(function(){
        console.log('Feito');
    });
