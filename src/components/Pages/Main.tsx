import { useDialogRef, useTodoModalManage } from "../../customHook";
import DialogInputContents from "../Organisms/DialogInputContents";
import DialogTemplate from "../Templates/DialogTemplate";
import DialogInput from "../Atoms/DialogInput";
import DialogInputButton from "../Organisms/DialogInputButton";
import { useCallback, useRef, useState, MouseEventHandler } from "react";
import TodoList from "../Organisms/TodoList";
import { todo } from "../../dialogType";
import styles from "./Main.module.css";

const Main = () => {
  const {
    modalRef: addModalRef,
    showModal: showAddModal,
    closeModal: closeAddModal,
  } = useDialogRef();
  const {
    modalRef: deleteModalRef,
    showModal: showDeleteModal,
    closeModal: closeDeleteModal,
  } = useDialogRef();
  const {
    modalRef: editModalRef,
    showModal: showEditModal,
    closeModal: closeEditModal,
  } = useDialogRef();
  const {
    values: addDialogValues,
    onChange: addDialogOnChange,
    handleClickAdd,
    handleClickDelete,
    handleClickEdit,
    handleTodoCheckChange,
    todoVal,
    selectTodoId,
    alertText,
    handleClickShowDeleteModal,
    handleClickShowEditModal,
    handleClickCancelModal,
  } = useTodoModalManage(
    {
      checked: false,
      title: "",
      discription: "",
      deadline: "",
    },
    closeAddModal,
    closeDeleteModal,
    closeEditModal,
    showEditModal,
    showDeleteModal
  );
  const dialogInputContentsDict = [
    {
      label: "タイトル",
      inputChildren: (
        <DialogInput
          style={styles.inputStyle}
          type='text'
          name='title'
          value={addDialogValues.title}
          handleChange={addDialogOnChange}
        />
      ),
    },
    {
      label: "詳細",
      inputChildren: (
        <DialogInput
          style={styles.inputStyle}
          type='text'
          name='discription'
          value={addDialogValues.discription}
          handleChange={addDialogOnChange}
        />
      ),
    },
    {
      label: "期限",
      inputChildren: (
        <DialogInput
          style={styles.inputStyle}
          type='date'
          name='deadline'
          value={addDialogValues.deadline}
          handleChange={addDialogOnChange}
        />
      ),
    },
  ];

  return (
    <>
      <button className={styles.addButton} type='button' onClick={showAddModal}>
        TODOを追加
      </button>
      <div
        className={styles.visuallyHidden}
        id='notes_save_status'
        role='alert'
      >
        {alertText}
      </div>
      <TodoList
        handleClickEdit={handleClickShowEditModal}
        handleClickDelete={handleClickShowDeleteModal}
        handleTodoCheckChange={handleTodoCheckChange}
        todoList={todoVal}
      />
      <DialogTemplate
        ariaDescribedby='addDialogDesc'
        ariaLabelledby='addDialogLabel'
        _ref={addModalRef}
        id='addDialog'
        title='TODOを追加する'
      >
        <form className={styles.form} action='' method='dialog'>
          <DialogInputContents inputArrayList={dialogInputContentsDict} />
          <DialogInputButton
            text='TODOを追加する'
            handleClick={handleClickAdd}
            handleClickCancel={() => handleClickCancelModal(closeAddModal)}
            dialogButtonStyle={styles.dialogAddButton}
            dialogCancelButton={styles.dialogCancelButton}
          />
        </form>
      </DialogTemplate>
      <DialogTemplate
        ariaDescribedby='deleteDialogDesc'
        ariaLabelledby='deleteDialogLabel'
        _ref={deleteModalRef}
        id='deleteDialog'
        title={`TODOを削除する`}
        dialogRole='alertdialog'
      >
        <div className={styles.form}>
          <div
            className={styles.deleteDialogDesc}
            aria-describedby='deleteDialogDesc'
          >
            {`${todoVal[parseInt(selectTodoId)]?.title}`}のTODOを削除しますか?
          </div>
          <div>
            <DialogInputButton
              text={`削除する`}
              label={`${
                todoVal[parseInt(selectTodoId)]?.title
              }のTODOを削除する`}
              handleClick={handleClickDelete}
              handleClickCancel={() => handleClickCancelModal(closeDeleteModal)}
              dialogButtonStyle={styles.dialogDeleteButton}
              dialogCancelButton={styles.dialogCancelButton}
            />
          </div>
        </div>
      </DialogTemplate>
      <DialogTemplate
        ariaDescribedby='editDialogDesc'
        ariaLabelledby='editDialogLabel'
        _ref={editModalRef}
        id='editDialog'
        title={`${todoVal[parseInt(selectTodoId)]?.title}のTODOを編集する`}
      >
        <form className={styles.form} action='' method='dialog'>
          <DialogInputContents inputArrayList={dialogInputContentsDict} />
          <DialogInputButton
            text={`編集する`}
            label={`${todoVal[parseInt(selectTodoId)]?.title}のTODOを編集する`}
            handleClick={handleClickEdit}
            handleClickCancel={() => handleClickCancelModal(closeEditModal)}
            dialogButtonStyle={styles.dialogEditButton}
            dialogCancelButton={styles.dialogCancelButton}
          />
        </form>
      </DialogTemplate>
    </>
  );
};

export default Main;
