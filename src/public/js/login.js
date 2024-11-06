const btn = document.querySelector(".btn");

function checkValidInput(email, password) {
    if (email == "") {
        alert("Vui lòng nhập email");
        return false;
    } else if (password == "") {
        alert("Vui lòng nhập mật khẩu");
        return false;
    } else {
        return true;
    }
}

btn.addEventListener("click", async () => {
    btn.disabled = true;
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    if (!checkValidInput(email, password)) {
        alert("Nhâp thông tin đăng nhập");
        return;
    }
    try {
        let res = await fetch("/login/valid", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        res = await res.json();
        if (res.error) {
            alert("Lỗi đăng nhập");
            btn.disabled = false;
            return;
        }
        if (res.error == "!!!Email không tồn tại!!!") {
            alert("Sai thông tin đăng nhập");
            btn.disabled = false;
            return;
        }

        window.location.href = "/";
    } catch (error) {
        console.log(error);
    }
});
