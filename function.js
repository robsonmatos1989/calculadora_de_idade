function calc() {
			      if(dia.value === "" || mes.value ==="" || ano.value === ""|| dia.value < 1 || dia.value >31 || mes.value <0 || mes.value> 12){
			      	document.getElementById("resultado").innerHTML = "Por favor, reveja os dados inseridos, tem algo errado ou faltando.";
			      }
			      else{
				      dia = parseInt(document.getElementById("dia").value);
				      mes = parseInt(document.getElementById("mes").value) - 1; /*Meses são indexados de 0 a 11, sendo janeiro como o mês 0 e dezembro como mês 11*/
				      ano = parseInt(document.getElementById("ano").value);


				      dataNascimento = new Date(ano, mes, dia);
				      hoje = new Date();

				      idade = hoje.getFullYear() - dataNascimento.getFullYear();
				      difMeses = hoje.getMonth() - dataNascimento.getMonth();
				      difDias = hoje.getDate() - dataNascimento.getDate();

				      /*Aqui é verificado se a data de aniversário ainda não ocorreu neste ano*/
				      if (difMeses < 0 || (difMeses === 0 && difDias < 0)) {
				        idade--;
				      }

				      /*Aqui é verificado se já passou o mês de aniversário neste ano*/
				      if (difMeses < 0) {
				        difMeses += 12;
				      }

				      /*Aqui é verificado se já passou o dia de aniversário neste mês*/
				      if (difDias < 0) {
				        ultimoDiaMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
				        difDias += ultimoDiaMesAnterior;
				        difMeses--;
				      }

				      /*Aqui imprime o resultado na página*/
				      
	      			document.getElementById("resultado").innerHTML = "Você tem: " +idade + " anos, " + difMeses +" meses e " + difDias + " dias de vida.";
    				}
				
			}