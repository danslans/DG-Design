class Persons {

constructor(){
}	

 CreateDb(){
	var dbIndex=window.indexedDB.open("mydb",1);
		dbIndex.onupgradeneeded= function(event){
			var dbI=event.target.result;
			var objectStore=dbI.createObjectStore("persons",{keyPath:"id"});
			objectStore.createIndex("name","name",{unique:false});
			objectStore.createIndex("email","email",{unique:true});
			objectStore.transaction.oncomplete=function(event){
				var customerObjectStore= dbI.transaction("persons","readwrite");
				var store = customerObjectStore.objectStore("persons");
				store.add({id:1,name:"daniel",email:"correo@correo.com"});
			}

		}
	var db=this.initDb();
	db.transaction(function(sql){
		sql.executeSql("Create table if not exists videos (id unique, name,url)");
		sql.executeSql('insert into videos values(1,"la maquina del tiempo ","http://es.web.img3.acsta.net/pictures/14/02/07/12/02/498665.jpg")');
		sql.executeSql('insert into videos values(2,"Volver al Futuro ","https://ugc.kn3.net/i/origin/https://esp.rt.com/actualidad/public_images/2015.10/article/562697fec461881a048b461b.jpg")');
		sql.executeSql('insert into videos values(3,"Matrix ","https://pics.filmaffinity.com/the_matrix-155050517-large.jpg")');
		sql.executeSql('insert into videos values(4,"Matar o morir ","http://www.locopelis.com/files/uploads/11489.jpg")');
		sql.executeSql('insert into videos values(5,"Bad boys ","http://is4.mzstatic.com/image/thumb/Video/v4/fd/a2/e4/fda2e47c-bf43-1c8d-02fd-4d4b9416d380/source/1200x630bb.jpg")');
		sql.executeSql('insert into videos values(6,"El contador ","https://i.ytimg.com/vi/UDCvnh3QZhE/movieposter.jpg")');
		sql.executeSql('insert into videos values(7,"Xmen ","http://cdn-static.denofgeek.com/sites/denofgeek/files/2017/04/x-men.jpg")');
		sql.executeSql('insert into videos values(8,"Un verano para recordar ","http://es.web.img3.acsta.net/c_215_290/pictures/16/08/26/17/38/293741.jpg")');
		sql.executeSql('insert into videos values(9,"Constantine ","http://www.cliver.tv/img/peliculas/1783_min.jpg")');
		
	});
	this.selectAll();
}
 selectAll(){
	var db=this.initDb();
	db.transaction(function(query){
		query.executeSql("select name,url from videos",[],function(query,result){
			var filas=result.rows.length;
			var write=document.getElementById("ulAllImagesBuscar");
			var txt=document.getElementById("ulAllImages");
			//alert(result.rows.item(0).url);
			for(var i=0;i<filas;i++){
			var li=document.createElement("li");
			var span=document.createElement("span");
			var p=document.createElement("p");
			li.className="itemsAllImagenBuscar";
			span.className="iconAdd";
			p.innerText=result.rows.item(i).name;
			li.appendChild(p);
			li.appendChild(span);
			write.appendChild(li);
			
			var li1=document.createElement("li");
			var img=document.createElement("img");
			var p1=document.createElement("p");
			li1.className="itemsAllImagen";
			img.className="imgAllItem";
			img.src=result.rows.item(i).url;
			p1.innerText=result.rows.item(i).name;
			li1.appendChild(img);
			li1.appendChild(p1);
			txt.appendChild(li1);
			}
		});
		
	});
}

 initDb(){
	return window.openDatabase("mydb","1.0","db sql", 2 * 1024 * 1024);
	
}
}
