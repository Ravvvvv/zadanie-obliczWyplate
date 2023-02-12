$(document).ready(function () {

    const btnSum = $('#count-sum');
    btnSum.click(function () {

        console.log($('.salary'))
        let szukajTu = ($('.salary'))
        let suma = 0
        Array.from(szukajTu).forEach(function (salary, index) {
            console.log(salary.innerText)


            suma += +salary.innerText

           $('span').eq(15).html(suma)
         

        })





        console.log(suma)
        // kolekcja nie ma wbudowanej obslugi petli for each i trzeba zrobic arrayfrom

        // console.log(('szukajTu#employees.person[0]').html())
        // $(this).find('.salary')
        // console.log($(this).find('.salary'))

    })
    // szukajTu




});
