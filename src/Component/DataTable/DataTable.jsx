import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const DataTable = ({ Storage, handleEdit, setStorage }) => {
    const handleRemove = (id) => {
        const removeData = Storage.filter(item => item.id !== id);
        setStorage(removeData);
    };

    return (
        <div className="container mx-auto mt-4">
            <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ backgroundColor: '#333', color: '#fff' }}>#</TableCell>
                            <TableCell style={{ backgroundColor: '#333', color: '#fff' }}>Name</TableCell>
                            <TableCell style={{ backgroundColor: '#333', color: '#fff' }}>Email</TableCell>
                            <TableCell style={{ backgroundColor: '#333', color: '#fff' }}>Course</TableCell>
                            <TableCell style={{ backgroundColor: '#333', color: '#fff' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Storage.map((rec, index) => (
                            <TableRow key={rec.id} style={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{rec.name}</TableCell>
                                <TableCell>{rec.email}</TableCell>
                                <TableCell>{rec.course}</TableCell>
                                <TableCell>
                                    <button
                                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                                        onClick={() => handleEdit(rec.id)}
                                    >
                                        <PencilIcon className="w-5 h-5 inline-block" />
                                    </button>

                                    <button
                                        className="bg-red-500 text-white px-2 mx-2 py-1 rounded hover:bg-red-600"
                                        onClick={() => handleRemove(rec.id)}
                                    >
                                        <TrashIcon className="w-5 h-5 inline-block" />
                                    </button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DataTable;
