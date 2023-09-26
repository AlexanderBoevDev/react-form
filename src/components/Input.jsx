import { findInputError, isFormInvalid } from '../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons/md'

export const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  return (
    <div className={type == "checkbox" ? ('form-check') : ('form-item')}>
      {multiline ? (
        <textarea id={id} type={type} className='form-textarea' placeholder={placeholder} {...register(name, validation)}></textarea>
      ) : (
        <input id={id} type={type} className={type == "checkbox" ? ('form-check-input') : ('form-control')} placeholder={placeholder} {...register(name, validation)}/>
      )}
      {isInvalid ? (
        <label htmlFor={id} className={type == "checkbox" ? ('form-check-label form-label-valid') : ('form-label')}>
          {label}
        </label>
      ) : (
        <label htmlFor={id} className={type == "checkbox" ? ('form-check-label') : ('form-label')}>
          {label}
        </label>
      )}
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (<InputError message={inputErrors.error.message} key={inputErrors.error.message}/>)}
      </AnimatePresence>
    </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p className='valid-feedback' {...framer_error}>
      <MdError />
      <span>{message}</span>
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}
