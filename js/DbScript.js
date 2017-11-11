function CreateDb(){
	var db=initDb();
	db.transaction(function(sql){
		sql.executeSql("Create table if not exists videos (id unique, name)");
		sql.executeSql('insert into videos values(1,"la maquina del tiempo ")');
		sql.executeSql('insert into videos values(2,"Volver al Futuro ")');
		sql.executeSql('insert into videos values(3,"Matrix ")');
		sql.executeSql('insert into videos values(4,"Matar o morir ")');
		sql.executeSql('insert into videos values(5,"Bad boys ")');
		sql.executeSql('insert into videos values(6,"El contador ")');
		sql.executeSql('insert into videos values(7,"Xmen ")');
		sql.executeSql('insert into videos values(8,"Un verano para recordar ")');
	});
	selectAll();
}
function selectAll(){
	var db=initDb();
	db.transaction(function(query){
		query.executeSql("select name from videos",[],function(query,result){
			var filas=result.rows.length;
			var write=document.getElementById("ulAllImagesBuscar");
			var txt=document.getElementById("ulAllImages");
			
			for(i=0;i<filas;i++){
			var li=document.createElement("li");
			li.className="itemsAllImagenBuscar";
			var p=document.createElement("p");
			p.innerText=result.rows.item(i).name;
			li.appendChild(p);
			var span=document.createElement("span");
			span.className="iconAdd";
			li.appendChild(span);
			write.appendChild(li);
			
			var li1=document.createElement("li");
			var img=document.createElement("img");
			var p1=document.createElement("p");
			li1.className="itemsAllImage";
			img.className="imgAllItem";
			p1.innerText=result.rows.item(i).name;
			li1.appendChild(img);
			li1.appendChild(p1);
			txt.appendChild(li1);
			}
		});
		
	});
}

function initDb(){
	return window.openDatabase("mydb","1.0","db sql", 2 * 1024 * 1024);
	
}
