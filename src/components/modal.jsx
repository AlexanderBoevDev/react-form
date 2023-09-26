const Modal = ({ show, onCloseButtonClick }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-body">
          <h2 className='modal-title'>
            Что написать в сообщении или файле?
          </h2>
          <ol>
            <li>
              <h3>Чем вы занимаетесь?</h3>
              <p>
                Расскажите о своей компании.<br/>
                Как работаете, на чем зарабатываете?<br/>
                Кто ваши конкуренты?<br/>
                Чем вы от них отличаетесь?
              </p>
            </li>
            <li>
              <h3>В чем ваша задача?</h3>
              <p>
              Чего хотите достичь в ближайшем будущем?<br/>
              Что вам мешает?
              </p>
            </li>
            <li>
              <h3>Каким вы видите решение задачи?</h3>
              <p>
                Как планируете достичь своих целей?<br/>
                Какие решения пробовали раньше?
              </p>
            </li>
            <li>
              <h3>Какие у вас ожидания от результата?</h3>
              <p>
                В каком виде вы хотите видеть решение вашей задачи?<br/>
                В какой срок?<br/>
                Почему он важен? На что это должно быть похоже?
              </p>
            </li>
            <li>
              <h3>Сколько денег планируете потратить?</h3>
              <p>
                Каков ваш бюджет?<br/>
                Почему вы готовы потратить именно такую сумму?
              </p>
            </li>
          </ol>
        </div>
        <div className="modal-footer">
          <button onClick={onCloseButtonClick} className="btn btn-submit btn-icon btn-icon-back">
            Вернуться к заполнению
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
