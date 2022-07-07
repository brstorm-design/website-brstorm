export function validateForm() {
  const textAreas = document.querySelectorAll('textarea[required]');
  textAreas.forEach(textArea => {
    if (textArea.value.length < 1) {
      throw {
        message: 'Preencha este campo.',
        element: textArea.closest('section'),
      }
    }
  });

  const checkboxFieldsets = document.querySelectorAll('fieldset[type="checkbox"], fieldset[type="radio"]');
  checkboxFieldsets.forEach(fieldset => {
    const inputs = Array.from(fieldset.children);
    if (inputs.every(input => !input.control.checked)) {
      throw {
        message: 'Marque pelo menos uma caixa.',
        element: fieldset.closest('section'),
      }
    }
  });
}

export const nextQuestion = (formElement) => formElement.closest('section').nextElementSibling?.querySelector('textarea, input')?.focus();
export const prevQuestion = (formElement) => formElement.closest('section').previousElementSibling?.querySelector('textarea, input')?.focus();

export function getQueryString(object) {
  const data = { ...object };
  const params = new URLSearchParams();

  for (let key in data) {
    let value = data[key];
    if (key.includes('entry')) {
      if (typeof value === 'object') {
        for (let nestedKey in value) {
          let nestedValue = value[nestedKey];
          if (nestedValue) params.append(key, nestedKey);
        }
      } else {
        params.append(key, value);
      }
    }
  }

  return params;
  /* params.forEach((value, key) => console.log(`${key}: ${value}`)); */
}