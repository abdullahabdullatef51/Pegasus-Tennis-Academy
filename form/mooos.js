document.getElementById('contactform').addEventListener('submit', function(event) {
    event.preventDefault();  // منع إرسال النموذج قبل التحقق
    
    let isValid = true;  // حالة التحقق
    const formControls = document.querySelectorAll('.form-control');  // جلب جميع الحقول

    // التحقق من كل الحقول
    formControls.forEach(control => {
        const input = control.querySelector('input, textarea');
        const errorSpan = control.querySelector('span');
        errorSpan.textContent = '';  // إزالة الرسالة السابقة إذا كانت موجودة
        
        // التحقق إذا كان الحقل فارغًا
        if (input.value.trim() === '') {
            isValid = false;
            errorSpan.textContent = `${input.name} is required!`;  // إضافة رسالة خطأ
            control.classList.add('error');
        } else {
            control.classList.remove('error');
        }

        // التحقق من البريد الإلكتروني
        if (input.type === 'email' && input.value.trim() !== '') {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(input.value.trim())) {
                isValid = false;
                errorSpan.textContent = 'Please enter a valid email address';
                control.classList.add('error');
            }
        }

        // التحقق من رقم الهاتف
        if (input.type === 'number' && input.value.trim() !== '') {
            if (input.value.length < 10) {  // تأكد من أن طول الرقم مناسب
                isValid = false;
                errorSpan.textContent = 'Please enter a valid phone number';
                control.classList.add('error');
            }
        }
    });

    // إذا كانت المدخلات صحيحة، يمكنك إرسال النموذج
    if (isValid) {
        alert('Supmit successfully!');
        // هنا يمكن إرسال النموذج إلى الخادم أو القيام بشيء آخر مثل تخزين البيانات
        document.getElementById('contactform').reset();  // إعادة تعيين النموذج بعد الإرسال
    }
});
