// ==UserScript==
// @name        New script
// @namespace   Violentmonkey Scripts
// @match       *://*.decathlon.net/*
// @grant       none
// @version     1.0
// @author      -
// @description 19:58:56 13/5/2024
// ==/UserScript==

(() => {
    function waitAndExecute() {
        const selectElement = document.querySelector('select[name="orgaId"]');
        console.log(selectElement);

        if (selectElement !== null) {
            // Lấy tất cả các tùy chọn trong phần tử <select>
            const options = selectElement.querySelectorAll('option');


            // Duyệt qua từng tùy chọn
            options.forEach(option => {
                // Kiểm tra nếu giá trị của tùy chọn là "88"
                if (option.value === "88") {
                    // Chọn tùy chọn có giá trị là "88"
                    option.selected = true;
                }
            });

            // Gửi sự kiện onchange (giả lập sự kiện đã thay đổi)
            selectElement.dispatchEvent(new Event('change'));
        }
        //console.log(selectElement);


    }

    // Hàm chờ 1.5 giây trước khi thực hiện
    setTimeout(waitAndExecute, 1500);

   async function focusInput() {
        const orderInput = document.querySelector('#orderNumberDirectAccess');
        if (orderInput) {
            orderInput.focus();
           
            //ClipboardKhông hoạt động trên firefox
            // try {
            //         const text = await navigator.clipboard.readText();
            //         // console.log(typeof text)
            //         // console.log(text.length)

            //         orderInput.value = text;

            //         //Gửi sự kiện Enter sau khi gán giá trị
            //         const enterEvent = new KeyboardEvent('keydown', {
            //             bubbles: true,
            //             cancelable: true,
            //             key: 'Enter',
            //             code: 'Enter',
            //             keyCode: 13,
            //             which: 13
            //         });
            //         if (text.length == 12) {
            //           orderInput.dispatchEvent(enterEvent);
            //         }

            //     } catch (err) {
            //         console.error('Failed to read clipboard contents: ', err);
            //     }
        }
    }

    window.addEventListener('focus', () => {

        focusInput();


    });


})();
  