let htmlResponse;


function redirectFunction(){
    htmlResponse = '';
    let userDate = [];
    let selectedOption = document.getElementById('function').value;
    if(selectedOption != 'Data_Atual'){
        userDate[0] = tratarData(document.getElementById('firstDate').value);
        userDate[1] = tratarData(document.getElementById('secDate').value);
    }
    if(selectedOption){
        switch (selectedOption){
            case 'Maior_Data':
                let mDate = maiorData(userDate[0],userDate[1]);
                htmlResponse = `<span>A maior data será: ${mDate}</span>`;
                break;
            case 'Diferenca_Data':
                let difDate = diferencaData(userDate[0],userDate[1]);
                if(!difDate){
                    htmlResponse = `<span>A Primeira Data deve ser menor que a Segunda Data</span>`;
                } else {
                    htmlResponse = `<span>A Diferença é de: ${difDate} dias</span>`
                }
                break;
            case 'Data_Atual':
                let stringDate = atualFormatada();
                htmlResponse = `<span>A Data Atual Formatada: ${stringDate}</span>`
                break;
        }
    }
    adicionarResposta();
}

function adicionarResposta(){
    divHTML = document.getElementById('result-cont');
    divHTML.innerHTML = htmlResponse;
}

function tratarData(stringDate){
    if(!!stringDate){
        formatedDate = stringDate.split('-');
        return new Date(formatedDate[0],formatedDate[1],formatedDate[2]);
    } else {
        confirm('Não informada Data em um dos campos!');
    }
    return null;
}

function maiorData(date1,date2){
    let mDate;
    if(date1 > date2){
        mDate = date1;
    } else {
        mDate = date2
    }
    return mDate;
}

function diferencaData(date1,date2){
    if(maiorData(date1,date2) != date2){
        return null;
    }
    let difTime = Math.abs(date2.getTime() - date1.getTime());
    let difDate = Math.ceil(difTime / (1000 * 3600 * 24)); 
    return difDate;
}

function atualFormatada(){
    let date = new Date(Date.now());
    let stringDate = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
    return stringDate;
}