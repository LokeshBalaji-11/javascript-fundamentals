document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('Student-registrationForm');

    const student_nameInput = document.getElementById('Student name');

    const emailInput = document.getElementById('student email');

    const passwordInput = document.getElementById('password');

    const phone_NumberInput = document.getElementById('Phone Number');

    const AddressInput = document.getElementById('Address');

    const usernameError = document.getElementById('StudentnameError');

    const emailError = document.getElementById('studentemailError');

    const passwordError = document.getElementById('passwordError');

    const Address = document.getElementById('AdressError');

    const Phone_Number = document.getElementById('phonenumberError');


    form.addEventListener('submit', function(event) {

        event.preventDefault();

        let isValid = true;
        usernameError.textContent = '';

        emailError.textContent = '';

        passwordError.textContent = '';

        Address.textContent = '';

        Phone_Number.textContent = '';


        if (student_nameInput.value.trim() === '') {

            usernameError.textContent = 'Username is required.';

            isValid = false;

        } else if (student_nameInput.value.trim().length < 3) {

            usernameError.textContent = 'Username must be at least 3 characters.';

            isValid = false;

        }


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === '') {

            emailError.textContent = 'Email is required.';

            isValid = false;

        } else if (!emailPattern.test(emailInput.value.trim())) {

            emailError.textContent = 'Please enter a valid email address.';

            isValid = false;

        }

        if (passwordInput.value.trim() === '') {

            passwordError.textContent = 'Password is required.';

            isValid = false;

        } else if (passwordInput.value.trim().length < 6) {

            passwordError.textContent = 'Password must be at least 6 characters.';

            isValid = false;

        }
        if (phone_NumberInput.value.trim() === '') {

            Phone_Number.textContent = 'Phone number is required.';

            isValid = false;

        } else if (phone_NumberInput.value.trim().length !== 10) {

            Phone_Number.textContent = 'Phone number must be 10 digits.';

            isValid = false;

        }


        if (AddressInput.value.trim() === '') {

            Address.textContent = 'Address is required.';

            isValid = false;

        }


        if (isValid) {

            alert('Form submitted successfully!');

            form.reset();

        }

    });

});