let title = [`Black Veil Brides`, `Andy Black`, `Stray Kids`, `Александр Рыбак`]
let img = [`black_veil_brides`, `andy_black`, `stray_kids`, `ribak`]

for (let i = 0; i < title.length; i++) {
    document.querySelector(`#cards`).innerHTML += `
    <card>
        <a href="album.html?i=${i}">
            <img src="assets/${img[i]}.jpg" height="300" width="300" alt="${title[i]}">
            <h3>${title[i]}</h3>
        </a>
    </card>
    `
}