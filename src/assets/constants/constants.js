const regexEmail = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,10})+$/;
const regexName = /^[a-zA-Zа-яА-Я\sё-]+$/;
const regexPossword = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;
const regexPhone = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;

export { regexEmail, regexName, regexPossword, regexPhone };
