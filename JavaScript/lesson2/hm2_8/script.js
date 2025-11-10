// #UMoNq4biWGe – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let x = +prompt('enter a number between 1 and 31');

if (x > 0 && x <= 10) {
    console.log('1');
} else if (x > 10 && x <= 20) {
    console.log('2');
} else if (x > 20 && x <= 31) {
    console.log('3');
}
