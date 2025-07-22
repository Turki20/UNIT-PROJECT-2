


function create_project() {
    console.log('click')
    const main_sections = document.querySelector('#main_sections');
    const title = document.querySelector('#title');
    const logo = document.querySelector('#logo');
    const form = document.querySelector('.form');

    main_sections.style.right = '-150%';
    title.style.left = '-100vw';

    logo.style.top = '0%';
    logo.style.transform = 'rotate(0deg) scale(0.5)';

    setTimeout(() => {
        form.classList.add('visible');
    }, 600); // عدّل الرقم لو كان الأنيميشن أطول
}

function new_app() {
    apps = document.querySelector('#apps')
    apps.lastElementChild.remove()
    apps.innerHTML += `
    <div>
                <label for="app">app name</label>
                <input type="text" name="apps">
            </div>
            <button onclick="new_app()">add new app</button>
    `
}