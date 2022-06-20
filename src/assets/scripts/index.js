document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        setWrapperSize: true,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1174: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            425: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20
            }
        }
    });

    const mobileMenu = new MobileMenu('menu', {
        closeBtn: 'mobile-menu-close',
        openBtn: 'mobile-menu-open',
        backdrop: 'menu-backdrop'
    });
});

class MobileMenu {
    constructor(classNameMenu, { closeBtn, openBtn, backdrop }) {
        this.menu = document.querySelector('.' + classNameMenu);
        if (!this.menu) {
            throw new Error(`Не удалось получить контейнер меню с классом ${classNameMenu}`);
        }

        this.closeBtn = document.querySelector('.' + closeBtn);
        if (!this.closeBtn) {
            throw new Error(`Не удалось получить кнопку закрытия меню с классом ${closeBtn}`);
        }

        this.openBtn = document.querySelector('.' + openBtn);
        if (!this.openBtn) {
            throw new Error(`Не удалось получить кнопку открытия меню с классом ${openBtn}`);
        }

        this.backdrop = document.querySelector('.' + backdrop);
        if (!this.openBtn) {
            throw new Error(`Не удалось получить затеняющий фон с классом ${backdrop}`);
        }

        this._setEventListeners();
    }

    _setEventListeners() {
        this.closeBtn.addEventListener('click', () => this._closeMobileMenu());
        this.openBtn.addEventListener('click', () => this._openMobileMenu());
        this.backdrop.addEventListener('click', () => this._closeMobileMenu())
    }

    _openMobileMenu() {
        this.menu.classList.add('menu-mobile--active');
        this.backdrop.classList.add('menu-backdrop--active');
        document.body.setAttribute('style', 'overflow: hidden')
    }

    _closeMobileMenu() {
        this.menu.classList.remove('menu-mobile--active');
        this.backdrop.classList.remove('menu-backdrop--active');
        document.body.removeAttribute('style');
    }
}
