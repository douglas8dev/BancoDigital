var nomeUsuario = prompt('Digite seu nome:')
		alert('Olá ' + nomeUsuario + ' é um prazer ter você por aqui!')

		var saldo = 100.5; //Float
		var extrato = [] =  "EXTRATO\n"
		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Depósito 4.) Saque 5.) Transferência 6.) Sair'));

			switch(escolha) {
				
				case 1:
				ver_saldo();
				break;

				case 2:
				senha();
				alert(extrato);
				break;

				case 3:
				senha();
				fazer_deposito();
				break;

				case 4: 
				senha();
				fazer_saque();
				break;
				
				case 5: 
				senha();
				fazer_transferencia();
				break;
			
				case 6:
				sair();
				break;

				default: erro();
				break;
			}
		}		

		function ver_saldo() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número:');
				fazer_deposito();
			}else if(deposito <= 0)
				alert('Operação não autorizada');
			else {
				saldo += deposito;
				extrato += deposito + 'R$ valor depositado \n'
				ver_saldo();
			}
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			if (isNaN(saque) || saque === '') {
				alert('Por favor, informe um número:');
				fazer_saque();
			}else if(saque > saldo || saque <= 0){
				alert('Operação não autorizada')
				fazer_saque();
			}else {
				saldo -= saque;
				extrato += deposito + 'R$ valor sacado \n'		
				ver_saldo();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function fazer_transferencia() {
			
			do{
				var conta = parseInt(prompt('Digite o número da conta a ser enviado:'));
				if(isNaN(conta))
				alert('Digite apenas números!');
			}while(isNaN(conta))
			
			do{
				var transferencia = parseFloat(prompt('Digite o valor a ser enviado para a conta: ' + conta));
				if(isNaN(transferencia)){
					alert('Operação não autorizada, digite apenas números!');
				}else if(transferencia <= 0){
					alert('Operação não autorizada, escolha um valor acima de 0!')
				}else if(transferencia > saldo){
					alert('Operação não autorizada, você não tem saldo o suficiente')
				}
					
			}while(isNaN(transferencia) || transferencia <= 0 || transferencia > saldo);

			saldo -= transferencia;
			extrato += transferencia + 'R$ Valor transferido'
			alert('Você transferiu ' + transferencia + 'R$ Para a conta ' + conta)
		}
		
		
		
		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				window.close();
			} else {
				inicio();
			}
		}

		function senha(){
			var senha = prompt('digite a senha:') ;

			if( senha != '3589'){
				alert('A senha está incorreta')
				senha()
			}else{
				alert('A senha está correta, pode fazer a operação')
			}
		}
		
		inicio();