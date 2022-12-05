let data_string = `[
    {
        "id": "d001",
        "name": "NỀN KHU DÂN CƯ GẦN CHỢ TRÀ NÓC",
        "loai": "Đất",
        "hinhthuc": "bán",
        "area": "Bình thủy",
        "price": "1.85 tỷ",
        "square": "85",
        "img": [
            "./img/d001/h1.jpg",
            "./img/d001/h2.jpg"
        ]
    },
    {
        "id": "d002",
        "name": "NỀN MẶT TIỀN ĐƯỜNG HOÀNG QUỐC VIỆT",
        "loai": "Đất",
        "hinhthuc": "bán",
        "area": "Ninh Kiều",
        "price": "9.99 tỷ",
        "square": "160",
        "img": [
            "./img/d002/h1.jpg",
            "./img/d002/h2.jpg",
            "./img/d002/h3.jpg"
        ]
    },
    {
        "id": "d003",
        "name": "BÁN NỀN MẶT TIỀN ĐƯỜNG NGUYỄN VĂN QUANG KDC NAM LONG",
        "loai": "Đất",
        "hinhthuc": "bán",
        "area": "Cái Răng",
        "price": "5.6 tỷ",
        "square": "85",
        "img": [
            "./img/d003/h1.jpg",
            "./img/d003/h2.jpg",
            "./img/d003/h3.jpg"
        ]
    },
    {
        "id": "ch001",
        "name": "BÁN CĂN CHUNG CƯ HỒNG LOAN LÔ 6A SỐ HỒNG HOÀN CHỈNH",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Cái Răng",
        "price": "850 triệu",
        "square": "47",
        "img": [
            "./img/ch001/h1.jpg",
            "./img/ch001/h2.jpg",
            "./img/ch001/h3.jpg",
            "./img/ch001/h4.jpg"
        ]
    },
    {
        "id": "ch002",
        "name": "CĂN HÔ CHUNG CƯ NAM LONG - HỒNG PHÁT TẦNG 4",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Cái Răng",
        "price": "880 triệu",
        "square": "38.1",
        "img": [
            "./img/ch002/h1.jpg"  
        ]
    },
    {
        "id": "ch003",
        "name": "CĂN HỘ CHUNG CƯ LÊ HỒNG NHI PHƯỜNG BA LÁNG CÁI RĂNG CẦN THƠ",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Cái Răng",
        "price": "1.48 tỷ",
        "square": "67",
        "img": [
            "./img/ch003/h1.jpg",
            "./img/ch003/h2.jpg",
            "./img/ch003/h3.jpg",
            "./img/ch003/h4.jpg"
        ]
    },
    {
        "id": "ch004",
        "name": "CĂN HỘ CHUNG CƯ LÊ HỒNG NHI",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Cái Răng",
        "price": "1.1 tỷ",
        "square": "73",
        "img": [
            "./img/ch004/h1.jpg",
            "./img/ch004/h2.jpg",
            "./img/ch004/h3.jpg",
            "./img/ch004/h4.jpg"
        ]
    },
    {
        "id": "ch005",
        "name": "CĂN HỘ THE RIVER THỦ THIÊM",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Ninh Kiều",
        "price": "15 tỷ",
        "square": "84",
        "img": [
            "./img/ch005/h1.jpg",
            "./img/ch005/h2.jpg",
            "./img/ch005/h3.jpg"
        ]
    },
    {
        "id": "ch006",
        "name": "DÃY B TẦNG 2 CHUNG CƯ HỒNG LOAN 6A",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Cái Răng",
        "price": "850 triệu",
        "square": "47",
        "img": [
            "./img/ch006/h1.jpg",
            "./img/ch006/h2.jpg",
            "./img/ch006/h3.jpg"
        ]
    },
    {
        "id": "ch007",
        "name": "CHUNG CƯ GIÁ RẺ LÃI SUẤT THẤP",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Cái Răng",
        "price": "600 triệu",
        "square": "40",
        "img": [
            "./img/ch007/h1.jpg",
            "./img/ch007/h2.jpg",
            "./img/ch007/h3.jpg"
        ]
    },
    {
        "id": "ch008",
        "name": "NHÀ ĐẸP - VỊ TRÍ ĐẸP - LỘ RỘNG - 6M NẰM KẾ - ĐẠI HỌC CT",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Ninh Kiều",
        "price": "2 tỉ 990 triệu",
        "square": "56.52",
        "img": [
            "./img/ch008/h1.jpg",
            "./img/ch008/h2.jpg",
            "./img/ch008/h3.jpg"
        ]
    },
    {
        "id": "ch009",
        "name": "SHOPHOUSE KHU ĐÔ THỊ AN PHÚ 1 CẦN THƠ",
        "loai": "Căn Hộ",
        "hinhthuc": "bán",
        "area": "Cái Răng",
        "price": "2.92 tỉ",
        "square": "113",
        "img": [
            "./img/ch009/h1.jpg",
            "./img/ch009/h2.jpg",
            "./img/ch009/h3.jpg",
            "./img/ch009/h4.jpg"
        ]
    },
    {
        "id": "nt001",
        "name": "NHÀ TRỌ THU TRANG",
        "loai": "Nhà Trọ",
        "hinhthuc": "thuê",
        "area": "Ninh Kiều",
        "price": "1.2 triệu",
        "square": "12",
        "img": [
            "./img/nt001/h1.jpg",
            "./img/nt001/h2.jpg",
            "./img/nt001/h3.jpg"
        ]
    },
    {
        "id": "nt002",
        "name": "NHÀ TRỌ NGỌC NGÂN",
        "loai": "Nhà Trọ",
        "hinhthuc": "thuê",
        "area": "Ninh Kiều",
        "price": "1.6 triệu",
        "square": "16",
        "img": [
            "./img/nt002/h1.jpg",
            "./img/nt002/h2.jpg",
            "./img/nt002/h3.jpg"
        ] 
    },
    {
        "id": "nt003",
        "name": "NHÀ TRỌ TOÀN THẮNG",
        "loai": "Nhà Trọ",
        "hinhthuc": "thuê",
        "area": "Ninh Kiều",
        "price": "1.7 triệu",
        "square": "17",
        "img": [
            "./img/nt003/h1.jpg",
            "./img/nt003/h2.jpg",
            "./img/nt003/h3.jpg",
            "./img/nt003/h4.jpg",
            "./img/nt003/h5.jpg"   
        ] 
    },
    {
        "id": "nt004",
        "name": "NHÀ TRỌ SINH VIÊN GẦN TRƯỜNG CĐCT VÀ ĐHCT",
        "loai": "Nhà Trọ",
        "hinhthuc": "thuê",
        "area": "Ninh Kiều",
        "price": "2.5 triệu",
        "square": "20",
        "img": [
            "./img/nt004/h1.jpg",
            "./img/nt004/h2.jpg",
            "./img/nt004/h3.jpg" 
        ] 
    },
    {
        "id": "nt005",
        "name": "TRỌ HẺM 25 ĐỒNG VĂN CỐNG",
        "loai": "Nhà Trọ",
        "hinhthuc": "thuê",
        "area": "Ninh Kiều",
        "price": "2.5 triệu",
        "square": "16",
        "img": [
            "./img/nt005/h1.jpg",
            "./img/nt005/h2.jpg",
            "./img/nt005/h3.jpg" 
        ] 
    },
    {
        "id": "nt006",
        "name": "PHÒNG TRỌ GẦN CẦU GẠCH SÚC ĐƯỜNG VÕ VĂN KIỆT",
        "loai": "Nhà Trọ",
        "hinhthuc": "thuê",
        "area": "Ninh Kiều",
        "price": "2.8 triệu",
        "square": "21.5",
        "img": [
            "./img/nt006/h1.jpg",
            "./img/nt006/h2.jpg"
        ] 
    },
    {
        "id": "nt007",
        "name": "PHÒNG TRỌ GẦM ĐẠI HỌC Y DƯỢC",
        "loai": "Nhà Trọ",
        "hinhthuc": "thuê",
        "area": "Ninh Kiều",
        "price": "3.1 triệu",
        "square": "23",
        "img": [
            "./img/nt007/h1.jpg",
            "./img/nt007/h2.jpg",
            "./img/nt007/h3.jpg"
        ] 
    },
    {
        "id": "nt008",
        "name": "PHÒNG TRỌ GẦM ĐẠI HỌC KINH TẾ - KỸ THUẬT CẦN THƠ",
        "loai": "Nhà Trọ",
        "hinhthuc": "thuê",
        "area": "Ninh Kiều",
        "price": "1.9 triệu",
        "square": "18",
        "img": [
            "./img/nt008/h1.jpg",
            "./img/nt008/h2.jpg",
            "./img/nt008/h3.jpg"
        ] 
    }
]`;

let data = JSON.parse(data_string)

console.log(data)

data.forEach(element => {
    let st = `<div class="row">
    <div class="card mb-3 p-0">
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
                                <td>Giá: ${element.price}</td>
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
});