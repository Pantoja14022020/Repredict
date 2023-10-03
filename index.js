const heroContainer = document.getElementById('hero');
const modalInfo = document.getElementById('modal-info');
const formulario = document.getElementById('formulario');
const acuerdoBtn = document.getElementById('acuerdoBtn');
const btnResultados = document.getElementById('btnResultados');

setTimeout(()=>{
    heroContainer.classList.add('hide');
},3000)

setTimeout(()=>{
    modalInfo.classList.remove('hide');
    formulario.classList.remove('hide');
},3500);

if(acuerdoBtn){
    acuerdoBtn.addEventListener('click', e=> {
        modalInfo.classList.add('hide');
    });
}


btnResultados.addEventListener('click', e => {
    e.preventDefault();


    const i1 = parseInt( document.getElementById("edad").value);
    const i2 = parseInt(document.getElementsByClassName("2_i")[0].value);
    const i3 = parseInt(document.getElementsByClassName("3_i")[0].value);
    const i4 = parseInt(document.getElementsByClassName("4_i")[0].value);
    const i5 = parseInt(document.getElementsByClassName("5_i")[0].value);
    const i6 = parseInt(document.getElementsByClassName("6_i")[0].value);
    const i7 = parseInt(document.getElementsByClassName("7_i")[0].value);
    const i8 = parseInt(document.getElementsByClassName("8_i")[0].value);
    const i9 = parseInt(document.getElementsByClassName("9_i")[0].value);
    const i10 = parseInt(document.getElementsByClassName("10_i")[0].value);
    const i11 = parseInt(document.getElementsByClassName("11_i")[0].value);
    const i12 = parseInt(document.getElementsByClassName("12_i")[0].value);
    const i13 = parseInt(document.getElementsByClassName("13_i")[0].value);
    const i14 = parseInt(document.getElementsByClassName("14_i")[0].value);
    const i15 = parseInt(document.getElementsByClassName("15_i")[0].value);
    const i16 = parseInt(document.getElementsByClassName("16_i")[0].value);
    const i17 = parseInt(document.getElementsByClassName("17_i")[0].value);
    const i18 = parseInt(document.getElementsByClassName("18_i")[0].value);
    const i19 = parseInt(document.getElementsByClassName("19_i")[0].value);
    const i20 = parseInt(document.getElementsByClassName("20_i")[0].value);
    const i21 = parseInt(document.getElementsByClassName("21_i")[0].value);
    const i22 = parseInt(document.getElementsByClassName("22_i")[0].value);
    const i23 = parseInt(document.getElementsByClassName("23_i")[0].value);

    if(parseInt(i1) < 18 || parseInt(i1)>= 100 || !i1){
        const modalError = document.getElementById('modal-error');
        modalError.classList.remove('hide');
        setTimeout(()=>{
            modalError.classList.add('hide');
        },3000);
    }else{
        let entradas = {
            "edad": i1,
            "genero": i2,
            "ec": i3,
            "ocupacion": i4,
            "tresd": i5,
            "sefvr": i6,
            "ecaaqla": i7,
            "cvcspeu": i8,
            "uoafpc": i9,
            "ecarh": i10,
            "eccoccl": i11,
            "ecuoaf": i12,
            "esfhacap": i13,
            "oapb": i14,
            "oapc": i15,
            "ecraca": i16,
            "cqvuve": i17,
            "saonacctet": i18,
            "ccsa": i19,
            "hpisa": i20,
            "scmn": i21,
            "seacr": i22,
            "paecda": i23
        }

        entradas = JSON.stringify(entradas)
        
        const resultadosPrediccion = document.getElementById('resultados-prediccion');
        resultadosPrediccion.classList.remove('hide');

        $.ajax({
            url: "https://api-ec-django.onrender.com/predecirER/",
            type: 'POST',
            data: entradas,
            success: function({prediccion}) {
                const result = (prediccion == 1) ? "Positivo" : "Negativo";

                const resultInnerHTML = `
                    <div id="container-resultados">
                        <img src="./assets/virus.png" alt="virus" />
                        <p id="result-text">${result}</p>
                        <a href="index.html">Reiniciar</a>
                    </div>
                `;

                resultadosPrediccion.innerHTML = '';
                resultadosPrediccion.innerHTML = resultInnerHTML;
            },
            error: function(xhr, status, error) {
              console.log(error, xhr, status)
            }
          });


    }

    
});