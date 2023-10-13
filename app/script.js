document.addEventListener('DOMContentLoaded', () => {
    const subscribeButtons = document.querySelectorAll('.subscribe-button');
    const subscriptionForm = document.getElementById('subscription-form');

    if (subscriptionForm) {
        subscribeButtons.forEach(button => {
            button.addEventListener('click', () => {
                const plan = button.getAttribute('data-plan');
                if (subscriptionForm) {
                    subscriptionForm.style.display = 'block';
                }
            });
        });
    }
});
