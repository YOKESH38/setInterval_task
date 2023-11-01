let output = document.getElementById("welcome_out")
		let increment=0;
		function add(){
		increment++;
		let value=document.createElement("p");
		output.appendChild(value);
		value.innerHTML="welcome to family...";
		}
		 let stop=setInterval(()=>{
		 if (increment==5){
		 clearInterval(stop);
		 }
		 else{
		 add()
		 }
		 },1000)