export const field_name = {
  name: 'name',
  label: 'Ваше имя',
  type: 'text',
  id: 'name',
  placeholder: '',
  validation: {
    required: {
      value: true,
      message: 'Обязательно',
    },
    maxLength: {
      value: 30,
      message: 'максимум 30 символов',
    },
  },
}

export const field_company = {
  name: 'company',
  label: 'Компания',
  type: 'text',
  id: 'company',
  placeholder: '',
  validation: {
    required: {
      value: true,
      message: 'Обязательно',
    },
    maxLength: {
      value: 30,
      message: 'максимум 30 символов',
    },
  },
}

export const field_phone = {
  name: 'phone',
  label: 'Телефон',
  type: 'number',
  id: 'phone',
  placeholder: '',
  validation: {
    required: {
      value: true,
      message: 'Обязательно',
    },
  },
}

export const field_email = {
  name: 'email',
  label: 'Электронная почта',
  type: 'email',
  id: 'email',
  placeholder: '',
  validation: {
    required: {
      value: true,
      message: 'Обязательно',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Недействителен',
    },
  },
}

export const field_desc = {
  name: 'description',
  label: 'Напишите текст обращения',
  multiline: true,
  id: 'description',
  placeholder: '',
  validation: {
    required: {
      value: false,
      message: 'Обязательно',
    },
    maxLength: {
      value: 200,
      message: 'максимум 200 символов',
    },
  },
}

export const field_file = {
  name: 'file',
  label: 'Или прикрепите файл',
  type: 'file',
  id: 'file',
  // accept: "image/*,.pdf",
  validation: {
    required: {
      value: false,
      message: 'Обязательно',
    },
  },
}

export const field_accepted = {
  name: 'accepted',
  label: 'Согласен на обработку моих персональных данных',
  type: 'checkbox',
  id: 'accepted',
  validation: {
    required: {
      value: true,
      message: 'Обязательно',
    },
  },
}
