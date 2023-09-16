const Handlebars = require('handlebars');
module.exports =  {
    // create helper method in handlebars
    sum: (a, b) => a + b,
    sortable: (feild, _sort) => {
        // chỉ thay đổi icon ở đúng feild mình ấn
        const sortType = _sort.column === feild ? _sort.type : 'default';
        const icons = {
            default: 'fa-solid fa-sort',
            asc: 'fa-solid fa-arrow-up-wide-short',
            desc: 'fa-solid fa-arrow-down-short-wide',
        };
        const types = {   // cần hiện thị ngược icon 
            default: 'desc',
            asc: 'desc',
            desc: 'asc'
        };
        const icon = icons[sortType];
        const type = types[sortType];
        const address = Handlebars.escapeExpression(`?_sort&column=${feild}&type=${type}`)
        const output = `
            <a href="${address}" class="ml-3"> 
                <i class="${icon}"></i>
            </a>
        `;
        return new Handlebars.SafeString(output);
    },
};