export function slashFormatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`
}

export function jsFromatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());

  return `${year}年${month}月${day}日`
}

export function toggleTitleCss(index) {
  const button = document.querySelector(`#accordion-color-heading-${index} .accordion-button`);
  const title = document.querySelector(`#accordion-color-heading-${index} .accordion-title`);

  if (button && title) {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');

    if (isExpanded) {
      title.classList.add('max-w-[90%]', 'truncate');
    } else {
      title.classList.remove('max-w-[90%]', 'truncate');
    }
  }
}