'use client'

import React, { useEffect } from 'react'
import styles from './todo.module.css'
import { Space, Table, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
//import { deleteTodo } from '@/lib/features/todoSlice';
import { fetchTodos } from '@/lib/features/todoSlice';



function Todolist() {
    //selector calls the store. So check what is in store. Todos are there so data.todos
    //const data = useAppSelector((state) => state.todos)
    const dispatch = useAppDispatch();
    const { data, loading, error } = useAppSelector((state) => state.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);


    // function handleDelete(record) {
    //     dispatch(deleteTodo(record.id))
    // }

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Todo',
            dataIndex: 'todo',
            key: 'todo',
            width: 700,

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Button type="link" onClick={() => handleDelete(record)}>
                        <DeleteOutlined className={styles.deleteIcon} />
                    </Button>
                </Space>
            ),
        },
    ];

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return (
        <div>
            <Table
                className={styles.table}
                columns={columns}
                dataSource={data}
                pagination={false}
                rowKey="id" />
        </div>
    )
}

export default Todolist
