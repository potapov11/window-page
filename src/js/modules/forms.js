import { checkNumInputs } from "./checkNumInputs.js";

const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

		checkNumInputs('input[name="user_phone"]');

  const message = {
    loading: 'Загрузка...',
    success: 'Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так',
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      inputs.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();

      //Создаем элемент с сообщением
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage); //! Помещаем блок в конец формы с которой работаем

      //Собираем данные из формы
      const formData = new FormData(item); 
      console.log(formData);

      postData('assets/server.php', formData)
          .then(res => {
            console.log(res);
            statusMessage.textContent = message.success;
          })
          .catch(() => statusMessage.textContent = message.failure)
          .finally(() => {
            clearInputs();
            setTimeout(() => {
              statusMessage.remove();
            }, 5000);
          });
    });
  });
};

export {forms};
