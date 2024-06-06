function calculateReturn() {
    // values from form W-2
    const w1 = parseInt(document.getElementById('w2-1').value);
    const w2 = parseInt(document.getElementById('w2-2').value);
    const w17 = parseInt(document.getElementById('w2-17').value);
    // values from 1040-NR
    const s2 = parseInt(document.getElementById('1040-S-2').value);
    const s7a = parseInt(document.getElementById('1040-S-7a').value);
    const s10 = parseInt(document.getElementById('1040-S-10').value);
    const s17a = parseInt(document.getElementById('1040-S-17a').value);
    // expenses
    const e1 = parseInt(document.getElementById('supp-equip').value);
    const e2 = parseInt(document.getElementById('books-expense').value);
    const e3 = parseInt(document.getElementById('course-fees').value);
    const et = e1 + e2 + e3;
    // other variables
    const X = s2 - et;
    const Y = w1 + X;
    const Z = Y - w17;
    const A = w2 + s7a;
    const B = A - 2879;

    // save the data
    sessionStorage.setItem('w1', w1);
    sessionStorage.setItem('w2', w2);
    sessionStorage.setItem('w17', w17);
    sessionStorage.setItem('s2', s2);
    sessionStorage.setItem('s7a', s7a);
    sessionStorage.setItem('et', et);
    sessionStorage.setItem('X', X);
    sessionStorage.setItem('Y', Y);
    sessionStorage.setItem('Z', Z);
    sessionStorage.setItem('A', A);
    sessionStorage.setItem('B', B);

    window.location.href = 'review.html'
}

const calcButton = document.querySelector('.form-submit');
calcButton.addEventListener('click', calculateReturn);