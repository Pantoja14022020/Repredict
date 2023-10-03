const vias_res = document.querySelector('.vias_res');
const a_que_atribuye = document.querySelector('#a_que_atribuye');

vias_res.addEventListener('change', e => {
    if(e.target.value == 1){
        a_que_atribuye.classList.remove('hide-question');
    }else{
        a_que_atribuye.classList.add('hide-question');
    }
});


const padecio_covid = document.querySelector('.padecio_covid');
const hospitalizacion = document.querySelector('#hospitalizacion');

padecio_covid .addEventListener('change', e => {
    if(e.target.value == 1){
        hospitalizacion.classList.remove('hide-question');
    }else{
        hospitalizacion.classList.add('hide-question');
    }
});