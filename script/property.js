
fetch('./data.json')
    .then((response) => response.json())
    .then((d) => run(d));

let run = (data) => {
    console.log(data)
    let render = (loai, hinhthuc, area, price, square) => {
        i = 0;
        data.forEach(element => {
            let gia = undefined
            if (element.price >= 1000000000) {
                gia = element.price / 1000000000 + ' tỷ'
            }
            else if (element.price >= 1000000) {
                gia = element.price / 1000000 + ' triệu'
            }
            else {
                gia = element.price
            }
            if ((loai == 'all' || loai == element.loai) && (hinhthuc == "all" || hinhthuc == element.hinhthuc) && (area == 'all' || area == element.area) && (price == 'all' || (element.price >= firstVal(price) && element.price < secondVal(price))) && (square == 'all' || (element.square >= firstVal(square) && element.square < secondVal(square)))) {
                let st = `<div class="row">
                        <div class="card mb-3 p-0 list-items" id="${element.id}">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="${element.img[0]}" class="img-fluid rounded-start" alt="...">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">${element.name}</h5>
                                        <div class="card-text">
                                            <table>
                                                <tr>
                                                    <td><i class="fas fa-landmark"></i></td>
                                                    <td>Loại:  ${element.loai}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-money-check-alt"></i></td>
                                                    <td>Hình thức: ${element.hinhthuc}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-dollar-sign"></i></td>
                                                    <td>Giá: ${gia}</td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-expand-arrows-alt"></i></td>
                                                    <td>Diện tích: ${element.square} m<sup>2</sup></td>
                                                </tr>
                                                <tr>
                                                    <td><i class="fas fa-map-marker-alt"></i></td>
                                                    <td>Khu vực: ${element.area}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
                $('#root-d').append(st);
                i++;
            }
        });
        if (i === 0) {
            let te = `<div>Không tìm thấy</div>`;
            $('#root-d').append(te);
        }
    }
    console.log("hihi")
    var url_string = location.href;
    var url = new URL(url_string);
    var loai = (url.searchParams.get("loai")) ? url.searchParams.get("loai") : 'all';
    var hinhthuc = (url.searchParams.get("hinhthuc")) ? url.searchParams.get("hinhthuc") : 'all';
    render(loai, hinhthuc, "all", "all", "all")

    let filter = document.querySelector('#filter');

    filter.onclick = (e) => {
        e.preventDefault();

        $('#root-d').text('');
        render($('#loai').val(), $('#hinhthuc').val(), $('#area').val(), $('#price').val(), $('#square').val());
        let listItems = document.querySelectorAll('.list-items')
        console.log(listItems)
        listItems.forEach(element => {
            element.addEventListener('click', () => {
                location.href = './detail.html' + '?id=' + element.id
            })
        })
    }
    let listItems = document.querySelectorAll('.list-items')
    console.log(listItems)
    listItems.forEach(element => {
        element.addEventListener('click', () => {
            location.href = './detail.html' + '?id=' + element.id
        })
    })
}

let firstVal = (s) => {
    return parseInt(s.split(':')[0])
}
let secondVal = (s) => {
    return (parseInt(s.split(':')[1]) != -1) ? parseInt(s.split(':')[1]) : Number.MAX_VALUE;
}
