window.addEventListener('load', () => {
    link_active()
})

const link_active = () => {
    let links_topico = document.querySelectorAll('.link_topico')

    for(let i = 0; i < links_topico.length; i++) {
        // links_topico[i].classList.remove('active')

        links_topico[i].addEventListener('click', () => {
            for (let i_link_all = 0; i_link_all < links_topico.length; i_link_all++) {
                links_topico[i_link_all].classList.remove('active')
            }

            links_topico[i].classList.toggle('active')
        })
    }

}