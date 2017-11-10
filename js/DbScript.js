function CreateDb(){
	var db=initDb();
	db.transaction(function(sql){
		sql.executeSql("Create table if not exists videos (id unique, name)");
		sql.executeSql('insert into videos values(1,"la maquina del tiempo ")');
	});
	selectAll();
}
function selectAll(){
	var db=initDb();
	db.transaction(function(query){
		query.executeSql("select name from videos",[],function(query,result){
			var filas=result.rows.length;
			var write=document.getElementById("ulAllImagesBuscar");
			var li=document.createElement("li");
			li.class="itemsAllImagenBuscar";
			for(i=0;i<filas;i++){
			write.appendChild(li);
			}
		});
		
	});
}

function initDb(){
	return window.openDatabase("mydb","1.0","db sql", 2 * 1024 * 1024);
	
}
