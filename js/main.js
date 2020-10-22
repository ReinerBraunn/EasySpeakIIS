$( '#cd-dropdown' ).dropdown();

document.querySelector(`body`).onload = () => {
    console.log(localStorage.getItem(`theme`));
    if(localStorage.getItem(`theme`) != undefined){
        if(localStorage.getItem(`theme`) == `black`){
            DarkTheme();
        }else{
            LightTheme();
        }
    }else{
        return;
    }
}

changeTheme = () => {
    if(localStorage.getItem(`theme`) != undefined){
        if(localStorage.getItem(`theme`) == `black`){
            localStorage.setItem(`theme`, `white`);
            LightTheme();
        }else{
            localStorage.setItem(`theme`, `black`);
            DarkTheme();
        }
    }else{
        localStorage.setItem(`theme`, `black`);
        DarkTheme();
    }
}

DarkTheme = () => {
    $(`.navbar-brand span`).css({"color" : `#8D8DFF`}) //Надпись Easy в шапке
    $(`.navbar-brand p`).css({"color" : `#B5B2FF`}) //  надпись language courses
    $(`.nav-link`).css({"color" : `#757575`}) // Навигация в шапке
    $(`.top_sec h1`).css({"color" : `#171B27`}) // Надпись учиться никогда не поздно
    $(`.top_sec p`).css({"color" : `#B5B5B5`}) // Надпись Выучи анлийский язык вместе с EasySpeak
    $(`.middle_sec`).css({"background" : `#171B27`}) // Фон секции о нас
    $(`.middle_sec .info`).css({"background-color" : `#BBD2FF`}) // Фон блока с текстом
    $(`.middle_sec h1`).css({"color" : `#171B27`}) // Заголовок текста
    $(`.middle_sec p`).css({"color" : `#222327`}) // Параграфы блока
    $(`.courses .upper`).css({"background" : `linear-gradient(to bottom right, #11224D, #070F24)`}) //Фон информации о курсе
    $(`.courses .upper h1`).css({"color" : `#B5B5B5`}) //Надпись Мы предлагаем ... курсов английского языка
    $(`.courses .upper h1 span`).css({"color" : `#B370FF`}) //Надпись широкий спектр
    $(`.courses p`).css({"color" : `#B5B5B5`}) //Описание курсов вне блоков с ценой
    $(`.courses p span`).css({"color" : `#B370FF`}) //Выделение EasySpeak в описании
    $(`.baseng_top`).css({"color" : `#000`, "background-color" : `#3E3ED3`}) //Правый и левый верхние блоки с ценой
    $(`.baseng_top_middle`).css({"color" : `#CCD5E5`, "background-color" : `#00A89D`}) //верхушка Средний верхний блок с ценой
    $(`.baseng_title p`).css({"color" : `#091732`}) //Описание для кого курс в блоке
    $(`.baseng_opportunities p`).css({"color" : `#00153E`}) // Пройдя курс вы сможете:
    $(`.baseng_list li`).css({"color" : `#091732`}) //Список возможностей во всех блоках
    $(`.fa-check-circle`).css({"color" : `#3E3ED3`}) // Правый и левый верхние, средний нижний блок с ценой галочки
    $(`.fa-check-circle.middle_list`).css({"color" : `#00A89D`}) //Правый и левый ниэний, средний верхний блок с ценой галочки
    $(`.baseng .row > .col, .baseng .row [class^="col-"]`).css({"background-color" : `#CCD5E5`}) //фон верхних блоков с ценой
    $(`.baseng_price`).css({"color" : `#3E3ED3`}) //Правый и левый верхние, нижний средний блоки с ценой (цена)
    $(`.baseng_price.middle_list`).css({"color" : `#00A89D`}) //Средний верхний, правый и левый нижние блоки с ценой (цена)
    $(`.courses .mid`).css({"background" : `#171B27`}) //Средний фон между курсами
    $(`.courses .bottom`).css({"background" : `linear-gradient(to bottom right, #11224D, #070F24)`}) //Нижний фон после курсов
    $(`.bottom .uptexto h1`).css({"color" : `#B5B5B5`}) //Надпись "также у нас есть эксклюзивные курсы"
    $(`.bottom .uptexto span`).css({"color" : `#B370FF`}) // Надпись"детей и подростков"
    $(`.baseng .row > .col, .baseng .row [class^="col-"].middle.children`).css({"color" : `#000`, "background-color" : `#CCD5E5`}) // Фон нижнего среднего блока с ценой
    $(`.baseng .row > .col, .baseng .row [class^="col-"].first.children`).css({"color" : `#000`, "background-color" : `#CCD5E5`}) //Фон нижнего левого блока с ценой
    $(`.baseng .row > .col, .baseng .row [class^="col-"].third.children`).css({"color" : `#000`, "background-color" : `#CCD5E5`}) //Фон нижнего правого блока с ценой
    $(`.baseng_top_middle.children`).css({"color" : `#000`, "background-color" : `#3E3ED3`}) //Верхушка нижнего среднего блока с ценой
    $(`.baseng_top.children`).css({"color" : `#CCD5E5`, "background-color" : `#00A89D`}) //Верхушки правого и левого нижних блоков с ценой
    $(`.section-form`).css({"background" : `#171B27`}) //Фон блока с регистрацией
    $(`.section-form h2`).css({"color" : `#78A6FF`}) // Текст "хотите записаться уже сейчас?"
    $(`.section-form h3`).css({"color" : `#78A6FF`}) // Текст "Отправьте заявку и мы Вам перезвоним"
    $(`.section-form p`).css({"color" : `#ABABAB`}) // Текст "Наши менеджеры свяжуться с Вами в ближайшее время для уточнения деталей и времени проведения занятий по выбранному Вами курсу."
    $(`.footer`).css({"background" : `#818197`}) //Цвет подвала
    $(`.footer h1`).css({"color" : `#000`}) //Текст"Наши контакты, филиалы и почта"
    $(`.footer p`).css({"color" : `#000`}) //Номера телефонов, почта и адреса
    $(`.footer .branch span`).css({"color" : `#9C0073`}) // Текст первого адреса (Киев)
    $(`.socialnetworks a`).css({"color" : `#000`}) //Цвет иконок соц-сетей
    $(`.footer h3`).css({"color" : `#000`}) // All rights reserved
    $(`.footer h4`).css({"color" : `#333333`}) // Whose site
}

LightTheme = () => {
    $(`.navbar-brand span`).css({"color" : `#3E3ED3`})
    $(`.navbar-brand p`).css({"color" : `#757575`})
    $(`.nav-link`).css({"color" : `#757575`})
    $(`.top_sec h1`).css({"color" : `#3E3ED3`})
    $(`.top_sec p`).css({"color" : `#fff`})
    $(`.middle_sec`).css({"background" : `linear-gradient(to bottom right, #fff, rgb(219, 219, 219))`})
    $(`.middle_sec .info`).css({"background-color" : `#F3F5F9`})
    $(`.middle_sec h1`).css({"color" : `#3E3ED3`})
    $(`.middle_sec p`).css({"color" : `#5B5C63`})
    $(`.courses .upper`).css({"background" : `linear-gradient(to bottom right, #11224D, #070F24)`})
    $(`.courses .upper h1`).css({"color" : `#fff`})
    $(`.courses .upper h1 span`).css({"color" : `#04DED0`})
    $(`.courses p`).css({"color" : `#9E9E9E`})
    $(`.courses p span`).css({"color" : `#FFFFFF`})
    $(`.baseng_top`).css({"color" : `#F3F5F9`, "background-color" : `#3E3ED3`})
    $(`.baseng_top_middle`).css({"color" : `#091732`, "background-color" : `#04DED0`})
    $(`.baseng_title p`).css({"color" : `#091732`})
    $(`.baseng_opportunities p`).css({"color" : `#091732`})
    $(`.baseng_list li`).css({"color" : `#091732`})
    $(`.fa-check-circle`).css({"color" : `#3E3ED3`})
    $(`.fa-check-circle.middle_list`).css({"color" : `#04DED0`})
    $(`.baseng .row > .col, .baseng .row [class^="col-"]`).css({"background-color" : `#fff`})
    $(`.baseng_price`).css({"color" : `#3E3ED3`})
    $(`.baseng_price.middle_list`).css({"color" : `#04DED0`})
    $(`.courses .mid`).css({"background" : `linear-gradient(to bottom right, #fff, rgb(219, 219, 219))`})
    $(`.courses .bottom`).css({"background" : `linear-gradient(to bottom right, #11224D, #070F24)`})
    $(`.bottom .uptexto h1`).css({"color" : `#fff`})
    $(`.bottom .uptexto span`).css({"color" : `#04DED0`})
    $(`.baseng .row > .col, .baseng .row [class^="col-"].middle.children`).css({"color" : `#fff`, "background-color" : `#fff`})
    $(`.baseng .row > .col, .baseng .row [class^="col-"].first.children`).css({"color" : `#fff`, "background-color" : `#fff`})
    $(`.baseng .row > .col, .baseng .row [class^="col-"].third.children`).css({"color" : `#fff`, "background-color" : `#fff`})
    $(`.baseng_top_middle.children`).css({"color" : `#F3F5F9`, "background-color" : `#3E3ED3`})
    $(`.baseng_top.children`).css({"color" : `#091732`, "background-color" : `#04DED0`})
    $(`.section-form`).css({"background" : `linear-gradient(to bottom right, #fff, rgb(219, 219, 219))`})
    $(`.section-form h2`).css({"color" : `#3E3ED3`})
    $(`.section-form h3`).css({"color" : `#3E3ED3`})
    $(`.section-form p`).css({"color" : `#5B5C63`})
    $(`.footer`).css({"background" : `#020213`})
    $(`.footer h1`).css({"color" : `#fff`})
    $(`.footer p`).css({"color" : `rgb(109, 102, 102)`})
    $(`.footer .branch span`).css({"color" : `#04B7C4`})
    $(`.socialnetworks a`).css({"color" : `rgb(165, 165, 165)`})
    $(`.footer h3`).css({"color" : `#A5A5A5`})
    $(`.footer h4`).css({"color" : `#707070`})
}

document.getElementById(`Sign up`).addEventListener(`mouseover`, () => {
  document.getElementById(`Sign up`).style.color = `#04DED0`;
})

document.getElementById(`Sign up`).addEventListener(`mouseout`, () => {
  document.getElementById(`Sign up`).style.color = `#707070`;
})



document.getElementById(`checkButton`).onclick = () => {
  let status = 1
  const name = document.getElementById(`name`).value

  if(name.length < 2 || /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-']+[a-zA-Zа-яА-Я']?$/u.test(name) == false) {
    showValidate(`name`, 0)
    status = 0
  } else {
    hideValidate(`name`, 0)
  }

  const email = document.getElementById(`email`).value
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
    showValidate(`email`, 1)
      status = 0
  } else {
    hideValidate(`email`, 1)
  }

  const number = document.getElementById(`number`).value
  if(/((\+)?\b(8|38)?(0[\d]{2}))([\d-]{5,8})([\d]{2})/.test(number) == false) {
    showValidate(`number`, 2)
    status = 0
  } else {
    hideValidate(`number`, 2)
  }

  if(status == 1) {
    alert('Регистрация прошла успешно.')
  }

  if(status == 0) {
    alert('По крайней мере одно из полей было введено некорректно.')
  }
}

showValidate = (id, num) => {
  document.querySelectorAll(`.form-control`)[num].style.borderBottom = `3px solid #3E3ED3`
  const name = document.getElementById(id).style.color = `#3E3ED3`
}

hideValidate = (id, num) => {
  document.querySelectorAll(`.form-control`)[num].style.borderBottom = `3px solid #04DED0`
  document.getElementById(id).style.color = `black`
}

const anchors = document.querySelectorAll('a[href^="*"]')
for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault()
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}

