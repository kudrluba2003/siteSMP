// Скрипты взаимодействия для сайта ООО «СМП»

document.addEventListener('DOMContentLoaded', () => {
  // 1. Мобильное меню
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      const isOpen = mainNav.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });
  }

  // 2. Копирование реквизитов в один клик
  const copyBtn = document.getElementById('copyRequisitesBtn');
  const copyNotify = document.getElementById('copyNotify');

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const requisitesText = `КАРТОЧКА ОРГАНИЗАЦИИ:
Полное наименование: Общество с ограниченной ответственностью «СМП»
Фирменное обозначение: Специализированное Монтажное Предприятие
ОГРН: 1025204412617
ИНН: 5263024970
КПП: 526301001
Юридический адрес: 603096, Нижегородская область, г. Нижний Новгород, ул. Светлоярская, д. 46, помещ. 7
Основной вид деятельности (ОКВЭД): 43.99.9 (Работы строительные специализированные, не включенные в другие группировки)
Дополнительные ОКВЭД: 42.21, 33.20, 43.22, 43.99.5, 33.11, 43.11, 43.29, 43.34.1, 43.99.2, 43.99.7
Телефон: +7 (831) 246-31-15
Электронная почта: info@smp-nn.ru`;

      navigator.clipboard.writeText(requisitesText).then(() => {
        if (copyNotify) {
          copyNotify.classList.add('show');
          setTimeout(() => {
            copyNotify.classList.remove('show');
          }, 3000);
        }
      }).catch(err => {
        console.error('Ошибка копирования: ', err);
      });
    });
  }

  // 3. Плавный скролл для якорных ссылок
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
