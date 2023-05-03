const forms = () => {
  const form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input');

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

      postData('assets/server.php', formData)
          .then(res => {
            console.log(res);
            statusMessage.textContent = message.success;
          })
          .catch(() => statusMessage.textContent = message.failure)
          .finally(() => {

          });
    });
  });
};

export {forms};
