//import readlinesync = require("readline-sync"); trocamos pelo Input
import { colors } from './src/util/Colors';
import { Conta } from "./src/model/Conta";
import { Input } from "./src/util/Input";
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function main() {

    let opcao: number;

       // *** Testes da Classe Conta Corrente ***

    console.log("\nTestes - Classe Conta Corrente");

    const cc1 = new ContaCorrente(1, 5678, "Bianca", 1, 200000.00, 2000.00);

    cc1.visualizar();
  
    console.log("\nSacar 1000.00");
    console.log("\n", cc1.sacar(1000.00));

    console.log("\nSacar 200000.00");
    console.log("\n", cc1.sacar(200000.00));

    console.log("\nDepositar 500.00");
    cc1.depositar(500.00);

    cc1.visualizar();

    // *** Testes da Classe Conta Poupanca ***

    console.log("\nTestes - Classe Conta Poupança");

    const cp1 = new ContaPoupanca(2, 1234, "Paula", 1, 2000.00, 12);
     
    cc1.visualizar();

 console.log("\nSacar 1000.00");
    console.log("\n", cp1.sacar(1000.00));

    console.log("\nSacar 2100.00");
    console.log("\n", cp1.sacar(2100.00));

    console.log("\nDepositar 500.00");
    cp1.depositar(500.00);

    cp1.visualizar();

    console.log("\n");

    while (true) {

        console.log(colors.bg.black, colors.fg.yellowstrong, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO POVOO                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");    //pergunta com acento e sempre dentro do console.
        opcao = Input.questionInt("");                  //pergunta sem acento e dentro do input.

        if (opcao == 9) {
            console.log(colors.fg.magentastrong, 
                "\nBanco do Povo - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Camila Sampaio - camila.sampaiodev@gmail.com ");
    console.log("www.linkedin.com/in/camilalsampaio");
    console.log("https://github.com/CamilaSampaioo");
    console.log("*****************************************************");
}

/* Função de pausa entre as opções do menu */
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    Input.prompt();
}

main();