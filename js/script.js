let inpNeeds = document.querySelectorAll('.order__input')
let form = document.forms.reg
let allInps = document.querySelectorAll('.container form input')



let regex = {
    name: /^[[a-z] ,.'-]+$/g,
    phone: /(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})/g
}


function validate(regex,) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
    } else {

        field.classList.add('invalid')
    }

}

allInps.forEach(inp => {
    inp.onkeyup = () => {
        validate(regex[inp.name], inp)
    }
});

form.onsubmit = (event) => {
    event.preventDefault();
    let errorss = 0

    inpNeeds.forEach(inp => {
        if (inp.value !== "") {
            errorss++
        }
    });


    if (errorss > 0) {
        console.log('error');
    } else {
        submit(form)
    }

}


function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}


let slide = document.querySelectorAll('.offer__slide')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')


let slide_next = 0

close.onclick = () => {
    if (slide_next ===0) {
    } else {
        slide_next--
        shou_slide(slide_next)
    }

}


next.onclick = () => {
    if (slide_next === 3) {
    } else {
        slide_next++
        shou_slide(slide_next)
    }
}


function shou_slide(nc) {

    if (nc >= slide.length) {
        slide_next = 0
    }

    if (nc == -1) {
        slide_next = slide.length - 1
    }
    slide.forEach((slide) => {
        slide.style.display = "none"
    })
    slide[slide_next].style.display = "block"
    text.innerHTML = '0' + (slide_next + 1)
}

shou_slide()


