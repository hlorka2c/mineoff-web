const serverDOM = document.querySelector('.offer__inner-server'),
    modalDOM = document.querySelector('.modal'),
    activeServerDOMClass = 'offer__inner-server--active',
    activeModalClass = 'modal--active';

serverDOM.addEventListener('click', function (event) {
    setTimeout(showModal(modalDOM), 500);
    event.target.classList.add(activeServerDOMClass);
    document.body.style.overflow = 'hidden';

    const closeDOM = modalDOM.querySelector('.modal__header-close');
    closeDOM.addEventListener('click', function () {
        hideModal(modalDOM);
        serverDOM.classList.remove(activeServerDOMClass)
        document.body.style.overflow = '';
    })
});

function showModal(modal) {
    modal.classList.add(activeModalClass);
}

function hideModal(modal) {
    modal.classList.remove(activeModalClass);
}