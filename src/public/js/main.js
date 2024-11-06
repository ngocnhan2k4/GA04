const user = document.querySelector("[user]");
if (user) {
    const ul = document.querySelector(".page__list");
    //sửa style của ul margin right 20px
    ul.style.marginRight = "20px";
    //thêm bên cạnh nó 1 thẻ p
    const p = document.createElement("p");
    //thêm style cho thẻ p margin right auto
    p.style.marginRight = "auto";
    //thêm nội dung cho thẻ p
    p.innerHTML =
        "Xin chào <strong>" +
        user.getAttribute("user") +
        "</strong>" +
        "đến với trang web của chúng tôi";
    //thêm class cho thẻ p
    p.classList.add("User");
    //thêm thẻ p bên cạnh ul node anh em
    ul.insertAdjacentElement("afterend", p);
    //xóa thẻ user
    user.remove();
}
