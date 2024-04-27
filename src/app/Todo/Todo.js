'use client'

import React from 'react'
import styles from './todo.module.css'
import { Input, Button, Flex } from 'antd';
import Todolist from './Todolist';
import { useFormik } from 'formik';
import { useAppDispatch } from '@/lib/hooks';
import { addTodo } from '@/lib/features/todoSlice';
import { fetchTodos } from '@/lib/features/todoSlice';

const validate = values => {
    const errors = {};
    if (!values.todo) {
        errors.todo = 'Please write a todo!!';
    }
    return errors;
};

function Todo() {

    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            todo: '',
        },
        validate,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            const data = {
                todo: values.todo
            }
            dispatch(addTodo(data))
                .then(() => {
                    dispatch(fetchTodos());
                })
                .catch(error => {
                    // Handle any errors that occur during deletion
                    console.error('Error adding todo:', error);
                });
        },
    })


    return (
        <div>
            <div className={styles.header}>
                <div className={styles.title}>
                    <p>My Todo</p>
                </div>
            </div>

            <div className={styles.body}>
                <div className={styles.addTodoContainer}>
                    <div className={styles.inputContainer}>
                        <Input
                            className={styles.input}
                            placeholder="Write your todo"
                            id="todo"
                            name="todo"
                            onChange={formik.handleChange}
                            value={formik.values.todo}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.todo && formik.errors.todo ?
                            <div className={styles.errors}>{formik.errors.todo}</div>
                            : null}
                    </div>
                    <div className={styles.buttonContainer}>
                        <Flex gap="small" wrap="wrap">
                            <Button
                                className={styles.button}
                                type="primary"
                                onClick={formik.handleSubmit}>ADD</Button>
                        </Flex>
                    </div>
                </div>

            </div>

            <div className={styles.todolistContainer}>
                <Todolist />
            </div>
        </div>
    )
}

export default Todo
