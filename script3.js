window.onload = function() {
    // retrieve the data 
    const w1 = sessionStorage.getItem('w1');
    const w2 = sessionStorage.getItem('w2');
    const w17 = sessionStorage.getItem('w17');
    const s2 = sessionStorage.getItem('s2');
    const s7a = sessionStorage.getItem('s7a');
    const et = sessionStorage.getItem('et');
    const X = sessionStorage.getItem('X');
    const Y = sessionStorage.getItem('Y');
    const Z = sessionStorage.getItem('Z');
    const A = sessionStorage.getItem('A');
    const B = sessionStorage.getItem('B');
    
    // output the refund amount
    document.querySelector('.refund-owe-status').textContent = `Your refund is $${B}!`;
    
    // output filing instructions
    document.querySelector('.nr-1040-2').appendChild(document.createTextNode(`$${w1}`));
    document.querySelector('.nr-1040-4').appendChild(document.createTextNode(`$${w1}`));
    document.querySelector('.nr-1040-6').appendChild(document.createTextNode(`$${X}`));
    document.querySelector('.nr-1040-7').appendChild(document.createTextNode(`$${Y}`));
    document.querySelector('.nr-1040-9').appendChild(document.createTextNode(`$${Y}`));
    document.querySelector('.nr-1040-10').appendChild(document.createTextNode(`$${w17}`));
    document.querySelector('.nr-1040-11').appendChild(document.createTextNode(`$${Z}`));
    document.querySelector('.nr-1040-12').appendChild(document.createTextNode("$2879"));
    document.querySelector('.nr-1040-14').appendChild(document.createTextNode(`$${w2}`));
    document.querySelector('.nr-1040-16').appendChild(document.createTextNode(`$${s7a}`));
    document.querySelector('.nr-1040-18').appendChild(document.createTextNode(`$${A}`));
    document.querySelector('.nr-1040-19').appendChild(document.createTextNode(`$${B}`));

    document.querySelector('.sch1-3').appendChild(document.createTextNode(`$${B}`));
    document.querySelector('.scha-2').appendChild(document.createTextNode(`$${w17}`));
    document.querySelector('.scha-4').appendChild(document.createTextNode(`$${w17}`));
    

}