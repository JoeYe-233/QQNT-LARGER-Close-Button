const interval = setInterval(() => {
    const targetElement = document.querySelector(".window-control-area__btn.close");
    const setting_btn = document.querySelector(".login-container .setting");
    if (targetElement) {
      clearInterval(interval);

      targetElement.style.setProperty('width', '49px', 'important');

      // 设置居中样式
      targetElement.style.display = 'flex';
      targetElement.style.justifyContent = 'center';
      targetElement.style.alignItems = 'center';
    }
    if (setting_btn && targetElement.nextSibling) {
        setting_btn.removeAttribute('data-v-592f162e');
        targetElement.style.marginRight = '0';
        targetElement.parentNode.insertBefore(setting_btn, targetElement);
    }
}, 50);