export default async function decorate(block) {
    const apiUrl = block.querySelector('a');
    const resp  = await fetch(apiUrl.href);
    const data = await resp.json();
    block.innerHTML = ''
    data.data.forEach(element => {
        block.innerHTML += "  " + element.name;
    });
}