fetch("archivio.json")
.then(res => res.json())
.then(data => generateTable(data))

function generateTable(data){
  $('#main-table').DataTable( {
    data: data,
    columns: [
      { data: 'name', title: "Evento" },
      { data: 'place', title: "Luogo" },
      { data: 'when', title: "Data" },
      { data: 'who', title: "Vittima" },
      { data: 'age', title: "Età" },
      { data: 'nationality', title: "Nazionalità" },
      { data: 'description', title: "Breve Descrizione" },
      { data: 'sentence', title: "Giustizia" },
      { data: 'link', title: "Articolo", render: DataTable.render.hyperLink() },
    ]
  } );
}
