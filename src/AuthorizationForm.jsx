import { Input } from './components'
import { FormProvider, useForm } from 'react-hook-form'
import {
  field_name,
  field_company,
  field_phone,
  field_email,
  field_desc,
  field_file,
  field_accepted,
} from './models/form'
import { useState } from 'react'
import Modal from "./components/modal"

export const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState(false)

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
    methods.reset()
    setSuccess(true)
  })

  const [showModal, setShowModal] = useState(false)
  const toggleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <FormProvider {...methods}>
      <div className='row row--content-center'>
        <div className='col-5'>
          <h1 className='text-center text-shadow'>Анкета для новых клиентов AGIMA</h1>
        </div>
        <div className='col-4'>
          <form onSubmit={e => e.preventDefault()} noValidate autoComplete="off" className="card card-form">
            <Modal show={showModal} onCloseButtonClick={toggleShowModal} />
            <h2 className='card-title'>Сообщение в свободной форме</h2>
            {success && (
              <p className="successfully-submitted">
                Форма была успешно отправлена!
              </p>
            )}
            <div className="card-body">
              <Input {...field_name} />
              <Input {...field_company} />
              <Input {...field_phone} />
              <Input {...field_email} />
              <div className='form-item-group'>
                <button className="btn btn-info" onClick={toggleShowModal}>
                  <span>?</span>
                </button>
                <Input {...field_desc} />
              </div>
              <Input {...field_file} />
            </div>
            <div className="card-footer">
              <Input {...field_accepted} />
              <button onClick={onSubmit} className="btn btn-submit">
                <span>Отправить</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </FormProvider>
  )
}
