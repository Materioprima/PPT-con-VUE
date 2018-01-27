var app = new Vue({
	el:'#app',	
	computed:{
		
	},
	data: {
		titulo: 'Bienvenido a Piedra, Papel, Tijeras.',
		titulaso: '',
		victorias: '0',
		maquina: '0',
		resultado: '',
		cpu: '',
		ppt: ['piedra.png','papel.png','tijeras.png','win.png','lus.png'],
		imeg: false,
		fotofin: '',
		fin: false
	},
	methods: {
		jugada: function(valor){
			this.imeg=true;
			this.cpu=Math.floor(Math.random()*3);
			let cpuplay= ', la cpu ha jugado:';
			if(valor==0 && this.cpu==2){
				this.victorias++;
				this.resultado='Has ganado'+cpuplay;
			}else if (valor==1 && this.cpu==0){
				this.victorias++;
				this.resultado='Has ganado'+cpuplay;
			}else if(valor==2 && this.cpu==1){
				this.victorias++;
				this.resultado='Has ganado'+cpuplay;
			}else if (valor==this.cpu) {
				this.resultado='Empate'+cpuplay;
			}else{
				this.maquina++;
				this.resultado='Has perdido'+cpuplay;
			}
			if(this.victorias==3){		
				this.titulo='Felicidades, has ganado a la CPU.';
				this.fotofin='3';
				this.titulaso='animation';
				this.fin=true;
			}else if(this.maquina==3){
				this.titulo='La CPU ha ganado, vuelve a intentarlo.';
				this.fotofin='4';
				this.titulaso='animation';
				this.fin=true;
			}
		},
		reseto: function() {
			this.titulo='Bienvenido a Piedra, Papel, Tijeras.';
			this.victorias= '0';
			this.maquina='0';
			this.resultado='';
			this.titulaso='';
			this.imeg=false;
			this.fin=false;
		}

	}
});