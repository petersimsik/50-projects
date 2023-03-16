const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateTarget = () => {
        const target = +counter.getAttribute('data-target');
        const actualNumber = +counter.innerText;
        const increment = target / 100;

        if (actualNumber < target) {
            counter.innerText = `${Math.ceil(actualNumber + increment)}`;
            setTimeout(updateTarget, 1);
        }
        else
            counter.innerText = target;

    }

    updateTarget();
});