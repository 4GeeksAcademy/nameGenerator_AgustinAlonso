let pronombre = ['the', 'our', 'a', 'his', 'her'];
let adjetivo = ['great', 'big', 'small', 'tiny', 'huge'];
let sustantivo = ['jogger', 'racoon', 'lion', 'tiger', 'elephant'];
let dominio =['.com', '.net', '.org', '.io']

for(let i=0; i < pronombre.length; i++){
    for(let j=0; j < adjetivo.length; j++){
        for(let k=0; k < sustantivo.length; k++){
           for(let h=0; h < dominio.length; h++){
            console.log(`${pronombre[i]}${adjetivo[j]}${sustantivo[k]}${dominio[h]}`)
           }
        }
    }
}