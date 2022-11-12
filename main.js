/**
 * Function to get painting info from Chicago API
 */

 async function clickedEvent(img_index, item_index){
    // Use painting ID from img attributes to identify painting
    let painting = document.getElementsByTagName('img')[img_index].attributes[1].value

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['AIC-User-Agent', 'Coding Temple Project (andrewkraus521@gmail.com)']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${painting}`, {
        method: 'GET',
        headers: headers
    });
    let result = await fetch(request);
    let response = await result.json();

    console.log(response);

    let paintingInfo = {
        'title': response.data.title,
        'artist': response.data.artist_title,
        'date': response.data.date_display,
        'origin': response.data.place_of_origin,
        'medium': response.data.medium_display
    };

    console.log(paintingInfo);
    let figure_num = img_index + 1;

    displayInfo(paintingInfo, img_index);
}

function getPainting(id, event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0, 0);
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1, 0);
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2, 0);
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3, 0);
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4, 0);
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5, 0);
            break;
        }
    }
}

function displayInfo(info, figure_num){
    console.log(figure_num)
    target_figure = document.getElementsByTagName('figcaption')[figure_num]
    target_figure.className = 'caption_style'
    target_figure.innerHTML = `This piece is called, ${info.title} by ${info.artist}, 
    and was painted in ${info.origin ? info.origin : "unknown origin"} in ${info.date}.
        It was painted using ${info.medium.toLowerCase()}.`
}

function closeInfo(event,info,figure_num){
    target_figure = document.getElementsByTagName('figcaption')[figure_num]
    target_figure.className = 'caption_style'
    target_figure.innerHTML = ' '
}