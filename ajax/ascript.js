

function getajax(){
		let data = new XMLHttprequest();
		data = JSON.parse(responseText);
		//data = JSON.parse(responseText);
		xttp.onreadystatechange=function(){
			if(this.readystate==4 && status == 200)
				document.getElementbyId('ajax').innerHTML =this.responseText{

					document.getElementbyId('change').innerHTML.value;
						for(int i;i<10;i++){
							document.getElementbytagName('li').value=data[i].title+ data[i].completed;
							}
				}
		}			








xttp('GET','https://jsonplaceholder.typicode.com/todos',true);
xttp.send();

}