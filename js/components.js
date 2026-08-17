/* =========================================================
   CARTÓRIO DA MOTA
   COMPONENTES GLOBAIS DO SITE
========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       LOCALIZA O COMPONENTS.JS
    ===================================================== */

    const scriptAtual =
        document.currentScript ||
        document.querySelector(
            'script[src*="components.js"]'
        );


    const scriptUrl = scriptAtual
        ? new URL(
            scriptAtual.src,
            window.location.href
        )
        : new URL(
            "/js/components.js",
            window.location.origin
        );


    const jsDirectory =
        new URL(".", scriptUrl);


    /* =====================================================
       CAMINHO DOS COMPONENTES
    ===================================================== */

    const componentPath = (arquivo) => {

        return new URL(
            `../components/${arquivo}`,
            jsDirectory
        ).href;

    };


    /* =====================================================
       HEADER
    ===================================================== */

    const headerContainer =
        document.getElementById(
            "site-header"
        );


    if (headerContainer) {

        fetch(
            componentPath("header.html")
        )

            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "Não foi possível carregar o cabeçalho."
                    );

                }

                return response.text();

            })

            .then(html => {

                headerContainer.innerHTML =
                    html;


                /* =========================================
                   INICIALIZA MENU
                ========================================== */

                iniciarMenu();

            })

            .catch(error => {

                console.error(
                    "Erro ao carregar o cabeçalho:",
                    error
                );

            });

    }


    /* =====================================================
       BARRA DE AJUDA
    ===================================================== */

    const helpContainer =
        document.getElementById(
            "site-help"
        );


    if (helpContainer) {

        fetch(
            componentPath("help.html")
        )

            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "Não foi possível carregar a barra de ajuda."
                    );

                }

                return response.text();

            })

            .then(html => {

                helpContainer.innerHTML =
                    html;

            })

            .catch(error => {

                console.error(
                    "Erro ao carregar a barra de ajuda:",
                    error
                );

            });

    }


    /* =====================================================
       FOOTER
    ===================================================== */

    const footerContainer =
        document.getElementById(
            "site-footer"
        );


    if (footerContainer) {

        fetch(
            componentPath("footer.html")
        )

            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "Não foi possível carregar o rodapé."
                    );

                }

                return response.text();

            })

            .then(html => {

                footerContainer.innerHTML =
                    html;


                const currentYear =
                    footerContainer.querySelector(
                        "#currentYear"
                    );


                if (currentYear) {

                    currentYear.textContent =
                        new Date().getFullYear();

                }

            })

            .catch(error => {

                console.error(
                    "Erro ao carregar o rodapé:",
                    error
                );

            });

    }


    /* =====================================================
       WHATSAPP FLUTUANTE
    ===================================================== */

    criarWhatsappFlutuante();

});


/* =========================================================
   MENU HAMBÚRGUER
========================================================= */

function iniciarMenu() {

    const menuToggle =
        document.getElementById(
            "menuToggle"
        );


    const mobileMenu =
        document.getElementById(
            "mobileMenu"
        );


    if (!menuToggle || !mobileMenu) {

        console.warn(
            "Menu mobile não encontrado."
        );

        return;

    }


    /* =========================================
       ABRIR / FECHAR
    ========================================== */

    menuToggle.addEventListener(
        "click",
        () => {

            const aberto =
                menuToggle.classList.toggle(
                    "active"
                );


            mobileMenu.classList.toggle(
                "active",
                aberto
            );


            menuToggle.setAttribute(
                "aria-expanded",
                aberto
                    ? "true"
                    : "false"
            );


            mobileMenu.setAttribute(
                "aria-hidden",
                aberto
                    ? "false"
                    : "true"
            );


            menuToggle.setAttribute(
                "aria-label",
                aberto
                    ? "Fechar menu"
                    : "Abrir menu"
            );

        }
    );


    /* =========================================
       FECHAR AO CLICAR EM UM LINK
    ========================================== */

    const links =
        mobileMenu.querySelectorAll(
            "a"
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                menuToggle.classList.remove(
                    "active"
                );


                mobileMenu.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                mobileMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );


                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );

            }
        );

    });


    /* =========================================
       FECHAR AO CLICAR FORA
    ========================================== */

    document.addEventListener(
        "click",
        (event) => {

            if (
                !mobileMenu.contains(
                    event.target
                ) &&
                !menuToggle.contains(
                    event.target
                )
            ) {

                menuToggle.classList.remove(
                    "active"
                );


                mobileMenu.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                mobileMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );


    /* =========================================
       ESC FECHA O MENU
    ========================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                menuToggle.classList.remove(
                    "active"
                );


                mobileMenu.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                mobileMenu.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

}


/* =========================================================
   WHATSAPP FLUTUANTE UNIVERSAL
========================================================= */

function criarWhatsappFlutuante() {

    if (
        document.querySelector(
            ".flutuante-universal"
        )
    ) {

        return;

    }


    const botao =
        document.createElement("a");


    botao.className =
        "flutuante-universal";


    botao.href =
        "https://wa.me/5564981622179?text=Ol%C3%A1!%20Vim%20atrav%C3%A9s%20do%20site%20do%20Cart%C3%B3rio%20da%20Mota%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";


    botao.target =
        "_blank";


    botao.rel =
        "noopener noreferrer";


    botao.setAttribute(
        "aria-label",
        "Falar com o Cartório da Mota pelo WhatsApp"
    );


    botao.innerHTML =
        '<i class="fa-brands fa-whatsapp"></i>';


    document.body.appendChild(
        botao
    );

}