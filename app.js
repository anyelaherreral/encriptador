// con el DOMContentLoaded esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
   // Obtenemos el valor del textarea al cargar la página
   let textAreaEntrada = document.getElementById('textoIngresado');

    function Fencriptar() {
        //declaramos la variable de retorno
        let resultado="";
       // Obtenemos el valor actual del textarea
       let texto = textAreaEntrada.value;

       // Verificamos si hay caracteres no permitidos
       if (alertaError(texto)) {
           // Si hay caracteres no permitidos, detenemos el proceso de encriptación
           return;
       }
        
        // Realizamos la encriptación
        // Aquí puedes implementar tu lógica de encriptación
        for (let index = 0; index < texto.length; index++) {
            let letra = texto[index];

            switch (letra) {
                case 'a':
                    resultado += 'ai';
                    break;
                case 'e':
                    resultado += 'enter';
                    break;
                case 'i':
                    resultado += 'imes';
                    break;
                case 'o':
                    resultado += 'ober';
                    break;
                case 'u':
                    resultado += 'ufat';
                    break;
                default:
                    resultado += letra;
            }  
        }

        //ocultamos el mensaje inicial
        document.getElementById('mensajeInicial').style.display ='none';
        // Mostramos el texto encriptado en el textarea de resultado
        document.getElementById('textoResultado').innerText = resultado;
        // Activamos el boton para Copiar
        activarBotonCopiar();
    }

    function Fdesencriptar() {
        let texto = textAreaEntrada.value;

       // Verificamos si hay caracteres no permitidos
       if (alertaError(texto)) {
           // Si hay caracteres no permitidos, detenemos el proceso de desencriptación
           return;
       }

        // Realizamos la desencriptación
        // Aquí puedes implementar tu lógica de encriptación
        
        texto = texto.replace(/ai/g, 'a');
        texto = texto.replace(/enter/g, 'e');
        texto = texto.replace(/imes/g, 'i');
        texto = texto.replace(/ober/g, 'o');
        texto = texto.replace(/ufat/g, 'u');

        //ocultamos el mensaje inicial
        document.getElementById('mensajeInicial').style.display ='none';
        // Mostramos el texto desencriptado en el textarea de resultado
        document.getElementById('textoResultado').innerText = texto;
        // Activamos el boton para Copiar
        activarBotonCopiar();
    }

    function alertaError(texto) {
        // Definimos la expresión regular para buscar caracteres no permitidos
        const regex=/[^a-z\s¿?¡!]/;

        // Verificamos si el texto contiene caracteres no permitidos
        if(regex.test(texto)){
            // Si hay caracteres no permitidos, mostramos la alerta y retornamos true
            alert('El texto contiene caracteres no permitidos. Por favor, ingrese solo letras minúsculas sin acentos');
            
            return true;
        }
        // Si no hay caracteres no permitidos, retornamos false
        return false;
    }

    function activarBotonCopiar() {
        document.getElementById('copiar').style.display ='block';
    }

    function copiarTexto() {
        
        let resultadoTextoSalida = document.getElementById('textoResultado').innerText;

        // Crear un elemento de textarea temporal
        let tempTextArea = document.createElement('textarea');
        tempTextArea.value = resultadoTextoSalida;

        // Añadir el textarea temporal al DOM
        document.body.appendChild(tempTextArea);

        // Seleccionar y copiar el contenido del textarea temporal
        tempTextArea.select();
        document.execCommand('copy');

        // Eliminar el textarea temporal
        document.body.removeChild(tempTextArea);

        // Mostrar una alerta para confirmar que el texto se ha copiado
        alert('Texto copiado al portapapeles');
    }
    

    // Agregamos un listener al botón de encriptar
    document.getElementById('encriptar').addEventListener('click', Fencriptar);
    // Agregamos un listener al botón de desencriptar
    document.getElementById('desencriptar').addEventListener('click', Fdesencriptar);
    // Agregamos un listener al botón de copiar
    document.getElementById('copiar').addEventListener('click', copiarTexto);
});

