var sours = document.getElementById('header').innerHTML;
var template = Handlebars.compile(sours);
var headerdata = template({
    navlink: [
        {
            href: 'index.html',
            label: 'Home',
            activeLocation: '/index.html',
        },
        {
            href: 'about-us.html',
            label: 'О нас',
            activeLocation: '/about-us.html',
        },
        {
            href: 'services.html',
            label: 'Сервисы',
            activeLocation: '/services.html',
        },
        {
            href: 'portfolio.html',
            label: 'Portfolio',
            activeLocation: '/portfolio.html',
        }
    ],
});

document.getElementById('header-1').innerHTML += headerdata;