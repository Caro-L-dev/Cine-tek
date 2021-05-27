const btns = document.querySelectorAll('.btn-modal');
const facilitiesModal = document.querySelector('.bloc-modal');
const closeModal = document.querySelector('.close-modal');
const imgIndex = document.querySelector('.bloc-modal img');

btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
        /* Select the image directly with its associated data-index number */
        imgIndex.src = `Styles/ressources/img${event.target.getAttribute
        ('data-index')}-equip.jpg`;

        facilitiesModal.classList.add('active-modal');
    })
})