class Calculator {
    constructor () {
    //! Aqui é a propriedade que recebe os valores digitados pelo usúario
        this.displayValue = "";    
    }

    //! Este metodo adiciona valores a propriedade displayValie
    //! E em seguida chama o metodo updateDisplay para atualizar o visor(input)
    appendToDisplay (value) {
        this.displayValue += value;
        this.updateDisplay ();
    }

    //! Este metodo atualiza o visor(input) com os valores que o usuario digitou
    updateDisplay () {
        document.getElementById ("displayContent").value = this.displayValue;
    }

    //! Este metodo limpa os valores do displayValue (input) e chama o metodo updateDispaly para atualizar o visor (input)
    clearDisplay () {
        this.displayValue = "";
        this.updateDisplay ();
    }

    //!
    calculate () {
        try {
            const result = eval (this.displayValue);
            this.displayValue = result
            this.updateDisplay();
        } catch (error){
            this.displayValue = "ERROR";
            
        }
    }
}

    //! Instanciando o objeto
const calc = new Calculator ();