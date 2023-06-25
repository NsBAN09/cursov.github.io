function change_style(){
    let card_num = document.getElementById(`card_num`).value
    let card_color = document.getElementById(`card_color`).value
    document.getElementById(`card_${card_num}`).setAttribute("style",`color:${card_color};`)
    let card_bg = document.getElementById(`card_bg`).value
    document.getElementById(`card_${card_bg}`).setAttribute("style",`bg:${card_bg};`)
}