function openModalView() {
    Swal.fire({
        title: "Оставьте отзыв",
        html:
            '<div > <input type="text" id="username" class="swal2-input" placeholder="Введите имя"></input>' +
            '<input  class="swal2-input" placeholder="Введите сообщение"></input> <p>Выберите фото</p> <input type="file" ></input></div>',
        confirmButtonText: "Отправить отзыв",
    }).then(() => {
        Swal.fire("Спасибо!", "Ваш отзыв был отправлен.", "success");
    });
}

let name = document.getElementById("name");
let phone = document.getElementById("phone");

function setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
}

$("#order_form").on("submit", function (e) {
    let formData = {
        name: name.value,
        phone: phone.value,
    };

    setWithExpiry("myKey", formData, 20000);
});