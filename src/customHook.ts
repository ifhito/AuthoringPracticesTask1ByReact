import { useState, ChangeEvent, useRef, useCallback } from "react";
import { HTMLDialogElement } from "./dialogType";
import { todo, modalFunc } from "./dialogType";

export const useDialogRef = () => {
  const modalRef: React.MutableRefObject<HTMLDialogElement | null> =
    useRef(null);
  const showModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  const closeModal = useCallback(() => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  }, []);
  return { modalRef, showModal, closeModal };
};

export const useTodoModalManage = (
  initValue: todo,
  closeAddModal: modalFunc,
  closeDeleteModal: modalFunc,
  closeEditModal: modalFunc,
  showEditModal: modalFunc,
  showDeleteModal: modalFunc
) => {
  const [todoVal, setTodoVal] = useState<todo[]>([]);
  const [selectTodoId, setSelectTodoId] = useState("");
  const [alertText, setAlertText] = useState("");

  const [values, setValues] = useState(initValue);
  const valueSet = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };
  // return { values, onChange: valueSet , setValues}
  const handleClickAdd = async () => {
    const newTodoVal = todoVal.concat(values);
    setTodoVal(newTodoVal);
    setValues({
      checked: false,
      title: "",
      discription: "",
      deadline: "",
    });
    console.log(newTodoVal);
    setAlertText("追加に成功しました");
    closeAddModal();
  };
  const handleClickDelete = () => {
    const newTodoVal = [...todoVal];
    const deleteTodo = newTodoVal[parseInt(selectTodoId)];
    newTodoVal.splice(parseInt(selectTodoId), 1);
    console.log(newTodoVal);
    setTodoVal(newTodoVal);
    setAlertText(`${deleteTodo.title}の削除に成功しました`);
    setSelectTodoId("");
    closeDeleteModal();
  };

  const handleClickEdit = () => {
    const newTodoVal = [...todoVal];
    const editTodo = newTodoVal[parseInt(selectTodoId)];
    newTodoVal.splice(parseInt(selectTodoId), 1, values);
    console.log(newTodoVal, selectTodoId, values);
    setTodoVal(newTodoVal);
    setValues({
      checked: false,
      title: "",
      discription: "",
      deadline: "",
    });
    setAlertText(`${editTodo.title}の編集に成功しました`);
    setSelectTodoId("");
    closeEditModal();
  };

  const handleTodoCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = (e.target as HTMLInputElement).value;
    const title = (e.target as HTMLInputElement).name;
    const newTodoVal = [...todoVal];
    const newTodo = newTodoVal[parseInt(id)];
    newTodo["checked"] = !newTodo.checked;
    newTodoVal.splice(parseInt(id), 1, newTodo);
    setTodoVal(newTodoVal);
    if (newTodo["checked"]) {
      setAlertText(`${title}のTODOを完了しました`);
    } else {
      setAlertText(`${title}のTODOを未完了とします`);
    }
  };

  const handleClickCancelModal = (closeFunc: modalFunc) => {
    closeFunc();
    setAlertText("キャンセルしました");
  };

  const handleClickShowEditModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    const id = (e.target as HTMLInputElement).value;
    setValues(todoVal[parseInt(id)]);
    setSelectTodoId(id);
    showEditModal();
  };
  const handleClickShowDeleteModal = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    const id = (e.target as HTMLInputElement).value;
    setSelectTodoId(id);
    showDeleteModal();
  };

  return {
    values,
    onChange: valueSet,
    handleClickAdd,
    handleClickDelete,
    handleClickEdit,
    handleTodoCheckChange,
    todoVal,
    selectTodoId,
    handleClickCancelModal,
    alertText,
    handleClickShowEditModal,
    handleClickShowDeleteModal,
  };
};
