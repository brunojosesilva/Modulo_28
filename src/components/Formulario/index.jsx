import { useState } from "react";

const Formulario = () => {
    const [peso, setPeso] = useState('');
    let [altura, setAltura] = useState('');
    const [estadoResultado, setResultado] = useState(false);

    function calculaIMC() {
        const alturaCorrigida = parseFloat(altura);
        const pesoCorrigido = parseFloat(peso);
        const alturaMetros = alturaCorrigida <= 3 ? alturaCorrigida : alturaCorrigida / 100;
        const valorIMC = pesoCorrigido / (alturaMetros ** 2);

        if (valorIMC < 18.5) return 'Abaixo do peso';
        if (valorIMC < 24.9) return 'Peso normal';
        if (valorIMC < 29.9) return 'Sobrepeso';
        if (valorIMC < 34.9) return 'Obesidade grau 1';
        if (valorIMC < 39.9) return 'Obesidade grau 2';
        return 'Obesidade grau 3';
    }

    return (
        <div className="container">
            <h1>Informe os dados para calculo do IMC</h1>
            <div>
                <label className="form-label">Informe o peso:</label>
                <input className="form-control mb-3" type="number" placeholder="Informe o peso" required onChange={e => setPeso(parseInt(e.target.value))}/>
            </div>
            <div>
                <label className="form-label">Informe a altura:</label>
                <input className="form-control mb-3" type="number" placeholder="Informe a altura" required onChange={e => setAltura(parseInt(e.target.value))}/>
            </div>
            <button className="btn btn-dark mb-3" onClick={() => setResultado(!estadoResultado)}>Calcular</button>
            {estadoResultado && (
                <h2>{calculaIMC()}</h2>
            )}
        </div>
    )
}

export default Formulario;