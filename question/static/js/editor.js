let orderCounter = 0;

function createWrapper(type) {
  const wrapper = document.createElement('div');
  wrapper.className = 'content-item';
  wrapper.dataset.type = type;
  wrapper.dataset.order = orderCounter++;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✕';
  deleteBtn.onclick = () => wrapper.remove();

  wrapper.appendChild(deleteBtn);
  return wrapper;
}

function addText() {
  const wrapper = createWrapper('text');
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'text...';
  wrapper.appendChild(textarea);
  document.getElementById('contentContainer').appendChild(wrapper);
}

function addCode() {
  const wrapper = createWrapper('code');
  const textarea = document.createElement('textarea');
  textarea.placeholder = 'code...';
  textarea.className = 'code-block';
  wrapper.appendChild(textarea);
  document.getElementById('contentContainer').appendChild(wrapper);
}

function addImage() {
  const wrapper = createWrapper('image');
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';

  input.onchange = () => {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.style.maxWidth = '200px';
      img.style.display = 'block';
      wrapper.appendChild(img);
      wrapper.dataset.value = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  wrapper.appendChild(input);
  document.getElementById('contentContainer').appendChild(wrapper);
}

function handleSubmit(e) {
  e.preventDefault();

  const items = document.querySelectorAll('.content-item');
  const result = [];

  items.forEach((item, index) => {
    const type = item.dataset.type;
    const order = index;
    let value = '';

    if (type === 'text' || type === 'code') {
      value = item.querySelector('textarea').value;
    } else if (type === 'image') {
      value = item.dataset.value || '';
    }

    result.push({ type, value, order });
  });

  // أرسلها للباك إند في حقل مخفي
  document.getElementById('contentJson').value = JSON.stringify(result);

  // ثم يمكنك إرسال الفورم الآن
  e.target.submit();
}