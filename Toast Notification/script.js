function showToast() {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.classList.add('toast');

    const message = document.createElement('span');
    message.classList.add('message');
    message.textContent = 'This is a toast notification.';

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'x';
    closeBtn.addEventListener('click', () => {
      toast.remove();
    });

    toast.appendChild(message);
    toast.appendChild(closeBtn);
    toastContainer.appendChild(toast);
  }
  