function chengeTheme() {
    const btnChangeTheme = document.getElementById('change-theme');
    const h1 = document.getElementsByTagName('h1');
    const allText = document.querySelectorAll('.tl_article .tl_article_content .ql-editor *');
    if (btnChangeTheme.value == 'Тёмная тема') {
        document.body.style.background = "black";
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.color = "white";
        }
        for (var i = 0; i < allText.length; i++) {
			allText[i].style.color = "white";
		}
        btnChangeTheme.value = "Светлая тема";
        input.style.cssText = `width: 140px;
        height: 40px;
        color: #000000;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
        background: rgb(255,255,255);
        background: linear-gradient(156deg, rgba(255,255,255,1) 0%, rgba(252,252,252,1) 43%, rgba(84,84,84,1) 84%, rgba(0,0,0,1) 100%);`;
    } else {
        document.body.style.background = "white";
        for (let i = 0; i < h1.length; i++) {
            h1[i].style.color = "black";
        }
        for (var i = 0; i < allText.length; i++) {
			allText[i].style.color = "black";
		}
        btnChangeTheme.value = "Тёмная тема";
        input.style.cssText = `width: 140px;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
        background: rgb(2, 0, 36);
        background: linear-gradient(156deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 1) 11%, rgba(84, 84, 84, 1) 73%, rgba(171, 171, 171, 1) 100%);`;
    }
}

header = document.getElementsByTagName("header")
input = document.createElement("input");
input.type = "button";
input.id = "change-theme"
input.value = "Тёмная тема";
input.addEventListener("click", chengeTheme);
input.style.cssText = `width: 140px;
        height: 40px;
        color: #fff;
        border-radius: 5px;
        padding: 10px 25px;
        font-family: 'Lato', sans-serif;
        font-weight: 500;
        background: transparent;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        display: inline-block;
        outline: none;
        background: rgb(2, 0, 36);
        background: linear-gradient(156deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 1) 11%, rgba(84, 84, 84, 1) 73%, rgba(171, 171, 171, 1) 100%);`;
header[0].appendChild(input);