function calculatedTraingle(){
    const trainglebase=document.getElementById('traingle-base');
    const traingletext=trainglebase.value;
    const base=parseFloat(traingletext);
    console.log(base);

    const traingleheight= document.getElementById('traingle-height');
    const traingletext2=traingleheight.value;
    const height= parseFloat(traingletext2);
    console.log(height);

    const area=0.5*base*height;
    console.log(area);

    const traingleareaspan=document.getElementById('traingle_area');
    traingleareaspan.innerText = area;

}


// function calculatedParallelogram(){
//     const Parallelogramebase=document.getElementById('Parallelogram-base');
//     const Parallelogrametext=Parallelogramebase.value;
//     const base=parseFloat(Parallelogrametext);
//     console.log(base);

//     const Parallelogrameheight= document.getElementById('Parallelogram-height');
//     const Parallelogrametext2=Parallelogrameheight.value;
//     const height= parseFloat(Parallelogrametext2);
//     console.log(height);

//     const area=base*height;
//     console.log(area);

//     const Parallelogrameareaspan=document.getElementById('Parallelogram_area');
//     Parallelogrameareaspan.innerText = area;

// }
